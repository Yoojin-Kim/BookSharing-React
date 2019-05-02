import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';


class BookRegister extends Component{

    render(){
        const { handleNameChange, handlePriceChange, handleCreate } = this.props; 
        return(
            <Container>
                <Row>
                    <Col xs lg md xl={6}>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>도서 제목</Form.Label>
                                    <Form.Control type="text" placeholder="ex)맨큐의 경제학"
                                        type ='text'
                                        onChange = {handleNameChange}
                                        inputRef = {ref => { this.bookTitle = ref;}}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>판매 가격</Form.Label>
                                    <Form.Control type="text" placeholder="ex)10,000원"
                                        type='text'
                                        onChange = {handlePriceChange}
                                        inputRef={ref => { this.price = ref;}}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>책 사진</Form.Label>
                                    <Form.Control type="file"/>
                                </Form.Group>
                            </Form.Row>
                            <Button variant="dark" type="submit" onClick = {handleCreate} href="#sell">
                                Submit
                        </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}


export default BookRegister;