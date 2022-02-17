#!/bin/bash

echo
echo Attempting to deploy stack...
echo

# output what AWS profile will be used to deploy the stack
env PAGER=cat aws sts get-caller-identity;

stackery deploy --aws-profile ${AWS_PROFILE} --strategy ${STACKERY_STRATEGY} --env-name ${STACKERY_ENV_NAME} --git-ref $(git rev-parse --verify HEAD) --non-interactive
