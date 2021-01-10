import type { Linter } from "eslint";

export const settings: Linter.Config = {
  plugins: ["functional"],
  extends: ["plugin:functional/external-recommended", "plugin:functional/recommended", "plugin:functional/stylitic"],
};
