#!/bin/bash

echo
echo Testing all projects...
echo

projectDir=$(pwd);

for dir in ${projectDir}/src/*;
do
  echo Working on "${dir}";
  cd ${dir};
  yarn test;
done

cd ${projectDir};
