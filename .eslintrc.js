module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: ['tsconfig.json', 'next.config.js'],
    tsconfigRootDir: __dirname
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
    semi: 'error',
    quotes: ['error', 'single', { 'avoidEscape': true }],
    "jsx-quotes": ["error", "prefer-single"],
    '@typescript-eslint/consistent-type-definitions': 'off',
    "@typescript-eslint/no-unsafe-assignment": "off",
    'react/no-unescaped-entities': 'off',
  },
  env: {
    browser: true,
    es2021: true
  },
  ignorePatterns: ['next.config.js', '.eslintrc.js']
};