import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import styles from "./index.css";

// import "./AboveTheFold.css";
import HeadNavbar from "../../components/Navbar.js";
import ModalExample from "../../components/PopUpSignUp.js";
import MainJumbotron from "../../components/Jumbotron";
import InventionProcessDeck from "../../components/Decks";
import ClientStories from "../../components/clientStories";
import kickstarterLogo from "../../images/kickstarter-logo.png";
import haizolLogo from "../../images/haizol-logo.png";
// /Users/omar/Desktop/innovationDrive/innovation-drive/src/components/Form.js

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <div className="backgroundContainer">
          <HeadNavbar />
          <Container>
            <MainJumbotron />
          </Container>

          <Container>
            <h1>Customer Journey</h1>
            {/* ADD BOOTSRAP CAROUSEL HERE */}
          </Container>
          <Container>
            <h3>The Invention Process</h3>
            {/* ADD BOOTSRAP CAROUSEL HERE */}
          </Container>
          <Container />
        </div>
        <Container>
          <ClientStories />
        </Container>
        <br />
        <br />
        <InventionProcessDeck />
        {/* <Container className="YellowStyling">
          <Row>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Row>
        </Container> */}
        <Container className="Logos">
          <Row>
            {/* ADD LOGOS HERE */}
            <img
              src={kickstarterLogo}
              className="kickstarter-logo"
              alt="logo"
            />
              <img
              src={haizolLogo}
              className="kickstarter-logo"
              alt="logo"
            />
          </Row>
          <Row>

          </Row>
        </Container>
      </div>
    );
  }
}
