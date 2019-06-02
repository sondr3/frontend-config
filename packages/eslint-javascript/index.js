module.exports = {
  globals: {
    MyGlobal: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended"
  ],
  rules: {
    "import/no-unresolved": "error",
    "prettier/prettier": "error"
  }
};
