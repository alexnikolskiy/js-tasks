const assert = require('assert');
const sortClassNames = require('./index.js');

const classNames = [
  'header', 'menu', 'menu-item', 'menu-item', 'menu-item', 'footer', 'menu', 'link', 'link', 'link', 'link'
];
const result = [ 'link', 'menu-item', 'menu', 'header', 'footer' ];

assert.deepEqual(sortClassNames(classNames), result);

console.info('OK!');
