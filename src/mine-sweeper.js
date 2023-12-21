const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  function isMine(cell) {
    return cell === true;
  }

  function countMines(matrix, x, y) {
    const offsets = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],           [0, 1],
      [1, -1], [1, 0], [1, 1],
    ];
    return offsets.filter(([dx, dy]) => {
      const newX = x + dx;
      const newY = y + dy;
      return (
        newX >= 0 &&
        newX < matrix.length &&
        newY >= 0 &&
        newY < matrix[0].length &&
        isMine(matrix[newX][newY])
      );
    }).length;
  }

  return matrix.map((row, i) =>
    row.map((cell, j) => {
      if (isMine(cell)) {
        return 1;
      } else {
        return countMines(matrix, i, j);
      }
    })
  );
}

module.exports = {
  minesweeper,
};
