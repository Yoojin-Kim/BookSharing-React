import React, { Component } from 'react';

import './Menu.css';

import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Menu extends Component{

    render(){
        return (
            <Row>
                <Col>
                    <a href="#search-rent">
                        <div class="container">
                            <Image class="image" src={require('../../image/rent.png')} rounded fluid/>
                            <div class="overlay">
                                <div class="text">전공책 대여</div>
                            </div>
                        </div>
                    </a>
                </Col>
    
                <Col>
                    <a href="#section-2">
                        <div class="container">
                            <Image class="image" src={require('../../image/buy.png')} rounded fluid/> 
                            <div class="overlay">
                                <div class="text">전공책 구매</div>
                            </div>
                        </div>
                    </a>   
                </Col>
    
                <Col>
                    <a href="#search-sell">
                        <div class="container">
                            <Image class="image" src={require('../../image/sell.png')} rounded fluid/> 
                            <div class="overlay">
                                <div class="text">전공책 판매</div>
                            </div>
                        </div>
                    </a>   
                </Col>
            </Row>
        );
    }
}

export default Menu;

