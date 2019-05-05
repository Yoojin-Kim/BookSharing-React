import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './Search.css';

import Rent from '../Rent/Rent';

import { Link } from 'react-router-dom';
import { all } from 'q';

class Search_Rent extends Component{

  render(){
    const { handleKeywordChange } = this.props;
    const keyword = this.props.keyword;

    const keywordUrl = "list/" + keyword;

    return(
          <Row className = "box-row"> 
            <Col className="search-box-col" xs lg md xl={12}>
              <div class="search-box">
                  <Row className="myRow">
                    <Col xs lg md xl = {3}></Col>
                    <Col className="myCol" xs lg md xl = {2} ><div class = "catg"><h1>대여</h1></div></Col>
                    <Col className="myCol" xs lg md xl={2}><div class = "catg"><h1>구매</h1></div></Col>
                    <Col className="myCol" xs lg md xl={2}><div class = "catg"><h1>판매</h1></div></Col>
                    <Col xs lg md xl = {3}></Col>
                  </Row>
                  <div class="search">
                    <InputGroup size="lg">
                      <InputGroup.Prepend>
                        <span >
                        </span>
                      </InputGroup.Prepend>
                      <Form.Control className = "search-form" aria-label="Large" aria-describedby="inputGroup-sizing-sm"
                        placeholder="책 이름을 입력해주세요"
                        type = 'text'
                        onChange = {handleKeywordChange}
                        inputRef = {ref => {this.keyword = ref;}}
                      />
                      <InputGroup.Append>
                        <Button variant="secondary" className="button" href = "#rent">
                          <Link to= {keywordUrl} style={{ textDecoration: 'none', color: 'white' }}>찾아보기</Link>
                        </Button>
                      </InputGroup.Append>
                    </InputGroup>
                  </div>
              </div>
            </Col>
          </Row>
    );
  }
}

export default Search_Rent;