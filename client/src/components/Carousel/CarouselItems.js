import React, { Component } from 'react';
import  {Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask } from 'mdbreact';
import {
  Container, Row, Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardFooter
} from 'reactstrap';

const CarouselItems = props =>{

  return(
    <Col sm="4">
    <Card>
      <CardImg top width="100%" src={props.item.crestUrl} alt={props.item.name}/>
    <CardBody>
      <CardTitle>{props.item.name}</CardTitle>
    </CardBody>
    </Card>
    <br/>
  </Col>
    
  );

};

export default CarouselItems;