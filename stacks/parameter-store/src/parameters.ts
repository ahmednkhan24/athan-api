export type Parameter = {
  logicalId: string;
  name: string;
  description: string;
  dev: string;
  prod: string;
};

export const parameters: Parameter[] = [
  {
    logicalId: 'MySsm',
    name: 'helloMessage',
    description: 'Sample test ssm value',
    dev: 'hello world',
    prod: 'hello universe'
  }
];
