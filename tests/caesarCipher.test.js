const caesarCipher = require("../scripts/caesarCipher");

test("shifts every letter in a string to the next one in the alphabet", () => {
  expect(caesarCipher("Julius")).toBe("Kvmjvt");
});
