import { RequestHandler, HandlerInput } from 'ask-sdk-core';
import { main as generateRequests } from './athan';

// const PERMISSIONS = ['alexa::alerts:reminders:skill:readwrite'];

export const LaunchRequest_Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest';
  },
  async handle(handlerInput) {
    const { responseBuilder } = handlerInput;
    const client =
      handlerInput.serviceClientFactory.getReminderManagementServiceClient();
    // const { permissions } = handlerInput.requestEnvelope.context.System.user;
    // if (permissions && !permissions.consentToken) {
    //   return responseBuilder
    //     .speak(messages.NOTIFY_MISSING_PERMISSIONS)
    //     .withAskForPermissionsConsentCard(PERMISSIONS)
    //     .getResponse();
    // }
    try {
      const reminders = await generateRequests();

      if (!reminders) {
        return responseBuilder
          .speak('An error occurred with the prayer time a.p.i.')
          .getResponse();
      }

      console.log('requests: ', JSON.stringify(reminders));
      reminders.forEach(async (reminderRequest) => {
        try {
          const reminderResponse = await client.createReminder(reminderRequest);
          console.log(
            'reminderRequestResponse: ',
            JSON.stringify(reminderResponse)
          );
        } catch (err) {
          console.log(
            'There was an error creating reminder: ',
            JSON.stringify(reminderRequest)
          );
        }
      });

      return responseBuilder.withShouldEndSession(true).getResponse();
    } catch (error) {
      console.log('error: ', error);
      return responseBuilder
        .speak('An error occurred creating the reminders')
        .getResponse();
    }
  }
};

// Custom intent handler
export const SetPrayerTimes_Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (
      request.type === 'IntentRequest' &&
      request.intent.name === 'SetPrayerTimes'
    );
  },
  handle(handlerInput) {
    const responseBuilder = handlerInput.responseBuilder;

    const say = 'Hello from SetPrayerTimes.';
    const repromptOutput = ' Would you like another fact?';
    return responseBuilder.speak(say).reprompt(repromptOutput);
  }
};

export type CreateCanHandler = (n: string) => (i: HandlerInput) => boolean;

// function that returns a function
const createCanHandler: CreateCanHandler =
  (intentName: string) =>
  ({ requestEnvelope: { request } }) =>
    request.type === 'IntentRequest' && request.intent.name === intentName;

const genericHandler = ({ responseBuilder }: HandlerInput) =>
  responseBuilder
    .speak('Okay, talk to you later!')
    .withShouldEndSession(true)
    .getResponse();

// Required intent handler
export const AMAZON_CancelIntent_Handler: RequestHandler = {
  canHandle: createCanHandler('AMAZON.CancelIntent'),
  handle: genericHandler
};

// Required intent handler
export const AMAZON_StopIntent_Handler: RequestHandler = {
  canHandle: createCanHandler('AMAZON.StopIntent'),
  handle: genericHandler
};

// Required intent handler
export const AMAZON_HelpIntent_Handler: RequestHandler = {
  canHandle: createCanHandler('AMAZON.HelpIntent'),
  handle: genericHandler
};

// Required intent handler
export const AMAZON_NavigateHomeIntent_Handler: RequestHandler = {
  canHandle: createCanHandler('AMAZON.NavigateHomeIntent'),
  handle: genericHandler
};

// Required intent handler
export const AMAZON_FallbackIntent_Handler: RequestHandler = {
  canHandle: createCanHandler('AMAZON.FallbackIntent'),
  handle: genericHandler
};

// Required intent handler
export const SessionEndedHandler: RequestHandler = {
  canHandle: createCanHandler('SessionEndedRequest'),
  handle: genericHandler
};

export const ErrorHandler: RequestHandler = {
  canHandle: () => true,
  handle: genericHandler
};
