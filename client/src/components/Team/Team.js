import React, { Component } from 'react';
import {
  Container,Row
} from 'reactstrap';

import T1 from './T1';
import T2 from './T2';
import T3 from './T3';
import T4 from './T4';
import T5 from './T5';
import T6 from './T6';
import axios from 'axios';

export default class Team extends Component{
  constructor(){
    super();
    this.state={
      premier: [],
      uefa: [],
      ligue1: [],
      bunde: [],
      seriesA: [],
      laliga: []
    };
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
    .get("/getTeam/2001") 
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
    .get("/getTeam/2002") 
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
    .get("/getTeam/2014") 
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
    .get("/getTeam/2015") 
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
    .get("/getTeam/2019") 
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
    .get("/getTeam/2021") 
      .then(response =>{
        this.setState({
         premier:response.data
        });
      })
      .catch(error => {
        //alert(error);
      });
  }

  handleLike =(likeData)=>{
    console.log(likeData);
      axios.post("http://localhost:5000/getSaveTeams/add", likeData)
      .then(res =>{
        alert("Saved");
      })
      .catch(err =>{
        //alert(err);
      });
  }


  render(){
    const uefa = this.state.uefa.map ((item)=>{
      return(
          <T1 item={item} onClick={this.handleLike}/>
      );
    })
    const bunde = this.state.bunde.map ((item)=>{
      return(
          <T2 item={item} onClick={this.handleLike}/>
      );
    })

    const liga = this.state.laliga.map ((item)=>{
      return(
          <T3 item={item} onClick={this.handleLike}/>
      );
    })

    const ligue = this.state.ligue1.map ((item)=>{
      return(
          <T4 item={item} onClick={this.handleLike}/>
      );
    })

    const pl = this.state.premier.map ((item)=>{
      return(
          <T5 item={item} onClick={this.handleLike}/>
      );
    })

    const series = this.state.seriesA.map ((item)=>{
      return(
          <T6 item={item} onClick={this.handleLike}/>
      );
    })

    return(
      <div>
         <Container>
          <h1>Teams</h1>
          <br/>
        </Container>
        <Container>
          <h2>European ChampionShip</h2>
          <br/>
          <Row>
          {uefa}
          </Row>
        </Container>
        <Container>
          <h2>BundesLiga</h2>
          <br/>
          <Row>
          {bunde}
          </Row>
        </Container>
        <Container>
          <h2>La Liga</h2>
          <br/>
          <Row>
          {liga}
          </Row>
        </Container>
        <Container>
          <h2>Ligue 1</h2>
          <br/>
          <Row>
          {ligue}
          </Row>
        </Container>
        <Container>
          <h2>Premier League</h2>
          <br/>
          <Row>
          {pl}
          </Row>
        </Container>
        <Container>
          <h2>Series A</h2>
          <br/>
          <Row>
          {series}
          </Row>
        </Container>
        <br/><br/>
      </div>
    );
  }
 

}

