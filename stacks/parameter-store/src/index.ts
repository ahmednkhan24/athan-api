// TODO figure out why fs import causes error in VSCode but not compilation
/// <reference path="../node_modules/@types/node/fs.d.ts" />

import fs from 'fs';

const createTemplateFileData = () => {
  const header = `\
AWSTemplateFormatVersion: 2010-09-09\n\
Transform: AWS::Serverless-2016-10-31\n\n\
`;

  const resources = `\
Resources:\n\
  MySsm:\n\
    Type: AWS::SSM::Parameter\n\
    Properties:\n\
      Type: String\n\
      Name: /my/cool/value\n\
      Value: hello world\n\
      Description: My cool SSM value\n\
`;

  return `${header}${resources}`;
};

const main = () => {
  console.log('hello');
  fs.writeFileSync('template.yaml', createTemplateFileData());
};

main();
