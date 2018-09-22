import React from 'react';
import LogoIMG from "../images/logo.png";
import "./navigation.css";
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
  DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
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
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><img src={LogoIMG} /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/tutorials">Tutorials</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/blog">Blog</NavLink>
              </NavItem>			  
              <NavItem>
                <NavLink href="/contact">Contact Us</NavLink>
              </NavItem>			  
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Office
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    New York
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

