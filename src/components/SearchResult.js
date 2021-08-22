import React from "react";
import BookCard from "./BookCard";

const SearchResult = (props) => {
  const books = props.books.map((book) => {
    console.log(book.id);
    return <BookCard key={book.id} book={book} />;
  });
  return (
    <div className="search-books-results">
      <ol className="books-grid">{books}</ol>
    </div>
  );
};

export default SearchResult;
