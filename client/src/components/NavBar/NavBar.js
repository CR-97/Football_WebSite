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


// class AppNavbar extends Component {
//   constructor(props){
//     super(props);
//   }
//   state = {
//     isOpen: false
//   };

//   toggle = () => {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }
// }

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
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Real Football</NavbarBrand>
            <NavbarToggler onClick={props.onToggle} />
            <Collapse isOpen={open} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/" to="/">
                    Home
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
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
                  <NavLink href="/matches" to="/matches">
                    Matches
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/saved_items" to="/saved_items">
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