import React, {Component} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink,Container, Table} from 'reactstrap';
import classnames from 'classnames';

import S1 from './StandingT1';
import S2 from './StandingT2';
import S3 from './StandingT3';
import S4 from './StandingT4';
import S5 from './StandingT5';


import axios from 'axios';

export default class Standing extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      premier: [],
      ligue1: [],
      bunde: [],
      seriesA: [],
      liga: []
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  componentDidMount(){
    this.getBunde();
    this.getLiga();
    this.getPremier();
    this.getSeries();
    this.getLigue();
  }

  componentDidUpdate(){
     this.getBunde();
     this.getLiga();
     this.getPremier();
     this.getSeries();
     this.getLigue();
  }

  getBunde = () =>{
    axios
    .get("/getStanding/2002") 
      .then(response =>{
        this.setState({
         bunde:response.data
        });
      })
      .catch(error => {
        //alert(error);
      });
  }

  getLiga = () =>{
    axios
    .get("/getStanding/2014") 
      .then(response =>{
        this.setState({
         liga:response.data
        });
      })
      .catch(error => {
        //alert(error);
      });
  }

  getLigue = () =>{
    axios
    .get("/getStanding/2015") 
      .then(response =>{
        this.setState({
         ligue1:response.data
        });
      })
      .catch(error => {
        //alert(error);
      });
  }

  getSeries = () =>{
    axios
    .get("/getStanding/2019") 
      .then(response =>{
        this.setState({
         seriesA:response.data
        });
      })
      .catch(error => {
        //alert(error);
      });
  }

  getPremier = () =>{
    axios
    .get("/getStanding/2021") 
      .then(response =>{
        this.setState({
         premier:response.data
        });
      })
      .catch(error => {
        //alert(error);
      });
  }

  
  render() {
    const bunde = this.state.bunde.map((item)=>{
      return(
        <S1 item={item}/>
      );
    });

    const lg = this.state.liga.map((item)=>{
      return(
        <S2 item={item}/>
      );
    });
    const ligue = this.state.ligue1.map((item)=>{
      return(
        <S3 item={item}/>
      );
    });
    const pl = this.state.premier.map((item)=>{
      return(
        <S4 item={item}/>
      );
    });
    const series = this.state.seriesA.map((item)=>{
      return(
        <S5 item={item}/>
      );
    });

    return (
      <div>
        <Container>
          <h1>Standing</h1>
          <br/>
        </Container>
        <Container>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              BundesLiga
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              LaLiga
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Ligue 1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Premier League
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('5'); }}
            >
              Series A
            </NavLink>
          </NavItem>
         
        </Nav>
        <br/>

        {/* Content */}

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Container>
            <Table>
              <thead>
              <tr>
                <td>Pos</td>
                <th>Team</th>
                <th>MP</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>GF</th>
                <th>GA</th>
                <th>GD</th>
                <th>Pts</th>
             </tr>
            </thead>
          <tbody>
            {bunde}
          </tbody>
            </Table>
            </Container>
          </TabPane>

          <TabPane tabId="2">
          <Container>
            <Table>
              <thead>
              <tr>
                <td>Pos</td>
                <th>Team</th>
                <th>MP</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>GF</th>
                <th>GA</th>
                <th>GD</th>
                <th>Pts</th>
             </tr>
            </thead>
          <tbody>
            {lg}
          </tbody>
            </Table>
            </Container>
          </TabPane>

          <TabPane tabId="3">
          <Container>
            <Table>
              <thead>
              <tr>
                <td>Pos</td>
                <th>Team</th>
                <th>MP</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>GF</th>
                <th>GA</th>
                <th>GD</th>
                <th>Pts</th>
             </tr>
            </thead>
          <tbody>
            {ligue}
          </tbody>
            </Table>
              
            </Container>
          </TabPane>

          <TabPane tabId="4">
          <Container>
            <Table>
              <thead>
              <tr>
                <td>Pos</td>
                <th>Team</th>
                <th>MP</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>GF</th>
                <th>GA</th>
                <th>GD</th>
                <th>Pts</th>
             </tr>
            </thead>
          <tbody>
            {pl}
          </tbody>
            </Table>
              
            </Container>
          </TabPane>

          <TabPane tabId="5">
          <Container>
            <Table>
              <thead>
              <tr>
                <td>Pos</td>
                <th>Team</th>
                <th>MP</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>GF</th>
                <th>GA</th>
                <th>GD</th>
                <th>Pts</th>
             </tr>
            </thead>
          <tbody>
            {series}
          </tbody>
            </Table>
            </Container>
          </TabPane>
        </TabContent>
        </Container>
        <br/><br/>
      </div>
    );
  }
}
