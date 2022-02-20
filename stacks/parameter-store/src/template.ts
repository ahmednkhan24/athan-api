import { writeFileSync } from 'fs';
import { parameters, Parameter } from './parameters';

const rootName = 'athan/backend';

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
      Name: ${rootName}/${awsEnv}/${param.name}\n\
      Value: ${param[awsEnv]}\n\
      Description: ${param.description}\n\
`;

export const createData = (awsEnv: string) => {
  console.log('awsEnv: ', awsEnv);
  const param = createParameter(parameters[0], awsEnv);
  return `${header}${param}`;
};

// const createTemplateFileData = () => {
//   const header = `\
// AWSTemplateFormatVersion: 2010-09-09\n\
// Transform: AWS::Serverless-2016-10-31\n\n\
// Resources:\n\
// `;

//   const resources = `\
//   MySsm:\n\
//     Type: AWS::SSM::Parameter\n\
//     Properties:\n\
//       Type: String\n\
//       Name: /my/cool/value\n\
//       Value: hello world\n\
//       Description: My cool SSM value\n\
// `;

//   return `${header}${resources}`;
// };

export const createFile = (templateFilesData: string) => {
  writeFileSync('template.yaml', templateFilesData);
};
