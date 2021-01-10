import { all as deepMerge } from "deepmerge";
import type { Linter } from "eslint";

import { settings as react } from "../plugins/react";

const baseConfig: Linter.Config = {
  env: { browser: true },
};

export default deepMerge([baseConfig, react]) as Linter.Config;
