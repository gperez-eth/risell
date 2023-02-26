module.exports = {
  root: true,
  files: ["**/*.ts", "**/*.tsx", "**/*.jsx"],
  parser: "@typescript-eslint/parser",
  extends: ["@react-native-community", "eslint-config-prettier"],
  plugins: ["prettier", "react-native"],
  ignorePatterns: [".eslintrc.js"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    jsx: true,
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
  rules: {},
};
