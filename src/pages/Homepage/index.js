import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import styles from "./index.css";

import EmailForm from "/Users/omar/Desktop/innovationDrive/innovation-drive/src/components/Form.js";
// import "./AboveTheFold.css";
import HeadNavbar from "../../src/components/Navbar.js";
import ModalExample from "../../components/PopUpSignUp.js";
// /Users/omar/Desktop/innovationDrive/innovation-drive/src/components/Form.js

export default class Homepage extends Component {
  render() {
    return (
      <div className="backgroundContainer">
        <HeadNavbar />
        <Container />

        <Container>
          {/* <Row> <img src={require('../kidRocket.jpg')} /> </Row> */}

          <Row className="firstContainer">
            <Col xs="6" sm="4">
            {/* THIS IS A POP UP BOOTRAP MODAL, with a CTA to click on */}
            <h3> End to end product dev </h3>
             <ModalExample />
            </Col>

            <Col xs="6" sm="4">

            </Col>
            <Col lg="12" sm="4">
              {/* <EmailForm /> */}
            </Col>
          </Row>
        </Container>
        <Container>
          <h1>What Customers Say About Us</h1>
          {/* ADD BOOTSRAP CAROUSEL HERE */}
        </Container>
      </div>
    );
  }
}
