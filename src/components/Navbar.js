import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import logo from "../images/logo.png";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Team from "./Team";

export default class HeadNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div id="top">
        <Navbar className="navbar clearfix" light expand="md">
          <NavbarBrand href="/">
            <img src={logo} className="App-logo" alt="logo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavLink>
                  <Link to="/team" replace >Team</Link>
                </NavLink>

                <NavLink href="https://blog.innovationdrive.co">
                  Blog
                </NavLink>
                <NavLink href="https://app.innovationdrive.co">
                  Sign In
                </NavLink>
                <button className="btn btn-danger float-right">
                  Download Invention Workbook
                </button>

                {/* <NavItem> */}
                {/* <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
