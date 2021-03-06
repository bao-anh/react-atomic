module.exports = {
  env: {
    commonjs: true,
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'airbnb'],
  globals: {},
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'react-hooks'],
  ignorePatterns: ['node_modules/'],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-unused-expressions': 'off',
    'comma-dangle': ['error', 'only-multiline'],
    'max-len': ['error', { code: 120, ignoreComments: true }],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }],
    semi: ['error', 'always'],
    curly: [2, 'multi-or-nest'],
    'react/jsx-fragments': 'off',
    'react/forbid-prop-types': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-cycle': [0, { ignoreExternal: true }],
    'import/no-unresolved': 'off'
  },
  settings: {
    react: {
      version: 'latest', // "detect" automatically picks the version you have installed.
    },
  },
};
