module.exports = {
  plugins: ["react-hooks"],
  extends: ["plugin:react/recommended", "prettier/react"],
  rules: {
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
