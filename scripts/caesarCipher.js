function caesarCipher(string, key) {
  let ciphered = "";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVXWYZ".split("");

  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      ciphered += string[i];
    } else if (string[i] === string[i].toUpperCase()) {
      if (i == string.length) {
        // let reducer = string.length - 1 - i;
        // let modulo = key - reducer;

        let upper = upperCase.findIndex((char) => char == string[i] + key);
        ciphered += upperCase[upper + key];
      } else if (i + key > string.length) {
        let reducer = string.length - i;
        let modulo = key - reducer;

        let upper = upperCase.findIndex((char) => char == string[i] + key);
        ciphered += upperCase[upper + modulo];
      } else {
        let upper = upperCase.findIndex((char) => char == string[i]);
        ciphered += upperCase[upper + key];
      }
    } else if (string[i] === string[i].toLowerCase()) {
      if (i == string.length) {
        // let reducer = string.length - 1 - i;
        // let modulo = key - reducer;

        let upper = lowerCase.findIndex((char) => char == string[i] + key);
        ciphered += lowerCase[upper + key];
      } else if (i + key > string.length) {
        let reducer = string.length - i;
        let modulo = key - reducer;

        let lower = lowerCase.findIndex((char) => char == string[i] + key);
        ciphered += lowerCase[lower + modulo];
      } else {
        let lower = lowerCase.findIndex((char) => char == string[i]);
        ciphered += lowerCase[lower + key];
      }
    }
  }

  return ciphered;
}

module.exports = caesarCipher;

// if (i == string.length - 1) {
//   let reducer = string.length - 1 - i;
//   let modulo = key - reducer;

//   let upper = upperCase.findIndex((char) => char == string[i] + key);
//   ciphered += upperCase[upper + modulo];
// }
