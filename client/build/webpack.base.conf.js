// node 中的 path 模块
var path = require('path');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/main.js'),
    vendors: [
      'react',
      'react-dom'
    ]
  },
  // 输出配置
  output: {
    path: path.resolve(__dirname, '../dist/static/js'),
    publicPath: 'static/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[chunkhash].js'
  }, 
  module: {       
    rules: [
      {
        test: /\.(js|jsx)$/,    
        enforce: "pre",
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,        
        use: ["babel-loader?cacheDirectory"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader'
        ]
      }
    ]
  }, 
  resolve: {
    extensions: ['.js', '.jsx']
  }
}