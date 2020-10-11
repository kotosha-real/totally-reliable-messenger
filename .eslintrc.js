module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: ['standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-useless-constructor': 0, // since there are some components that only call absract superclass constructor at the moment
    '@typescript-eslint/no-useless-constructor': 0, // since there are some components that only call absract superclass constructor at the moment
    'no-undef': 0
  },
  globals: {
    Handlebars: true
  }
}
