import React, { Component } from 'react';
import BookListItem from '../BookListItem/BookListItem';

class BookList extends Component {
  render() {
    const { books, onToggle, onRemove } = this.props;

    const bookList = books.map(
        ({id, text,checked}) => (
            <BookListItem
                id={id}
                text={text}
                checked={checked}
                onToggle={onToggle}
                onRemove={onRemove}
                key={id}
            />
        )
    );

    return (
      <div>
        {bookList}   
      </div>
    );
  }
}

export default BookList;