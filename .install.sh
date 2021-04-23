#!/bin/bash

echo
echo Installing all projects dependencies...
echo

projectDir=$(pwd);

for dir in ${projectDir}/src/*;
do
  echo Working on "${dir}";
  cd ${dir};
  yarn install;
done

cd ${projectDir};
