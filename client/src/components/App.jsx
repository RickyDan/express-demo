import React from 'react'
import '../styles/index.css'
export default class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Hi {this.props.name}</h1>
      </div>
    )
  }
}
