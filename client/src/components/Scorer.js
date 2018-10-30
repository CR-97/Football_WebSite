import React, {Component} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText,Container, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Table1 from './Scorer/ScorerT1';

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
      laliga: []
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
         uefa:response.data.scorers
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
         bunde:response.data.scorers
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
         laliga:response.data
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
         seriesA:response.data.scorers
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
         premier:response.data.scorers
        });
      })
      .catch(error => {
        //alert(error);
      });
  }

  
  render() {
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
              <Table1 item={this.state.laliga}/>
            </Container>
          </TabPane>

          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="4">
            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="5">
            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="6">
            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>
              </Col>
            </Row>
          </TabPane>
        
        </TabContent>
        </Container>
      </div>
    );
  }
}