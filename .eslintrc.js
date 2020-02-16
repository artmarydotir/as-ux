module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/require-v-for-key' : 'off',
    '[vue/no-use-v-if-with-v-for]' : 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
