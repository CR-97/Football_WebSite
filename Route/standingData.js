const express = require('express');
const token = require('../config/apiKey').token2;
const standing = express.Router();
const axios = require('axios');

//Bundeliga
standing.get('/getStanding/2002', (req, res) => {
  axios.get("http://api.football-data.org/v2/competitions/2002/standings",{
    headers: { 'X-Auth-Token': token }
  })
  .then((response) => {
    for(var i = 1; i<response.data.standings.length; i++){
     
      res.status(200).json(response.data.standings[i].table);
    }
  })
  .catch((error) => {
      
      res.status(404).json(error);
  })
});

//Laliga
standing.get('/getStanding/2014', (req, res) => {
  axios.get("http://api.football-data.org/v2/competitions/2014/standings",{
    headers: { 'X-Auth-Token': token }
  })
  .then((response) => {
    for(var i = 1; i<response.data.standings.length; i++){
      
      res.status(200).json(response.data.standings[i].table);
    }
  })
  .catch((error) => {
      
      res.status(404).json(error);
  })
});

//Ligue 1
standing.get('/getStanding/2015', (req, res) => {
  axios.get("http://api.football-data.org/v2/competitions/2015/standings",{
    headers: { 'X-Auth-Token': token }
  })
  .then((response) => {
    for(var i = 1; i<response.data.standings.length; i++){
      
      res.status(200).json(response.data.standings[i].table);
    }
  })
  .catch((error) => {
      
      res.status(404).json(error);
  })
});

//Series A
standing.get('/getStanding/2019', (req, res) => {
  axios.get("http://api.football-data.org/v2/competitions/2019/standings",{
    headers: { 'X-Auth-Token': token }
  })
  .then((response) => {
    for(var i = 1; i<response.data.standings.length; i++){
      
      res.status(200).json(response.data.standings[i].table);
    }
  })
  .catch((error) => {
      
      res.status(404).json(error);
  })
});

//Premier League
standing.get('/getStanding/2021', (req, res) => {
  axios.get("http://api.football-data.org/v2/competitions/2021/standings",{
    headers: { 'X-Auth-Token': token }
  })
  .then((response) => {
    for(var i = 1; i<response.data.standings.length; i++){
      res.status(200).json(response.data.standings[i].table);
    }
  })
  .catch((error) => {
     
      res.status(404).json(error);
  })
});

module.exports = standing;