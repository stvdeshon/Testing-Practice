function caesarCipher(string, key) {
  let ciphered = "";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVXWYZ".split("");

  for (let i in string) {
    if (string[i] === " ") {
      ciphered += string[i];
    } else if (string[i] === string[i].toUpperCase()) {
      const upper = upperCase.findIndex((char) => char == string[i]);
      ciphered += upperCase[upper + key];
    } else if (string[i] === string[i].toLowerCase()) {
      const lower = lowerCase.findIndex((char) => char == string[i]);
      ciphered += lowerCase[lower + key];
    }
  }

  return ciphered;
}

module.exports = caesarCipher;
