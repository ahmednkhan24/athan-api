export type Parameter = {
  logicalId: string;
  name: string;
  description: string;
  dev: string;
  prod: string;
};

export const parameters: Parameter[] = [
  {
    logicalId: 'AlexaSkillId',
    name: 'alexa-skill-id',
    description: 'Athan Alexa Skill ID',
    dev: 'amzn1.ask.skill.d637ecd3-7534-4d17-a681-31eb557020a5',
    prod: 'amzn1.ask.skill.b2707d76-213a-4a54-9905-84fad81eb7be'
  },
  {
    logicalId: 'AthanTrackerDatabaseName',
    name: 'athan-tracker-database-name',
    description: 'Dynamo DB name for the athan tracker database',
    dev: 'athan-tracker-database-dev',
    prod: 'athan-tracker-database-prod'
  }
];
