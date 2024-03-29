module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["airbnb-base"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  parser: "babel-eslint",
  rules: {
    "no-console": 1,
    "no-irregular-whitespace": 0,
    "no-underscore-dangle": 0,
    quotes: [2, "double", { avoidEscape: true }],
    "import/prefer-default-export": "off",
    "no-unused-expressions": 0,
    "no-param-reassign": ["error", { "props": false }],
    "camelcase": [0,"error", {ignoreDestructuring: true}]
  },
};
