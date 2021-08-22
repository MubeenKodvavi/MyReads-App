import React, { Component } from "react";
import SearchBar from "./SearchBar";
import "../BooksAPI";
import SearchResult from "./SearchResult";
import { search } from "../BooksAPI";

class SearchPage extends Component {
  state = { books: [] };
  exitSearch = (event) => {
    this.props.returnMain();
  };

  onSearchSubmit = async (term) => {
    const response = await search(term);
    this.setState({ books: response });
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={this.exitSearch}>
            Close
          </button>
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
        <SearchResult books={this.state.books} />
      </div>
    );
  }
}

export default SearchPage;
