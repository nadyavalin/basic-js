const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const string = n.toString();
  let maxNumber = 0;

  string.split('').map((_, index) => {
    const number = parseInt(string.slice(0, index) + string.slice(index + 1));
    if (number > maxNumber) {
      maxNumber = number;
    }
  });
  return maxNumber;
}

module.exports = {
  deleteDigit
};
