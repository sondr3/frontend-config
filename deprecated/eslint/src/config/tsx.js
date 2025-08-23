const merge = require("deepmerge");
const reactSettings = require("../plugins/react");

const baseConfig = {
  env: { browser: true },
  rules: {
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
  },
};

module.exports = merge.all([baseConfig, reactSettings]);
