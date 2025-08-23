const merge = require("deepmerge");
const reactSettings = require("../plugins/react");

const baseConfig = {
  env: { browser: true },
};

module.exports = merge.all([baseConfig, reactSettings]);
