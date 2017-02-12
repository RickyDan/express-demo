import React from 'react'
import { render } from 'react-dom'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import DevTools from './containers/DevTools'
import reducer from './reducers'

// 把多个 store 增强器从右到左来组合起来，依次执行
// 这个地方完全可以不用compose，演示一下compose的使用
const enhancer = compose(
  DevTools.instrument()
)

const store = createStore(reducer, enhancer)

render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
)
