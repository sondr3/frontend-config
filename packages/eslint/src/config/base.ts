import { all as deepMerge } from "deepmerge";
import type { Linter } from "eslint";

import { settings as prettier } from "../plugins/prettier";
import { settings as importConf } from "../plugins/import";
import { settings as unicorn } from "../plugins/unicorn";

const baseConfig: Linter.Config = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  env: {
    es6: true,
  },
  extends: ["eslint:recommended"],
};

export default deepMerge([baseConfig, prettier, importConf, unicorn]) as Linter.Config;
