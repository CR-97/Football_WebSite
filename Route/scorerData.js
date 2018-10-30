const express = require('express');
const token = require('../config/apiKey').token;
const token2 = require('../config/apiKey').token2;
const scorer = express.Router();
const axios = require('axios');

//UEFA
scorer.get('/getScorer/2001', (req, res) => {
  axios.get("http://api.football-data.org/v2/competitions/2001/scorers",{
    headers: { 'X-Auth-Token': token2 }
  })
  .then((response) => {
      res.send(response.data);
      res.status(200).json(response);
  })
  .catch((error) => {
      res.status(404).json(error);
  })
});

//BundesLiga
scorer.get('/getScorer/2002', (req, res) => {
  axios.get("http://api.football-data.org/v2/competitions/2002/scorers",{
    headers: { 'X-Auth-Token': token2}
  })
  .then((response) => {
      res.send(response.data);
      res.status(200).json(response);
  })
  .catch((error) => {
      res.status(404).json(error);
  })
});

//Laliga
// scorer.get('/getScorer/2014', (req, res) => {
//   axios.get("http://api.football-data.org/v2/competitions/2014/scorers",{
//     headers: { 'X-Auth-Token': token }
//   })
//   .then((response) => {
//       res.send(response.data);
//       res.status(200).json(response);
//   })
//   .catch((error) => {
//       res.status(404).json(error);
//   })
// });

// //Ligue 1
// scorer.get('/getScorer/2015', (req, res) => {
//   axios.get("http://api.football-data.org/v2/competitions/2015/scorers",{
//     headers: { 'X-Auth-Token': token }
//   })
//   .then((response) => {
//       res.send(response.data);
//       res.status(200).json(response);
//   })
//   .catch((error) => {
//       res.status(404).json(error);
//   })
// });

// //Series A
// scorer.get('/getScorer/2019', (req, res) => {
//   axios.get("http://api.football-data.org/v2/competitions/2019/scorers",{
//     headers: { 'X-Auth-Token': token }
//   })
//   .then((response) => {
//       res.send(response.data);
//       res.status(200).json(response);
//   })
//   .catch((error) => {
//       res.status(404).json(error);
//   })
// });

// //Premier League
// scorer.get('/getScorer/2021', (req, res) => {
//   axios.get("http://api.football-data.org/v2/competitions/2021/scorers",{
//     headers: { 'X-Auth-Token': token }
//   })
//   .then((response) => {
//       res.send(response.data);
//       res.status(200).json(response);
//   })
//   .catch((error) => {
//       res.status(404).json(error);
//   })
// });

module.exports = scorer;