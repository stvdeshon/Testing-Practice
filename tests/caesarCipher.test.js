const caesarCipher = require("../scripts/caesarCipher");

test("shifts every letter in a string by one while retaining case", () => {
  expect(caesarCipher("Julius", 1)).toBe("Kvmjvt");
});

test("works with spaces", () => {
  expect(caesarCipher("Ab cD", 1)).toBe("Bc dE");
});

test("wraps from Z to B", () => {
  expect(caesarCipher("Z", 2)).toBe("B");
});
