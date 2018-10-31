import SavedTeams from './SavedTeams';
import SavedContent from './SavedItems';
import React, { Component } from 'react';

import {
  Container, Row, Col
} from 'reactstrap';

import SavedTeam from './SavedTeams';
import SavedNews from './SavedItems';

import axios from 'axios';

export default class Saved extends Component{
  constructor(){
    super();
    this.state={
      team:[],
      saved:[]
    };
  }
  componentDidMount(){
    this.getsaved();
    this.getsavedTeam();
  }

  componentDidUpdate(){
    this.getsaved();
    this.getsavedTeam();
  }

  getsavedTeam = () =>{
    axios
    .get("http://localhost:5000/getSaveTeams") 
      .then(response =>{
        this.setState({
          team:response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  getsaved =() =>{
    axios
    .get("http://localhost:5000/getSaveNews") 
      .then(response =>{
        this.setState({
          saved:response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleDelete(title){
     
    console.log("title =",title);
    axios.post("http://localhost:5000/getSaveNews/delete", title)
    .then(res =>{
    console.log("Deleted");
    })
    .catch(err=>{
    // window.location.reload();
    });
}

  handleDislike(name){
      console.log(name);
      axios.post("http://localhost:5000/getSaveTeams/delete", name)
      .then(res =>{
        console.log("Deleted");
      })
      .catch(err=>{
        // window.location.reload();
      })
    }

  render(){
    const team = this.state.team.map(item =>{
      return(
        <SavedTeam item ={item} onClick={this.handleDislike}/>
      );
    })

    const saved = this.state.saved.map(item =>{
      return(
        <SavedNews item ={item}  onClick={this.handleDelete}/>
      );
    })
    return(
      <div>
        <Container>
          <h1>Saved Teams</h1>
        </Container>
        <Container>
          <Row>
          {team}
          </Row>
        </Container>
        <Container>
          <h1>Saved Headlines</h1>
        </Container>
        <Container>
          <Row>
          {saved}
          </Row>
        </Container>
      </div>
    );
  }

}