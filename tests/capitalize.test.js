const capitalize = require("../scripts/capitalize");

test("return string with first char capitalized", () => {
  expect(capitalize("roger")).toBe("Roger");
});
