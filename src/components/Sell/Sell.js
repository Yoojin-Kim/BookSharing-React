import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Sell.css';


class Sell extends Component{

  render(){
    
    const keyword = "";

    const navbarComponent = this.props.navbarComponent;

    const inputbooks = this.props.resdata;
    
    const listItems = inputbooks.map((input) =>
      <Col key={input.id} className="myCol" xs lg md xl={2}>
        <Card class="card">
          <Card.Img class="card-img" variant="top" src={require('../../image/rent_01.png')} />
          <Card.Body>
            <Card.Title style={{ fontSize: 15 }}>{input.title}</Card.Title>
            <Card.Text style={{ fontSize: 15 }}>
              {input.price}원
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );

    console.log("len : " + listItems.length);
  
    return(
      <Container>
        {navbarComponent}
        <Row className = "register">
          <Col xs lg md xl = {{span: 4, offset: 10}}>
            <a href="#book-register">
              <Button variant="dark" size="lg">
                도서 등록
              </Button>
            </a>
          </Col>
        </Row>
        <Row>
          {listItems}
        </Row>
      </Container>
    );
  }
}

export default Sell;