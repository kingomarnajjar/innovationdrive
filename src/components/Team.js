import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap"; //abstract this shit to make it global in files
import sayee from "../images/sayee.jpeg";
import omar from "../images/omar.jpeg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Team = () => (
  <Container>
    <h2>Team </h2>
    <br />
    <Row>
      <Col>
        <img src={sayee} className="sayee-img" alt="logo" />
      </Col>
      <Col>
        <p>
          20+ years of experience leading teams of 10-40 staff members. Managed
          30+ projects ranging from $100K-$1.7M in budget. 200+ hours of
          presenting and training on a wide variety of subjects including
          innovation, teamwork and project management. Specialties: Product
          Design, Pro-E Wildfire, SolidWorks, AutoCAD, Tooling Design, Tool &
          Die Making, PLM, DFM, DFA, Machining, CNC, QA, FEA
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
          management. Specialties: JAMstack, React js, AWS, Prototyping Adobe xD
        </p>
      </Col>
    </Row>
  </Container>
);

export default Team;
