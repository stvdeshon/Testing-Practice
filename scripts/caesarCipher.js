function caesarCipher(string, key) {
  let ciphered = "";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVXWYZ".split("");

  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      ciphered += string[i];
    } else if (string[i] === string[i].toUpperCase()) {
      if (i + key > string.length) {
        let upper = upperCase.findIndex((char) => char == string[i] % 26);
        ciphered += upperCase[upper + key];
      } else {
        let upper = upperCase.findIndex((char) => char == string[i]);
        ciphered += upperCase[upper + key];
      }
    } else if (string[i] === string[i].toLowerCase()) {
      if (i + key > string.length) {
        let lower = lowerCase.findIndex((char) => char == string[i] % 26);
        ciphered += lowerCase[lower + key];
      } else {
        let lower = lowerCase.findIndex((char) => char == string[i]);
        ciphered += lowerCase[lower + key];
      }
    }
  }

  return ciphered;
}

module.exports = caesarCipher;

//const lower = lowerCase.findIndex((char) => char == string[(lower + key) % string.length]);
