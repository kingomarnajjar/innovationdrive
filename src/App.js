import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Amplify from "aws-amplify";
import awsmobile from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react"; //wraps app in authentication
import S3ImageUpload from "./components/ImageUpload"; //for image viewing and uploading to S3 bucket

Amplify.configure(awsmobile);

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
          <S3ImageUpload/>
          {/* <button onClick="" /> */}
        </div>
      );
    }
  }

export default withAuthenticator(App);
