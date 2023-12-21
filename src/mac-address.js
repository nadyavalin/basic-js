const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const hyphensed = n.split('-');
  const hexChars = "0123456789ABCDEF";

  for (let i = 0; i < 6; i += 1) {
    if (hyphensed[i].length !== 2) {
      return false;
    }
    for (let j = 0; j < 2; j += 1) {
      if (hexChars.indexOf(hyphensed[i][j]) === -1) {
        return false;
      }
    }
  }
  return true;
}

module.exports = {
  isMAC48Address
};
