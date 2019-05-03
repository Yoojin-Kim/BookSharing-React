import React from 'react';
import './Home.css';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Home = ({navbarComponent, searchRent}) => {
    return (
      <div class="home">
        <Container fluid="true">
              <Row>
                  <Col xs lg md xl={12}>
                      {navbarComponent}
                  </Col>
              </Row>
              {searchRent}
        </Container>
      </div>
    );
  };

  export default Home;