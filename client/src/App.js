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
import Tab from './components/Scorer';
import Standing from './components/Standing/Standing';
import Scorer from './components/Scorer/ScorerT1';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
var testId;
class App extends Component {
  constructor(){
    super();
    this.state={
      news:[],
      news2:[],
      news3:[],
      matches:[],
      saved:[],
      comp:[],
      team:[],
      leagueName:"",
      id:"",
      isOpen: false
    };

    this.handleNavigate = this.handleNavigate.bind(this);
  }

  //Navbar Component

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  /*----------API GET Call-----------------*/
  componentDidMount() {
    axios
    .get("http://localhost:5000/getNews1") 
      .then(response =>{
        this.setState({
          news:response.data.articles
        });
      })
      .catch(error => {
        //alert(error);
      });

    axios
    .get("http://localhost:5000/getNews2") 
      .then(response =>{
        this.setState({
          news2:response.data.articles
        });
      })
      .catch(error => {
        //alert(error);
      });

    axios
    .get("http://localhost:5000/getNews3") 
      .then(response =>{
        this.setState({
          news3:response.data.articles
        });
      })
      .catch(error => {
        //alert(error);
      });

      this.getsaved();

      axios
      .get("http://localhost:5000/getMatches") 
        .then(response =>{
          this.setState({
            matches:response.data.matches
          });
        })
        .catch(error => {
          //alert(error);
        });

      axios
      .get
      ('http://localhost:5000/getComp') 
      .then(response =>{
        this.setState({
          comp:response.data
        });
      })
      .catch(error => {
        //alert(error);
      });

      axios
      .get
      ('http://localhost:5000/getCompetition') 
      .then(res =>{
      this.setState({
      team:res.data.teams,
      leagueName:res.data.competition.name
      });
    })
     .catch(error => {
      //alert(error);
    });    
  }
    /*----------End of API GET Call-------------*/

    componentDidUpdate(){
      this.getsaved();

    }

    getComp =() =>{
       axios
      .get
      ('http://localhost:5000/getCompetition') 
      .then(res =>{
      this.setState({
      team:res.data.teams,
      leagueName:res.data.competition.name
      });
    })
     .catch(error => {
      //alert(error);
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

    // updateSaved = () =>{
    //   var team = this.state.team;
    //   var league = this.state.league;
    //   var id = this.state.id;
    //   if(!team && !league){
    //     axios
    //     .get
    //     ('http://localhost:5000/getCompetition') 
    //     .then(res =>{
    //     this.setState({
    //     team:res.data.teams,
    //     leagueName:res.data.competition.name
    //     });
    //   })
    //    .catch(error => {
    //     //alert(error);
    //   });
    //   }
    // }

    handleNavigate = (id) =>{
      this.state.id = id;
      var compid = id;
      console.log(`id = http://localhost:5000/getCompetition/${compid}`);
       axios.post(`http://localhost:5000/getCompetition/`,compid);;
      // .then(res =>{
      //       this.setState({
      //         team:res.data.teams,
      //         leagueName:res.data.competition.name
      //       });
      //     })
      //     .catch(err =>{
      //       console.log(err);
      //     });
    }

    
    handleSubmit(newsData){
      console.log(newsData);
      axios.post("http://localhost:5000/getSaveNews", newsData)
      .then(res =>{
        alert("Saved");
      })
      .catch(err =>{
        //alert(err);
      });
    }

    handleDelete(title){
      console.log(title);
      axios.post("http://localhost:5000/getSaveNews/delete", title)
      .then(res =>{
        console.log("Deleted");
      })
      .catch(err=>{
        // window.location.reload();
      })
    }


  render() {
    return (
      <Router>
        <div>
          <AppNavBar item={this.state.comp} open={this.state.isOpen} onClick={this.handleNavigate} onToggle={this.toggle}/>
         
        <Route exact path="/" render={() =><Home item={this.state.news} item2={this.state.news2} item3={this.state.news3} onClick={this.handleSubmit}/>}/>
        
        <Route path="/matches" render={() =><Match item={this.state.matches}/>} />

        <Route path="/ms" render={() =><Tab item={this.state.team} name={this.state.leagueName}/>} />

        <Route path="/standings" component={Tab} />
        <Route path="/scorer" component={Scorer}/>

        <Route path="/saved_items" render={() =><Saved item={this.state.saved} onClick={this.handleDelete}/>} />
        <AppFooter/>
      </div>
    </Router>
    );
  }
}
export default App;