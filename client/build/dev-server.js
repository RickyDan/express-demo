var express = require('express');
var webpack = require('webpack');
var config  = require('./webpack.dev.conf');

// 创建一个 express 实例
var app = express();

// 调用 webpack 并把配置传递过去
var compiler = webpack(config);

// 使用 webpack-dev-middleware 中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
});

// 使用 webpack-hot-middleware 中间件
var hotMiddleware = require('webpack-hot-middleware')(compiler);

// webpack 插件， 监听 html 文件改变事件
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    // 发布事件
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})
// 注册中间件
app.use(devMiddleware)
app.use(hotMiddleware)

// 监听 18888 端口, 开启服务器
app.listen(18888, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:18888')
})