module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  root: true,
  plugins: [
    '@typescript-eslint',
    'react',
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:@web-bee-ru/base', // js/ts only
    'plugin:@web-bee-ru/react',
    'plugin:@web-bee-ru/next',
  ],
};
