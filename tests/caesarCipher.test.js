const caesarCipher = require("../scripts/caesarCipher");

test("shifts every letter in a string by one while retaining case", () => {
  expect(caesarCipher("Juliuy", 1)).toBe("Kvmjvz");
});

test("works with spaces", () => {
  expect(caesarCipher("Ab cD", 1)).toBe("Bc dE");
});

test("wraps from Z to D", () => {
  expect(caesarCipher("Z", 4)).toBe("D");
});

test("wraps from y to b", () => {
  expect(caesarCipher("y", 3)).toBe("b");
});
