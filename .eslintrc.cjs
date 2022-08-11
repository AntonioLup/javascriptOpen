module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    indent: "off",
    quotes: ["error", "never"],
    semi: ["error", "never"],
    semicolon: "off",
  },
};
