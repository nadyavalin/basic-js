const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const stringNames = members.filter((member) => typeof member === "string");

  const clearNames = stringNames.map((name) => {
    if (typeof name === 'string') {
        return name.trim();
    }
    return '';
  });

  const firstLetters = clearNames.map((name) => {
    return name[0].toUpperCase();
  });

  const finalString = firstLetters.sort().join("");

  return finalString;
}

module.exports = {
  createDreamTeam
};
