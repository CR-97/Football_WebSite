const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./config/config-key').mongoKey;
const token = require('./config/apiKey').token1;

const axios =require('axios');
const cors = require('cors');
const app = express();
const data = require('./Route/data');
const standing = require('./Route/standingData');
const scorer = require('./Route/scorerData');

//Schema
const News = require('./schema/schema2');
const Comp = require('./schema/schema');

//Body-Parser + Cors
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Connect to mongoose db
mongoose.connect(db,{ useNewUrlParser: true })
.then(()=>{
  console.log('Connected to database...');
})
.catch((error)=>{
  console.log(error);
});


/*----------- MongoDB Data -------------*/
app.use(data);
/*----------- End of MongoDB Data -------------*/
app.use(standing);
app.use(scorer);

/*----------- News Api Get -------------*/
const apiKey = '8a331e64c829479b91bbb3c54b0b4d9f';
const url = `https://newsapi.org/v2/top-headlines?sources=four-four-two&apiKey=${apiKey}`;
const url2 = `https://newsapi.org/v2/top-headlines?sources=football-italia&apiKey=${apiKey}`;
const url3 = `https://newsapi.org/v2/top-headlines?sources=talksport&apiKey=${apiKey}`;
const url4 =`https://newsapi.org/v2/everything?sources=talksport&apiKey=${apiKey}`;

app.get('/getNews1', (req, res) => {
  axios.get(url)
    .then((response) => {
      res.send(response.data);
      res.status(200).json(response);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json(error);
    })
});

app.get('/getNews2', (req, res) => {
  axios.get(url2)
    .then((response) => {
      res.send(response.data);
      res.status(200).json(response);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json(error);
    })
});

app.get('/getNews3', (req, res) => {
  axios.get(url3)
    .then((response) => {
      res.send(response.data);
      res.status(200).json(response);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json(error);
    })
});

//End of News Api Get

//FootBall Api Get
const matches
 = 'https://api.football-data.org/v2/matches';
// const token = 'c73d1cb1e85c4d39b6e710c54b4a5266';
app.get('/getMatches', (req, res) => {
  axios.get(matches,{
    headers: { 'X-Auth-Token': token }
  })
  .then((response) => {
      res.send(response.data);
      res.status(200).json(response);
  })
  .catch((error) => {
      //console.log(error);
      res.status(404).json(error);
  })
});

app.get('/getCompetition/:id', (req, res) => {
  axios.get("http://api.football-data.org/v2/competitions/2019/teams",{
    headers: { 'X-Auth-Token': token }
  })
  .then((response) => {
      res.send(response.data);
      res.status(200).json(response);
  })
  .catch((error) => {
      //console.log(error);
      res.status(404).json(error);
  })
});

app.post('/getCompetition',(req,res) =>{
  var id = req.body.id
  console.log(id);
  var comp = `http://api.football-data.org/v2/competitions/${id}/teams`;
  console.log("Site1 = ",comp);
  app.get(`/getCompetition`,(req,res) =>{
    axios.get(comp,{
      headers: { 'X-Auth-Token': token }
    })
    .then((response) => {
        console.log(response.data.competition.name)
        res.send(response.data);
        res.status(200).json(response);
    })
    .catch((error) => {
        //console.log(error);
        res.status(404).json(error);
    })
  });
});
  

app.listen(5000, ()=>{
  console.log('Server started on port 5000');
});