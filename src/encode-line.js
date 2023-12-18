const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const array = str.split('');

  const arrayEncodingVersion = array.reduce((acc, char, index, arr) => {
    if (char === arr[index - 1]) {
      acc[acc.length - 1].count += 1;
    } else {
      acc.push({ char: char, count: 1 });
    }
    return acc;
  }, []);
  
  const arrayToString = arrayEncodingVersion.map((item) => {
    if (item.count > 1) {
      return `${item.count + item.char}`;
    } else {
      return `${item.char}`;
    }
  })
  
  return arrayToString.join('');
}

module.exports = {
  encodeLine
};
