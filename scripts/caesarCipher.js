function caesarCipher(input, key) {
  let output = "";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVXWYZ".split("");
  const lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      output += input[i]; //allows for spaces
    } else if (input[i] === input[i].toUpperCase()) {
      let upperIndex = upperCase.findIndex((char) => char == input[i]); //matches input[i] with same character in alphabet array and *returns the value* of its index

      let shiftedIndex =
        (upperIndex + upperCase.length + key) % upperCase.length; //shift index in upperCase and move to the right by key's value (must be able to wrap)
      output += upperCase[shiftedIndex]; //outputs the character at the new index value in the properly cased alphabet array
    } else if (input[i] === input[i].toLowerCase()) {
      let lowerIndex = lowerCase.findIndex((char) => char == input[i]); //matches input[i] with same character in alphabet array and *returns the value* of its index
      let shiftedIndex =
        (lowerIndex + lowerCase.length + key) % lowerCase.length; //shift index in lowerCase and move to the right by key's value (must be able to wrap)
      output += lowerCase[shiftedIndex]; //outputs the character at the new index value in the properly cased alphabet array
    }
  }

  return output;
}

module.exports = caesarCipher;
