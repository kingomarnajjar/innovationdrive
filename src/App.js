import React, { Component } from "react";
import "./App.css";
// import HeadNavbar from "./components/Navbar";
import Drift from "./components/Drift";
import AboveTheFold from "./layouts/AboveTheFold"
// Make this DRY ~ DO NOT REPEAT YOURSELF

class App extends Component {
  render() {
    return (
      <div className="App">
        <AboveTheFold />
        {/* Above the fold but below navbar */}
        {/* FIX BACKground image to only render before scroll on mobile/web */}
        {/* BELOW THE FOLD */}
        <Drift />
      </div>
    );
  }
}

export default App;

{
  /* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">BOOBY React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */
}
