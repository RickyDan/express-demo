var hotClient = require('webpack-hot-middleware/client')

// 订阅事件
hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload()
  }
})