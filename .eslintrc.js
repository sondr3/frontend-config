module.exports = {
  extends: [
    "@sondr3/eslint-config/base",
    "@sondr3/eslint-config/node",
    "plugin:node/recommended-script",
  ],
  rules: {
    "unicorn/prefer-module": "off",
  },
};
