import { APIGatewayProxyHandler } from 'aws-lambda';

const handler: APIGatewayProxyHandler = async (event) => {
  try {
    console.log('event: ', JSON.stringify(event));

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'hello world' }),
      headers: {
        'content-type': 'application/json'
      }
    };
  } catch (err) {
    console.log('Error in handler: ', JSON.stringify(err));
    return {
      statusCode: 500,
      body: 'Internal Server Error'
    };
  }
};

export default handler;
