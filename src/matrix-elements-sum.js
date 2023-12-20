const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let sum = 0;
  const digitsBelowZeros = new Array(cols).fill(false);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!digitsBelowZeros[j]) {
        sum += matrix[i][j];
      }
      if (matrix[i][j] === 0) {
        digitsBelowZeros[j] = true;
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
