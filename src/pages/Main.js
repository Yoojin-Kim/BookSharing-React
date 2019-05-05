import React, { Component } from 'react';
import Home from '../components/Home/Home';
import NavbarComponent from '../components/NavbarComponent/NavbarComponent';
import Menu from '../components/Menu/Menu';
import Rent from '../components/Rent/Rent';
import Sell from '../components/Sell/Sell';
import BookRegister from '../components/BookRegister/BookRegister';
import Search_Rent from '../components/Search/Search_Rent';
import Search_Sell from '../components/Search/Search_Sell';


import Scrollspy from 'react-scrollspy';
import './Main.css';

class Main extends Component {

  id = 3

  state = {
    bookTitle: "",
    price: 0,
    keyword: ""
  }

  handleNameChange = (e) => {
    this.setState({
      bookTitle: e.target.value
    });
  }

  handlePriceChange = (e) => {
    this.setState({
      price: e.target.value
    });
  }

  handleCreate = () => {
    const { bookTitle, price, books } = this.state;
    this.setState({
      bookTitle: '',
      price: 0,
      books : books.concat({
        id: this.id++,
        bookTitle : bookTitle,
        price : price
      })
    });
  }

  handleKeyPress = (e) => {
    if(e.key == 'Enter'){
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { books } = this.state;
    const index = books.findIndex(book => book.id === id);
    const selected = books[index];
    const nextBooks = [...books];

    nextBooks[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      books: nextBooks
    });
  }

  handleRemove = (id) => {
    const { books } = this.state;
    this.setState({
      books : books.filter(book => book.id !== id)
    });
  }

  handleKeywordChange = (e) => {
    this.setState({
      keyword: e.target.value
    });
  }

  render() {
    const{
      handleNameChange,
      handlePriceChange,
      handleCreate,
      handleKeywordChange
    } = this;

    const{ bookTitle, price, books, keyword } = this.state;

    return (
        <div>
            <section id="home">
              <Home navbarComponent={(<NavbarComponent/>)}
                    searchRent = {(<Search_Rent handleKeywordChange={handleKeywordChange}
                      keyword={keyword}/>)}>
              </Home>
            </section>
            <section id="book-register">
              <BookRegister handleNameChange={handleNameChange}
                  handlePriceChange={handlePriceChange}
                  handleCreate={handleCreate}
                  bookTitle={bookTitle}
                  price={price}>
              </BookRegister>
            </section>
      </div>
    );
  }
}

export default Main;