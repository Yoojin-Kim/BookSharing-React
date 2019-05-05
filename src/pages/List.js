import React, { Component } from 'react';
import NavbarComponent from '../components/NavbarComponent/NavbarComponent';
import Sell from '../components/Sell/Sell';

import './Main.css';


import axios from 'axios';

class List extends Component {

  state = {
    resdata : []
  }

  fetchBookInfo = async (keyword) => {
    
    if(!keyword){
      axios.get('http://localhost:8080/list')
      .then((response) => {

        this.setState({
          resdata : response.data.data
        });
      });
    }
    else{
      axios.get('http://localhost:8080/list/search?keyword=' + keyword)
        .then((response) => {

          this.setState({
            resdata: response.data.data
          });
        });
    }
  }
  

  render() {
    const resdata = this.state.resdata;
    const { match: { params } } = this.props;

    console.log(params.keyword);


    this.fetchBookInfo(params.keyword);


    return (
        <div>
            <section class="sell">
              <Sell navbarComponent={(<NavbarComponent/>)} 
              resdata = {resdata}>
              </Sell>
            </section>
      </div>
    );
  }
}

export default List;