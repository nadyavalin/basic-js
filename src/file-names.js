const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const nameCounter = new Map();
  let array = [];

  for (let k = 0; k < names.length; k += 1) {
    let name = names[k];
    let counter = nameCounter.get(name) || 0;

    while (array.includes(name)) {
      counter += 1;
      name = `${names[k]}(${counter})`;
    }

    nameCounter.set(names[k], counter);
    nameCounter.set(name, 0);
    array.push(name);
  }
  return array;
}

module.exports = {
  renameFiles
};
