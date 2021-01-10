import { all as deepMerge } from "deepmerge";
import type { Linter } from "eslint";

import { settings as react } from "../plugins/react";

const baseConfig: Linter.Config = {
  env: { browser: true },
  rules: {
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
  },
};

export default deepMerge([baseConfig, react]) as Linter.Config;
