import React from 'react'
import ReactDOM from 'react-dom'

class Hello extends React.Component {
  render() {
      return <h1>Hello world!</h1>;
  }
}

function bootstrap() {
  ReactDOM.render(
    <Hello />, 
    document.getElementById("app-container")
  )
}

window.addEventListener('load', bootstrap)