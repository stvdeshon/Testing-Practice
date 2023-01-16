const caesarCipher = require("../scripts/caesarCipher");

test("shifts every letter in a string by one while retaining case", () => {
  expect(caesarCipher("Abcde", 1)).toBe("Bcdef");
});

test("works with spaces", () => {
  expect(caesarCipher("Ab cD", 2)).toBe("Cd eF");
});

test("wraps from Z to D", () => {
  expect(caesarCipher("Z", 4)).toBe("D");
});

test("wraps from y to b", () => {
  expect(caesarCipher("y", 3)).toBe("b");
});

test("multiple characters wrap", () => {
  expect(caesarCipher("yz", 3)).toBe("bc");
});

test("works with a big key", () => {
  expect(caesarCipher("a", 2602)).toBe("c");
});

test("works with a negative key", () => {
  expect(caesarCipher("a", -3)).toBe("x");
});
