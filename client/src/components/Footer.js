import React, { Component } from 'react';
import { Col, Container, Row, Footer } from "mdbreact";

import axios from 'axios';

const url = 'http://localhost:5000/getComp';

class FooterPagePro extends Component {

  constructor(){
    super();
    this.state ={
      main:[]
    };
  }

  componentDidMount() {
    axios
    .get(url) 
      .then(response =>{
        this.setState({
          main:response.data
        });
      })
      .catch(error => {
        alert(error);
      });
  }

  render() {
    const comp = this.state.main.map(item =>{
      return(
        <p>{item.comp_name}</p>
      );
    });

    return (
      <Footer color="mdb-color" className="font-small pt-4 mt-4">
        <Container className="text-center text-md-left">
          <Row className="text-center text-md-left mt-3 pb-3">
            <Col md="4" lg="3" xl="3" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Links
              </h6>
              <p>
                <a href="/">Home</a>
              </p>
              <p>
                <a href="/saved_items">Teams</a>
              </p>
              <p>
                <a href="/saved_items">Standing</a>
              </p>
              <p>
                <a href="/saved_items">Top Scorer</a>
              </p>
              <p>
                <a href="/matches">Matches</a>
              </p>
              <p>
                <a href="/saved_items">Saved</a>
              </p>
            </Col>
            <hr className="w-100 clearfix d-md-none" />
            <Col md="4" lg="2" xl="2" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">League Available</h6>
              <p>
                {comp}
              </p>
            </Col>
            <hr className="w-100 clearfix d-md-none" />
            <Col md="4" lg="2" xl="2" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Links
              </h6> 
              <p>
                <i className="fa fa-home mr-3" /> New York, NY 10012, US
              </p>
              <p>
                <i className="fa fa-envelope mr-3" /> info@gmail.com
              </p>
              <p>
                <i className="fa fa-phone mr-3" /> + 01 234 567 88
              </p>
            </Col>
            <hr className="w-100 clearfix d-md-none" />
          </Row>
          <hr />
          <Row className="d-flex align-items-center">
            <Col md="8" lg="8">
              <p className="text-center text-md-left grey-text">
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a href="/"> realfootball.com </a>
              </p>
            </Col>
            <Col md="4" lg="4" className="ml-lg-0">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fa fa-google-plus" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </Footer>
    );
  }
}
export default FooterPagePro;