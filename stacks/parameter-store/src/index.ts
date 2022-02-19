// TODO figure out why fs import causes error in VSCode but not compilation
/// <reference path="../node_modules/@types/node/fs.d.ts" />

import fs from 'fs';

const main = () => {
  console.log('hello');
  fs.writeFileSync('template.yaml', 'hi!');
};

main();
