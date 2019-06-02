module.exports = {
  globals: {
    MyGlobal: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "import/no-unresolved": "error"
  },
  settings: {
    "import/resolver": {
      typescript: {}
    }
  }
};
