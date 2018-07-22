import React, { Component } from "react";
import "./App.css";
import Amplify from "aws-amplify";
import awsmobile from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react"; //wraps app in authentication
import S3ImageUpload from "./components/ImageUpload"; //for image viewing and uploading to S3 bucket
import HeadNavbar from "./components/Navbar"

Amplify.configure(awsmobile);

  class App extends Component {
    render() {
      return (
        <div className="App">
          <HeadNavbar />
          <S3ImageUpload/>
          {/* <button onClick="" /> */}
        </div>
      );
    }
  }

export default withAuthenticator(App);
