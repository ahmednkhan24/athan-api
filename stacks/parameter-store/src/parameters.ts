export type Parameter = {
  logicalId: string;
  name: string;
  description: string;
  dev: string;
  prod: string;
};

export const Parameters: Parameter[] = [
  {
    logicalId: 'MySsm',
    name: '/my/cool/value',
    description: 'Sample test ssm value',
    dev: 'hello world',
    prod: 'hello universe'
  }
];
