const capitalize = require("../scripts/capitalize");

test("return string with first char capitalized", () => {
  expect(capitalize("roger")).toBe("Roger");
});

test("remove empty spaces from beginning of string", () => {
  expect(capitalize(" robert")).toBe("Robert");
});
