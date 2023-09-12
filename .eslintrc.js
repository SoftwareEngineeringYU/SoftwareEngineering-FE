module.exports = {
  parser: "@babel/eslint-parser",
  plugins: ["react"],
  rules: {
    // 여기에 React 관련 규칙들 추가할 수 있습니다.
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
    sourceType: "module",
  },
};
