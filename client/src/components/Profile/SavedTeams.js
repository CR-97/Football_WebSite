import React, { Component } from 'react';
import {
  Container, Row, Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardFooter
} from 'reactstrap';

import {
  Fa,CardImage,Button
} from 'mdbreact';

const SavedItems = props =>{

  function handleDislike(){
    props.onClick({
      name: props.item.name,
    });
  }

  return(
    <Col sm="3">
      <Card id="team-size">
        <CardImage id="img-size" top src={props.item.crest} overlay="white-slight" hover waves alt={props.item.name}/>
        <CardBody>
          <CardTitle>{props.item.name}</CardTitle>
          <hr />
          <CardText>Stadium : {props.item.stadium}</CardText>
          <CardText>Website : <a href={props.item.site} target="_blank">{props.item.site}</a> </CardText>
        </CardBody>
        <CardFooter>
          <Button className="btn-circle btn-lg " id="btn-del" onClick={handleDislike}><Fa className="fa-xs" icon="star"/></Button>
        </CardFooter>
      </Card>
    <br/>
  </Col>
  );
};

export default SavedItems;
