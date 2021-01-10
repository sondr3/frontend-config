import { all as deepMerge } from "deepmerge";
import type { Linter } from "eslint";

import base from "./base";

const baseConfig: Linter.Config = {
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      settings: {
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"],
        },
      },
    },
  ],
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier/@typescript-eslint",
    "plugin:import/typescript",
  ],
  rules: {
    // Not needed, see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md#when-not-to-use-it
    "@typescript-eslint/typedef": "off",
    "import/no-default-export": "error",
    "import/no-unresolved": "off",
  },
};

export default deepMerge([baseConfig, base]) as Linter.Config;
