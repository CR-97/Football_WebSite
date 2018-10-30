import React, { Component } from 'react';
import  {Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask} from 'mdbreact';
import SlideContent from './CarouselItems';

import {
  Container, Row, Col
} from 'reactstrap';

const Carol = props =>{

  const leagueName = props.name;
  const team = props.item;
  let res;

  if(team.length>0){
    res= team.map((res)=><SlideContent item={res}/>);
  }

  return(
    <div>
    <Container>
      <h1>Teams - {leagueName}</h1>
    </Container>
    <Container>
      <Row>
      {res}
      </Row>
    </Container>
    </div>
  );
};

export default Carol;

