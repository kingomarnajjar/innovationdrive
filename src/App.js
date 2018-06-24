import React, { Component } from "react";
import "./App.css";
// import HeadNavbar from "./components/Navbar";
import DriftChat from "./components/Drift";
import Homepage from "./pages/Homepage";
import WhatIs from "./layouts/WhatIs"
import Footer from "./components/Footer";
// Make this DRY ~ DO NOT REPEAT YOURSELF

class App extends Component {
  render() {
    return (
      <div className="App">
        <Homepage />
        {/* Above the fold but below navbar */}
        {/* FIX BACKground image to only render before scroll on mobile/web */}
        {/* BELOW THE FOLD */}
        {/* <WhatIs/> */}
        <Footer />
        <DriftChat />
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
