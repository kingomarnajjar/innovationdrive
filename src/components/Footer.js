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
        <a href="#CTA">Back to top</a>

        <Row>
          {" "}
          <Col>
            {" "}
            <p>
              © 2017 Company, Inc. | <a href="#">Privacy</a> |{" "}
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
