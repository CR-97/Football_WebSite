import React, {Component} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText,Container, Row, Table,Col } from 'reactstrap';
import classnames from 'classnames';

import Table1 from './ScorerT1';
import Table2 from './ScorerT2';
import Table3 from './ScorerT3';
import Table4 from './ScorerT4';
import Table5 from './ScorerT5';
import Table6 from './ScorerT6';

import axios from 'axios';

export default class Scorer extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      premier: [],
      uefa: [],
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
    this.getUefa();
    this.getBunde();
    this.getLiga();
    this.getPremier();
    this.getSeries();
    this.getLigue();
  }

  getUefa = () =>{
    axios
    .get("/getScorer/2001") 
      .then(response =>{
        this.setState({
         uefa:response.data
        });
      })
      .catch(error => {
        //alert(error);
      });
  }

  getBunde = () =>{
    axios
    .get("/getScorer/2002") 
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
    .get("/getScorer/2014") 
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
    .get("/getScorer/2015") 
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
    .get("/getScorer/2019") 
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
    .get("/getScorer/2021") 
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
        <Table1 item={item}/>
      );
    });
    const lg = this.state.liga.map((item)=>{
      return(
        <Table2 item={item}/>
      );
    });
    const ligue = this.state.ligue1.map((item)=>{
      return(
        <Table3 item={item}/>
      );
    });
    const pl = this.state.premier.map((item)=>{
      return(
        <Table4 item={item}/>
      );
    });
    const series = this.state.seriesA.map((item)=>{
      return(
        <Table5 item={item}/>
      );
    });
    const uefa = this.state.uefa.map((item)=>{
      return(
        <Table6 item={item}/>
      );
    });

    return (
      <div>
        <Container>
          <h1>Top Scorer</h1>
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
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '6' })}
              onClick={() => { this.toggle('6'); }}
            >
              UEFA
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
              <th>Player</th>
              <th>Club</th>
              <th>Goals</th>
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
              <th>Player</th>
              <th>Club</th>
              <th>Goals</th>
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
              <th>Player</th>
              <th>Club</th>
              <th>Goals</th>
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
              <th>Player</th>
              <th>Club</th>
              <th>Goals</th>
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
              <th>Player</th>
              <th>Club</th>
              <th>Goals</th>
             </tr>
            </thead>
          <tbody>
            {series}
          </tbody>
            </Table>
            </Container>
          </TabPane>

          <TabPane tabId="6">
          <Container>
            <Table>
              <thead>
              <tr>
              <th>Player</th>
              <th>Club</th>
              <th>Goals</th>
             </tr>
            </thead>
          <tbody>
            {uefa}
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