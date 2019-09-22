module.exports = {
  env: {
    browser: true
  },
  extends: ["eslint:recommended"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      experimentalDecorators: true
    },
    ecmaVersion: 6,
    sourceType: "module"
  },
  rules: {
    "default-case": "off"
  }
};
