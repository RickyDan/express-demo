import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Loading from './Loading'

const App = () => (
  <div className="main">
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <Loading />
  </div>
)

export default App
