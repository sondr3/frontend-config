import type { Linter } from "eslint";

export const settings: Linter.Config = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react-hooks"],
  extends: ["plugin:react/recommended", "prettier/react", "plugin:jsx-a11y/recommended"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
