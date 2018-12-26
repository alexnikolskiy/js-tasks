const assert = require('assert').strict;
const flatten = require('./index.js');

const arr = [11, [22, 33, [44, [55, 66], 77]]];

assert.deepEqual([11, 22, 33, 44, 55, 66, 77], flatten(arr));
console.info('OK!');
