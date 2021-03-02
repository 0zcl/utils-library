module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'space-before-function-paren': 'off',
    '@typescript-eslint/no-inferrable-types': 'off', // 禁止对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明
    '@typescript-eslint/no-var-requires': 'off', // var foo = require("foo")禁止使用诸如之类的形式
    '@typescript-eslint/no-explicit-any': ['off']
  }
}
