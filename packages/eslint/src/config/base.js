const merge = require("deepmerge");
const importSettings = require("../plugins/import");
const prettierSettings = require("../plugins/prettier");
const unicornSettings = require("../plugins/unicorn");

const baseConfig = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  env: {
    es6: true,
  },
  extends: ["eslint:recommended"],
};

module.exports = merge.all([baseConfig, prettierSettings, importSettings, unicornSettings]);
