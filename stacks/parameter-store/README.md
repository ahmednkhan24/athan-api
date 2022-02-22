# parameter-store

- Project to manage (create/edit/delete) the parameter store in AWS Systems Manager for configuration related to the athan project

## How to manage a parameter

- Update the [parameters](src/parameters.ts) array with necessary changes
- Create a pull-request to auto-deploy the DEV changes to the DEV environment
- Merge the pull-request to auto-deploy the PROD changes to the PROD environment

### Only resources that needed to be manually created were the S3 buckets
