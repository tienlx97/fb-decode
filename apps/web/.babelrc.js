module.exports = {
  presets: [
    'next/babel',
    '@adeira/babel-preset-adeira',
    // ['@babel/preset-typescript', { onlyRemoveTypeImports: true }],
  ],
  plugins: ['babel-plugin-fbt', 'babel-plugin-fbt-runtime'],
}
