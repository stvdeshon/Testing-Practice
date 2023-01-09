const reverse = require("../scripts/reverseString.js");

test("reverse the characters of a string", () => {
  expect(reverse("abc def g")).toBe("g fed cba");
});
