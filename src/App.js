import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import Logo from "./components/Logo"
import ListMovie from "./components/ListMovie"
import ButtonMore from "./components/ButtonMore"
import Carousel from "./components/Carousel"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Logo />
        <Carousel />
        <ListMovie />
        <ButtonMore />
      </div>
    )
  }
}

export default App
