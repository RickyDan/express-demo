module.exports = {
  atRules: [
    'for', 'if', 'else', 'each', 'mixin', 'customer-media'
  ],
  plugins: [
    require('precss'),
    require('autoprefixer'),
    require('postcss-smart-import')
  ]
}
