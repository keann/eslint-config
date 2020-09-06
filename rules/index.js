const EXCLUDE = ['typescript.js'];

/*
    Collecting all main rules
*/

const fs = require('fs');
const path = require('path');

const exceptions = new RegExp(
  [path.basename(__filename), ...EXCLUDE].join('|'),
);

module.exports = fs
  .readdirSync(__dirname)
  .filter((fileName) => !exceptions.test(fileName))
  .map((fileName) => `./${fileName}`)
  .map(require)
  .reduce((all, rules) => ({ ...all, ...rules }), {});
