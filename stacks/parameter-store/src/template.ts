import * as fs from 'fs';

const header = `\
AWSTemplateFormatVersion: 2010-09-09\n\
Transform: AWS::Serverless-2016-10-31\n\n\
`;

export const createData = (awsEnv: string) => {
  console.log('awsEnv: ', awsEnv);
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
  // fs.writeFileSync('template.yaml', createTemplateFileData());
};
