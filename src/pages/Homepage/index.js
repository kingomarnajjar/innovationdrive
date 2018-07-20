import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Router, Route } from "react-router";
import styles from "./index.css";

// import "./AboveTheFold.css";
import HeadNavbar from "../../components/Navbar.js";
import ModalExample from "../../components/PopUpSignUp.js";
import MainJumbotron from "../../components/Jumbotron";
import InventionProcessDeck from "../../components/Decks";
import ClientStories from "../../components/clientStories";
import kickstarterLogo from "../../images/kickstarter-logo.png";
import haizolLogo from "../../images/haizol-logo.png";
import sayee from "../../images/sayee.jpeg";
import omar from "../../images/omar.jpeg";
import HelloSign from "../../components/HelloSign";
import StateButton from "../../components/StateButton";


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
        <br />
        <br />
        <Container className="Logos">
          <Row>
            {/* ADD LOGOS HERE */}
            <Col>
              <a href="https://www.kickstarter.com" target="_blank">
                {" "}
                <img
                  src={kickstarterLogo}
                  className="kickstarter-logo"
                  alt="logo"
                />
              </a>
            </Col>
            <Col>
              <a href="https://www.haizol.com" target="_blank">
                <img src={haizolLogo} className="haizol-logo" alt="logo" />
              </a>
            </Col>
          </Row>
          <Row />
        </Container>
        <br />
        <br />
        <br />
        <Container>
          <h2>Team </h2>
          <br />
          <Row>
            <Col>
              <img src={sayee} className="sayee-img" alt="logo" />
            </Col>
            <Col>
              <p>
                20+ years of experience leading teams of 10-40 staff members.
                Managed 30+ projects ranging from $100K-$1.7M in budget. 200+
                hours of presenting and training on a wide variety of subjects
                including innovation, teamwork and project management.
                Specialties: Product Design, Pro-E Wildfire, SolidWorks,
                AutoCAD, Tooling Design, Tool & Die Making, PLM, DFM, DFA,
                Machining, CNC, QA, FEA
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <img src={omar} className="omar-img" alt="logo" />
            </Col>
            <Col>
              <p>
                Software Engineer including innovation, teamwork and project
                management. Specialties: JAMstack, React js, AWS, Prototyping
                Adobe xD
              </p>
            </Col>
          </Row>
        </Container>
        <StateButton />
      </div>
    );
  }
}
