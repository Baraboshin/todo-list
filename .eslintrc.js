module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  root: true,
  extends: [
    'plugin:@web-bee-ru/base', // js/ts only
    'plugin:@web-bee-ru/react',
    'plugin:@web-bee-ru/next',
    'prettier',
  ],
};
