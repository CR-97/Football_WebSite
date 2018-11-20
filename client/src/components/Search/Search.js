import React, { Component } from 'react';
import axios from 'axios';

import {
  Jumbotron,
  Alert,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Card, FormText, CardBody,
  CardTitle, CardSubtitle, CardFooter
} from 'reactstrap';
import {
  Fa,CardImage,Button
} from 'mdbreact';

export default class Search extends Component{
  constructor() {
    super();
    this.state = {
      alertVisible: false,
      title: '',
      search: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  //for popup
  onDismiss() {
    this.setState({ alertVisible: false });
  }

   //for form
   onSubmit = e => {
    e.preventDefault();
    this.setState({ alertVisible: false });

    const query = `/getSearch?q=${this.state.title}`;

    console.log(query);

    axios
      .get(query)
      .then(result => {
        console.log(result.data);
        if (result.data === 'Not found') {
          this.setState({ alertVisible: true });
        }else{
          this.setState({search:result.data.articles});
        }
      })
      .catch(error => {
        alert('Error: ', error);
      });
  };

  // for form field
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render(){
      
      let newsCard;
      newsCard = this.state.search.map(item =>{
        return(
        <Col>
          <Card>
          <a href={item.url} target="_blank">
          <CardBody >
            <CardTitle>{item.title}</CardTitle>
          </CardBody>
          </a>
          </Card>
          <br/>
        </Col>
        );
      })
      return(
      <div>
        <Container>
          <Jumbotron id="jumboheader">
            <h1 className="display-4">Headlines Search</h1>
            <p className="lead">Search for more headlines</p>
          </Jumbotron>
          <Row>
            <Col>
              <Alert
                color="danger"
                isOpen={this.state.alertVisible}
                toggle={this.onDismiss}
              >
                News not found
              </Alert>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <Label for="title">Enter keywords</Label>
                  <Input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Enter keywords to search..."
                    onChange={this.onChange}
                  />
                </FormGroup>
                <Button color="primary">Search</Button>
              </Form>
            </Col>
          </Row>
          <p />
          <Row>{newsCard}</Row>
        </Container>
      </div>
    );
  }
}
