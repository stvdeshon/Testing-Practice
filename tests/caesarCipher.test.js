const caesarCipher = require("../scripts/caesarCipher");

test("shifts every letter in a string by one while retaining case", () => {
  expect(caesarCipher("Julius", 1)).toBe("Kvmjvt");
});

test("works with spaces", () => {
  expect(caesarCipher("Ab cD", 1)).toBe("Bc dE");
});

test("wraps from z to a", () => {
  expect(caesarCipher("z", 2)).toBe("b");
});
