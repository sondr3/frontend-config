module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "airbnb-base",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:prettier/recommended",
  ],
  rules: {
    "import/no-unresolved": "error",
    "prettier/prettier": "error",
  },
};
