import { createData } from './template';

const main = () => {
  const awsEnv = (process.argv[2] && process.argv[2].toLowerCase()) || 'dev';
  createData(awsEnv);
};

main();
