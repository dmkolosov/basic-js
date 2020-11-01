const CustomError = require("../extensions/custom-error");
let codeA = 65;
let lettersInAlp = 26;

class VigenereCipheringMachine {
  constructor(type) {
    this.reverseType = type === false;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("message or key undefined");
    }

    let shift = 0;
    key = key.toUpperCase().split``.map((c) => c.charCodeAt(0) - codeA);
    message = message.toUpperCase().split``.map((elem, index) =>
      /[A-Z]/.test(elem)
        ? String.fromCharCode(
            ((elem.charCodeAt(0) - codeA + key[(index - shift) % key.length]) %
              lettersInAlp) +
              codeA
          )
        : (shift++, elem)
    );

    return this.reverseType ? message.reverse().join`` : message.join``;
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("message or key undefined");
    }

    let shift = 0;
    key = key.toUpperCase().split``.map((c) => c.charCodeAt(0) - codeA);
    message = message.toUpperCase().split``.map((elem, index) =>
      /[A-Z]/.test(elem)
        ? String.fromCharCode(
            ((elem.charCodeAt(0) -
              codeA +
              lettersInAlp -
              key[(index - shift) % key.length]) %
              lettersInAlp) +
              codeA
          )
        : (shift++, elem)
    );

    return this.reverseType ? message.reverse().join`` : message.join``;
  }
}

module.exports = VigenereCipheringMachine;
