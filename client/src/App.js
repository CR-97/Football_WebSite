import React, {
  Component
} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import axios from 'axios';

import AppNavBar from './components/NavBar/NavBar';
import AppFooter from './components/Footer';

import Home from './components/Home/Home';
import Match from './components/Matches/Matches';
import Saved from './components/Saved/Saved';
import Team from './components/Team/Team';
import Standing from './components/Standing/Standing';
import Scorer from './components/Scorer/Scorer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      news:[],
      news2:[],
      news3:[],
      matches:[],
      comp:[],
      isOpen: false
    };
  }

  //Navbar Component

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  getNews1 =() =>{
    axios
    .get("/getNews1") 
      .then(response =>{
        this.setState({
          news1:response.data.articles
        });
      })
      .catch(error => {
        //alert(error);
      });
  }

  getNews2 =() =>{
    axios
    .get("/getNews2") 
      .then(response =>{
        this.setState({
          news2:response.data.articles
        });
      })
      .catch(error => {
        //alert(error);
      });
  }

  getNews3 =() =>{
    axios
    .get("/getNews3") 
      .then(response =>{
        this.setState({
          news3:response.data.articles
        });
      })
      .catch(error => {
        //alert(error);
      });
  }

  getMatches =() =>{
    axios
      .get("/getMatches") 
        .then(response =>{
          this.setState({
            matches:response.data.matches
          });
        })
        .catch(error => {
          //alert(error);
        });

  }

  getComp =() =>{
    axios
      .get
      ('/getComp') 
      .then(response =>{
        this.setState({
          comp:response.data
        });
      })
      .catch(error => {
        //alert(error);
      });
  }

  /*----------API GET Call-----------------*/
  componentDidMount() {
    this.getNews1();
    this.getNews2();
    this.getNews3();
    this.getMatches();
    this.getComp();
  }
    
  componentWillUpdate(){
    this.getNews1();
    this.getNews2();
    this.getNews3();
    this.getMatches();
    this.getComp();
  }

  /*----------End of API GET Call-------------*/
    handleSubmit(newsData){
      console.log(newsData);
      axios.post("/getSaveNews/add", newsData)
      .then(res =>{
        alert("Saved");
      })
      .catch(err =>{
        alert(err);
      });
    }

  render() {
    return (
      <Router>
        <div>
          <AppNavBar item={this.state.comp} open={this.state.isOpen} onClick={this.handleNavigate} onToggle={this.toggle}/>
         
        <Route exact path="/" render={() =><Home item={this.state.news} item2={this.state.news2} item3={this.state.news3} onClick={this.handleSubmit}/>}/>
        
        <Route path="/matches" render={() =><Match item={this.state.matches}/>} />

        <Route path="/team" component={Team} />
        <Route path="/standings" component={Standing} />
        <Route path="/scorer" component={Scorer}/>

        <Route path="/saved_items" component={Saved} />
        <AppFooter/>
      </div>
    </Router>
    );
  }
}
export default App;