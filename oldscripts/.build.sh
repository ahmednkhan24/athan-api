#!/bin/bash

echo
echo Building all projects...
echo

projectDir=$(pwd);

for dir in ${projectDir}/src/*;
do
  echo Working on "${dir}";
  cd ${dir};
  yarn build;
done

cd ${projectDir};
