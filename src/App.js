import React, { Component } from "react";
import "./App.css";
// import HeadNavbar from "./components/Navbar";
import DriftChat from "./components/Drift";
import Homepage from "./pages/Homepage";
import WhatIs from "./layouts/WhatIs";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import Team from "./components/Team";
import Error from "./components/Error";
import HeadNavbar from "./components/Navbar";

// Make this DRY ~ DO NOT REPEAT YOURSELF

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Homepage /> */}
          {/* Above the fold but below navbar */}
          {/* FIX BACKground image to only render before scroll on mobile/web */}
          {/* BELOW THE FOLD */}
          {/* <WhatIs/> */}
          <HeadNavbar />
          <Switch>
            <Route path="/" component={Homepage} exact />
            <Route path="/team" component={Team} />
            {/* <Route path="/blog" component={Blog} /> */}

            {/* <Redirect to="/blog" /> */}

            <Route path="/team" component={Team} />
            <Route component={Error} />
          </Switch>
          <Footer />
          <DriftChat />
        </div>
      </BrowserRouter>
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
