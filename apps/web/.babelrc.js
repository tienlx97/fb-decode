module.exports = {
  presets: [
    ['next/babel', { 'preset-env': { include: ['proposal-private-methods'] } }],
    '@adeira/babel-preset-adeira',
    ['@babel/preset-typescript', { onlyRemoveTypeImports: true }],
  ],
  plugins: [
    'babel-plugin-fbt',
    'babel-plugin-fbt-runtime',
    [
      '@babel/plugin-transform-react-jsx',
      {
        throwIfNamespace: false,
      },
    ],
  ],
}
