const Calculator = require("../scripts/calculator");

test("addition with Calculator", () => {
  const calculator = new Calculator();
  expect(calculator.add(3, 3)).toBe(6);
});

test("subtraction with Calculator", () => {
  const calculator = new Calculator();
  expect(calculator.subtract(3, 3)).toBe(0);
});

test("multiplication with Calculator", () => {
  const calculator = new Calculator();
  expect(calculator.multiply(3, 3)).toBe(9);
});

test("division with Calculator", () => {
  const calculator = new Calculator();
  expect(calculator.divide(12, 6)).toBe(2);
});

// Note to future self: You must instantiate an imported class to test its methods
