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
import NavContent from './NavItems';


import Logo from './logo.png';

const AppNavbar = props => {
  const open = props.open;
  const comp = props.item;
  let res;

  if(comp.length>0){
    res = comp.map((item) =>
      <NavContent item={item} onClick={props.onClick}/> 
    );
  }
  
  return (
      <div>
        <Navbar id="navbar"expand="sm" className="mb-5">
          <Container>
            <img src={Logo} id="logo"/>
            <NavbarBrand id="navtitle" href="/">Phoneix Football</NavbarBrand>
            <NavbarToggler onClick={props.onToggle} />
            <Collapse isOpen={open} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink id="navitem" href="/" to="/">
                    Home
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
                </DropdownMenu>
              </UncontrolledDropdown>
                <NavItem>
                  <NavLink id="navitem" href="/matches" to="/matches">
                    Matches
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink id="navitem" href="/saved_items" to="/saved_items">
                    Saved
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default AppNavbar;