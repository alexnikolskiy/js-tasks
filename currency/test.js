const assert = require('assert');
const countBalance = require('./index.js');

const input = [
  ['usd', 'buy', 10000],
  ['usd', 'sell', 5000],
  ['gbp', 'buy', 9000],
  ['eur', 'sell', 7000],
  ['uah', 'buy', 10000],
  ['usd', 'sell', 25000],
];
const output = {
  usd: [10000, 30000],
  gbp: [9000, 0],
  eur: [0, 7000],
  uah: [10000, 0]
};

assert.deepEqual(countBalance(input), output);

console.info('OK!');
