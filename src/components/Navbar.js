import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
} from "reactstrap";
import logo from '../img/logo.png'



export default class HeadNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,

    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,


    });
  }
  render() {
    return (
      <div id="top">
        <Navbar className="navbar" light expand="md" fixed={`top`}>
          <NavbarBrand href="/">
            <img src={logo} className="App-logo" alt="logo" style={{ height: '10vh', paddingLeft: '14px', paddingTop: '10px' }} />
          </NavbarBrand>
          {/* <NavbarToggler onClick={this.toggle} /> */}

          <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>

                {/* <NavLink href="https://blog.innovationdrive.co">
                  Blog
                </NavLink>
                <NavLink href="https://app.innovationdrive.co">
                  Sign In
                </NavLink> */}

              </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
