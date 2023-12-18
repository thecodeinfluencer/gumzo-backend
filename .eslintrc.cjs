module.exports = {
  env: { browser: true, node: true, es2021: true },
  overrides: [
    {
      env: { node: true },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: { sourceType: "script" },
    },
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  rules: {
    quotes: [1, "double"],
    semi: [1, "always"],
    "no-undef": 1,
    "no-unused-vars": 1,
  },
};
