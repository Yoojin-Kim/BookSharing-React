import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavbarComponent.css'

const NavbarComponent = () => {
    return (
        <Navbar collapseOnSelect bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#home">서강대학교 전공책 대여 서비스</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">홈</Nav.Link>
                    <Nav.Link href="#introudce">안내</Nav.Link>
                    <NavDropdown title="서비스 이용" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#search-rent">전공책 대여</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#section-2">전공책 구매</NavDropdown.Item>
                        <NavDropdown.Item href="#section-3">전공책 판매</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">로그인</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        회원가입
                  </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  };
  
  export default NavbarComponent;