import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";


export default class Footer extends Component {
  render() {
    return (
      //   <footer className="navbar-fixed-bottom">
      //   <div className="container">
      //     <div className="row">
      //       <p>Don't miss my site: <a href="www.devbutze.com">DevButze</a> </p>
      //     </div>
      //   </div>
      // </footer>
      <Container style={FooterStyle}>
        <a href="#top">Back to top</a>

        <Row>
          {" "}
          <Col>
            {" "}
            <p>
            Copyright ©2018, Innovation Drive, Inc. - All rights reserved | <a href="#">Privacy</a> |{" "}
              <a href="#">Terms</a>{" "}
            </p>{" "}
          </Col>
        </Row>
      </Container>
    );
  }
}

var FooterStyle = {
  // color: "DodgerBlue",
  textAlign: "center"
};
