import { parameters, Parameter } from './parameters';

const rootName = 'athan';

const header = `\
AWSTemplateFormatVersion: 2010-09-09\n\
Transform: AWS::Serverless-2016-10-31\n\n\
Resources:\n\
`;

const createParameter = (param: Parameter, awsEnv: string) => `\
  ${param.logicalId}:\n\
    Type: AWS::SSM::Parameter\n\
    Properties:\n\
      Type: String\n\
      Name: /${rootName}/${awsEnv}/${param.name}\n\
      Value: ${param[awsEnv]}\n\
      Description: ${param.description}\n\
`;

export const validateParameters = () => {
  const seenLogicalIds = new Set<string>();
  const seenNames = new Set<string>();

  for (const param of parameters) {
    if (seenLogicalIds.has(param.logicalId))
      return {
        isValid: false,
        duplicateType: 'logicalId',
        duplicateValue: param.logicalId
      };
    if (seenNames.has(param.name))
      return {
        isValid: false,
        duplicateType: 'name',
        duplicateValue: param.name
      };

    seenLogicalIds.add(param.logicalId);
    seenNames.add(param.name);
  }

  return { isValid: true };
};

export const parseParameters = (awsEnv: string) =>
  parameters.reduce(
    (allParams, param) => `${allParams}${createParameter(param, awsEnv)}`,
    header
  );
