/**
 * @param {Array} classNames
 * @returns {Array}
 */
module.exports = function (classNames) {
  const count = {};

  const res = classNames.reduce((acc, item) =>
    count[item] ? count[item]++ && acc : [...acc, (count[item] = 1) && item]
  , []);

  return res.sort((a, b) => count[b] - count[a]);
};
