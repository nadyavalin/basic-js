const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  checkArguments(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
  }

  currentMessage(message, key, encrypt) {
    this.checkArguments(message, key);
    let messageArray = message.split("");
    let keyArray = key.split("");
    let result = "";
    let j = 0;

    messageArray.forEach((char) => {
      if (/[a-zA-Z]/.test(char)) {
        let charCode = char.toUpperCase().charCodeAt(0) - "A".charCodeAt(0);
        let keyChar =
          keyArray[j % key.length].toUpperCase().charCodeAt(0) -
          "A".charCodeAt(0);
        let newCharCode;
        if (encrypt) {
          newCharCode = (charCode + keyChar) % 26;
        } else {
          newCharCode = (charCode - keyChar + 26) % 26;
        }
        result += String.fromCharCode(newCharCode + "A".charCodeAt(0));
        j += 1;
      } else {
        result += char;
      }
    });

    if (this.isDirect) {
      return result.replace(/(\s)+/g, " ");
    } else {
      return result.split("").reverse().join("").replace(/(\s)+/g, " ");
    }
  }

  encrypt(message, key) {
    return this.currentMessage(message, key, true);
  }

  decrypt(encryptedMessage, key) {
    return this.currentMessage(encryptedMessage, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine,
};
