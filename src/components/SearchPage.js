import React, { Component } from "react";
import { search } from "../BooksAPI";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

class SearchPage extends Component {
  state = { books: [], errorMessage: "" };
  exitSearch = () => {
    this.props.returnMain();
  };

  onSearchSubmit = async (term) => {
    const response = await search(term);
    if (response.error) {
      this.setState({ errorMessage: response.error });
    } else {
      this.setState({ books: response, errorMessage: "" });
    }
  };

  renderResults() {
    if (this.state.errorMessage) {
      return (
        <div className="search-books-results">
          Error:{this.state.errorMessage}
        </div>
      );
    } else {
      return <SearchResult books={this.state.books} />;
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={this.exitSearch}>
            Close
          </button>
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
        {this.renderResults()}
      </div>
    );
  }
}

export default SearchPage;
