// node 中的 path 模块
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

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
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },      
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}