/**
 * @param {Array} arr
 * @returns {Array}
 */
module.exports = function (arr) {
  let res = arr.reduce((acc, item) => item === 0 ? acc : [...acc, item], []);
  return res.fill(0, res.length, res.length = arr.length);
};
