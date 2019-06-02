module.exports = {
  plugins: ["stylelint-order"],
  processors: ["stylelint-processor-styled-components"],
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-styled-components",
    "stylelint-a11y/recommended",
    "stylelint-prettier/recommended"
  ],
  rules: {
    "order/order": ["custom-properties", "declarations"],
    "order/properties-alphabetical-order": true
  }
};
