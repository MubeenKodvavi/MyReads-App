import React, { Component } from "react";

export default class BookCard extends Component {
  render() {
    const { title, author, imageLinks } = this.props.book;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${
                  imageLinks
                    ? imageLinks.thumbnail
                    : "https://www.google.com/url?sa=i&url=http%3A%2F%2Fcontent.sciendo.com%2Fjournals%2Fpoljes%2F72%2F1%2Fpoljes.72.issue-1.xml&psig=AOvVaw2XzQcvEhA74uZ_X6ksPXOV&ust=1629707188065000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCOCW9MOaxPICFQAAAAAdAAAAABAO"
                })`,
              }}
            />
            <div className="book-shelf-changer">
              <select>
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{author}</div>
        </div>
      </li>
    );
  }
}
