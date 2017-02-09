var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

// 引入基础配置
var config = require('./webpack.base.conf')

config.output.publicPath = '/'

config.plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, '../index.html'),
    inject: true
  })
];

// 动态向入口配置中注入 webpack-hot-middleware/client
var devClient = './build/dev-client';
Object.keys(config.entry).forEach(function (name, i) {
  var extras = [devClient];
  config.entry[name] = extras.concat(config.entry[name])
})

module.exports = config;