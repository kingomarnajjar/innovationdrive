import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Form from "../components/Form.js";
import "./AboveTheFold.css";
import HeadNavbar from "../components/Navbar.js";

export default class AboveTheFold extends Component {
  render() {
    return (
      <div className="backgroundContainer">
        <HeadNavbar />
        <Container />
        <Container>
          <Row  >
            <Col xs="6" sm="4">
            </Col>
            <Col xs="6" sm="4">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
              <br/>
            </Col>
            <Col sm="4"><Form /></Col>
          </Row>

        </Container>
      </div>
    );
  }
}
