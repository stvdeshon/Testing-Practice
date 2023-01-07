module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true, //for future reference this should be added for testing with jest
    node: true, //for future reference this removes the 'undefined' tag from module.exports
  },
  extends: ["eslint:recommended", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
};
