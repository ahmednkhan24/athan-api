import { writeFileSync } from 'fs';
import { validateParameters, parseParameters } from './template';

const validAwsEnvironments = ['dev', 'prod'];

const main = () => {
  const awsEnv = (process.argv[2] && process.argv[2].toLowerCase()) || 'dev';

  if (!validAwsEnvironments.includes(awsEnv)) {
    console.error('You must supply a valid AWS environment!');
    console.error(`Valid AWS environments: ${validAwsEnvironments.toString()}`);
    console.error(`AWS environment provided: ${awsEnv}\n`);
    process.exit(1);
  }

  const { isValid, duplicateType, duplicateValue } = validateParameters();
  if (!isValid) {
    console.error(
      `Parameter with '${duplicateType}' of '${duplicateValue}' already exists!\n`
    );
    process.exit(1);
  }

  const parameters = parseParameters(awsEnv);
  writeFileSync(`template.${awsEnv}.yaml`, parameters);

  console.log('done!');
  process.exit(0);
};

main();
