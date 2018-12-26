/**
 * @param {Array} arr
 * @returns {Object}
 */

module.exports = function (arr) {
  return arr.reduce((acc, item) => {
    const [currency, type, value] = item;

    if (!acc[currency]) {
      acc[currency] = [0, 0];
    }

    switch (type) {
      case 'buy':
        acc[currency][0] += value;
        break;
      case 'sell':
        acc[currency][1] += value;
        break;
    }

    return acc;
  }, {});
};
