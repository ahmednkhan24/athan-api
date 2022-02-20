import { createData } from './template';

const validAwsEnvironments = ['dev', 'prod'];

const main = () => {
  const awsEnv = (process.argv[2] && process.argv[2].toLowerCase()) || 'dev';

  if (!validAwsEnvironments.includes(awsEnv)) {
    console.error('You must supply a valid AWS environment!');
    console.error(`Valid AWS environments: ${validAwsEnvironments.toString()}`);
    console.error(`AWS environment provided: ${awsEnv}\n`);
    process.exit(1);
  }

  createData(awsEnv);

  process.exit(0);
};

main();
