import React, { Component } from 'react';
import {
  Container, Row, Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardFooter
} from 'reactstrap';
import {
  Fa,CardImage,Button
} from 'mdbreact';
const MatchesItems = props =>{

  // function handleSubmit(){
  //   props.onClick({
  //     title: props.item.title,
  //   });
  // }
  
    return(
      <div>
      <Card>
          <CardBody>
            <CardTitle id="score-title">{props.item.competition.name}</CardTitle>
            <CardSubtitle id="scroe-text">{props.item.homeTeam.name} vs {props.item.awayTeam.name}</CardSubtitle>
            <CardText id="score-size">Score : {props.item.score.fullTime.homeTeam} - {props.item.score.fullTime.awayTeam}</CardText>
          </CardBody>
        </Card>
        <br/>
      </div>
    );
};

export default MatchesItems;




