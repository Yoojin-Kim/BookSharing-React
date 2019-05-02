import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './Search.css';

import Rent from '../Rent/Rent';

class Search_Rent extends Component{

  render(){
    const { handleKeywordChange } = this.props;
    return(
        <Container>
          <Row>
            <Col class="myCol">
              <div class="center">
                <InputGroup size="lg">
                  <Form.Control aria-label="Large" aria-describedby="inputGroup-sizing-sm"
                    placeholder="책 이름을 입력해주세요"
                    type = 'text'
                    onChange = {handleKeywordChange}
                    inputRef = {ref => {this.keyword = ref;}}
                  />
                  <InputGroup.Append>
                    <Button class="button" href = "#rent">검색</Button>
                  </InputGroup.Append>
                </InputGroup>
              </div>
            </Col>
          </Row>  
        </Container>
    );
  }
}

export default Search_Rent;