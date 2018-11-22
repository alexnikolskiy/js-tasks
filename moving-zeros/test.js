const assert = require('assert');
const moveZeros = require('./index.js');

assert.deepEqual(moveZeros([0, 0, 1]), [1,0,0], '[0,0,1] -> [1,0,0]');
assert.deepEqual(moveZeros([1, 0, 0, 1]), [1, 1, 0, 0], '[1,0,0,1] -> [1,1,0,0]');
assert.deepEqual(moveZeros([0, 1, 0, 3, 12]), [1, 3, 12, 0, 0], '[0,1,0,3,12] -> [1,3,12,0,0]');
assert.deepEqual(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]), [false, 1, 1, 2, 1, 3, 'a', 0, 0 ], '[false,1,0,1,2,0,1,3,"a"] -> [false,1,1,2,1,3,"a",0,0]');

console.info('OK!');
