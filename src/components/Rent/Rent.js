import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BookRegister from '../BookRegister/BookRegister';


class Rent extends Component{

  render(){
    const books = this.props.books;
    const keyword = this.props.keyword;
    
    const bookList = books.map(
      ({id, bookTitle,price}) => {
        console.log("title : " + bookTitle);
        if((keyword == bookTitle) || (keyword == '')){
          return(
          <Col xs lg md xl={2}>
            <Card class="card">
              <Card.Img class="card-img" variant="top" src={require('../../image/rent_01.png')} />
              <Card.Body>
                <Card.Title style={{ fontSize: 15 }}>{bookTitle}</Card.Title>
                <Card.Text style={{ fontSize: 15 }}>
                  {price}원
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          )
        }
      } 
    );

    return(
      <Container>
          <Row class="row">
            {bookList}
          </Row>
        </Container>
    );
  }
}

export default Rent;