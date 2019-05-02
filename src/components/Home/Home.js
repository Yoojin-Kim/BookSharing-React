import React from 'react';
import './Home.css';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Home = ({navbarComponent, menu}) => {
    return (
      <Container fluid="true" style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Row class="row">
                <Col xs lg md xl={12}>
                    {navbarComponent}
                </Col>
            </Row>
            {menu}
      </Container>
    );
  };

  export default Home;