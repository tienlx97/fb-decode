module.exports = {
  root: true,
  extends: ['@portal/eslint-config-next', 'plugin:relay/recommended'],
  rules: {
    'relay/generated-flow-types': 'off',
  },
  plugins: ['relay'],
}
