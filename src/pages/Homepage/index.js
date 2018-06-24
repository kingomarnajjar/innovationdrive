import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import styles from "./index.css";

// import "./AboveTheFold.css";
import HeadNavbar from "../../components/Navbar.js";
import ModalExample from "../../components/PopUpSignUp.js";
import MainJumbotron from "../../components/Jumbotron";
// /Users/omar/Desktop/innovationDrive/innovation-drive/src/components/Form.js

export default class Homepage extends Component {
  render() {
    return (
      <div className="backgroundContainer">
        <HeadNavbar />
        <Container>
          <MainJumbotron />
        </Container>

        <Container>
          {/* <Row> <img src={require('../kidRocket.jpg')} /> </Row> */}
          <h3>The Invention Process</h3>
          <Row className="">
            {/* ADD BOOTSRAP CARDS HERE */}
            <Col xs="12" sm="4">
              <p>Product Design</p>
              {/* ADD BOOTSRAP CARD HERE */}
            </Col>

            <Col xs="12" sm="4">
              <p> Rapid Prototyping </p>
            </Col>
            <Col xs="12" sm="4">
            <p>Manufacturing </p>
            </Col>
          </Row>
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
    );
  }
}
