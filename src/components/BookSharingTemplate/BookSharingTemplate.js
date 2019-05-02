import React from 'react';
import './BookSharingTemplate.css';

const BookSharingTemplate = ({form, children}) => {
  return (
    <div className="book-sharing-template">
      <div className="title" bg="dark">
        전공책 대여 서비스
          </div>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="books-wrapper">
        {children}
      </section>
    </div>
  )
};

export default BookSharingTemplate;