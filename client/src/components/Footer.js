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
        console.log(error);
      });
  }

  render() {
    const comp = this.state.main.map(item =>{
      return(
        <p>{item.comp_name} ({item.comp_area})</p>
      );
    });

    return (
      <Footer color="mdb-color" className="font-small pt-4 mt-4">
        <Container className="text-center text-md-left">
          <Row className="text-center text-md-left mt-3 pb-3">
            <Col md="2" lg="3" xl="3" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Links
              </h6>
              <p>
                <a href="/">Home</a>
              </p>
              <p>
                <a href="/team">Teams</a>
              </p>
              <p>
                <a href="/standings">Standing</a>
              </p>
              <p>
                <a href="/scorer">Top Scorer</a>
              </p>
              <p>
                <a href="/matches">Matches</a>
              </p>
              <p>
                <a href="/saved_items">Saved</a>
              </p>
            </Col>
            <hr className="w-100 clearfix d-md-none" />
            <Col md="6" lg="2" xl="2" className="mx-auto mt-3">
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
                <i className="fa fa-home mr-3" />Z-1, Lebuh Bukit Jambul, Bukit Jambul, 11900 Bayan Lepas, Pulau Pinang.
              </p>
              <p>
                <i className="fa fa-envelope mr-3" />https://newinti.edu.my
              </p>
              <p>
                <i className="fa fa-phone mr-3" /> +6 04-631 0138
              </p>
            </Col>
            <hr className="w-100 clearfix d-md-none" />
          </Row>
          <hr />
          <Row className="d-flex align-items-center">
            <Col md="8" lg="8">
              <p className="text-center text-md-left grey-text">
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a href="/"> phoneixfootball.com </a>
              </p>
            </Col>
            <Col md="4" lg="4" className="ml-lg-0">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://www.facebook.com/INTI.edu/">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://twitter.com/hashtag/intipenang">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://www.google.com/maps/d/u/0/viewer?msa=0&iwloc=0004ec379ef5d515f6145&mid=16GurbzqSDYEphwXucirlyP3qpuc&ll=5.339703999999999%2C100.28239800000006&z=17">
                      <i className="fa fa-google-plus" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://www.linkedin.com/company/inti-education-group">
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