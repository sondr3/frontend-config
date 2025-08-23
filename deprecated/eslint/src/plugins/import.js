module.exports = {
  plugins: ["simple-import-sort"],
  extends: ["plugin:import/errors", "plugin:import/warnings"],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "sort-imports": "off",
    "import/order": "off",
  },
};
