const { FlatCompat } = require("@eslint/eslintrc");
const compat = new FlatCompat({ baseDirectory: __dirname });

module.exports = [
  ...compat.extends("react-app"),
  {
    files: ["cypress/**/*.js", "cypress/**/*.ts"],
    languageOptions: {
      globals: {
        cy: "readonly",
        Cypress: "readonly",
      },
    },
  },
];
