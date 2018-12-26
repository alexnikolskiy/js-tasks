/**
 * @param {Array} arr
 * @returns {Array}
 */
module.exports = function flatten(arr) {
  return arr.reduce((acc, item) => (
    acc.concat(Array.isArray(item) ? flatten(item) : item)
  ), []);
};
