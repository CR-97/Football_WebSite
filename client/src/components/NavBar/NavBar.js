import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem 
} from 'reactstrap';
import { withRouter } from 'react-router-dom'

import Logo from './logo.png';


class AppNavbar extends Component{
  constructor(){
    super();

    this.toggle = this.toggle.bind(this);
    this.logout = this.logout.bind(this);
    this.state={
      isOpen: false
    };
  }
  
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logout(e) {
    e.preventDefault();
        localStorage.removeItem('usertoken');
        this.props.history.push(`/`);
  }

  
  render(){
    const loginRegLink = (
      
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink id="navitem" href="/login" to="/login">
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="navitem" href="/register" to="/register">
                  Register
                </NavLink>
              </NavItem>
            </Nav>


    )

    const userLink = (
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink id="navitem" href="/" to="/">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink id="navitem" href="/search" to="/search">
                    Search
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle id="navitem" nav caret>
                  Competitions
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/team">
                    Teams
                  </DropdownItem>
                  <DropdownItem href="/standings">
                    Standings
                  </DropdownItem>
                  <DropdownItem href="/scorer">
                    Top Scorers
                  </DropdownItem>
                  <DropdownItem href="/matches">
                    Matches
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
                <NavItem>
                  <NavLink id="navitem" href="/profile" to="/profile">
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink id="navitem" href="" onClick={this.logout}>
                    Logout
                  </NavLink>
                </NavItem>
              </Nav>
     )

     return (
      <div>
        <Navbar id="navbar"expand="sm" className="mb-5">
          <Container>
            <img src={Logo} id="logo"/>
            <NavbarBrand id="navtitle" href="/home">Phoneix Football</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.open} navbar>
              {localStorage.usertoken ? userLink : loginRegLink}
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  } 
}

export default withRouter(AppNavbar);