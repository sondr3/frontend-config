module.exports = {
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
    "airbnb-base",
    "eslint:recommended",
    "plugin:@typescript-eslint/all",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowTypedFunctionExpressions: true
      }
    ]
  }
};
