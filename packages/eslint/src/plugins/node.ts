import type { Linter } from "eslint";

export const settings: Linter.Config = {
  plugins: ["node"],
  extends: ["plugin:node/recommended"],
};
