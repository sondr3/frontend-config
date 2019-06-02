module.exports = {
  plugins: ["react-hooks"],
  extends: [
    "plugin:react/recommended",
    "prettier/react",
    "plugin:jsx-a11y/recommended"
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
