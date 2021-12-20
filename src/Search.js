import React from "react";
import { Link } from "react-router-dom";
// import BookSearch from "./BookSearch";

function Search(props) {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            // value={searchVlaue}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">book </ol>
      </div>
    </div>
  );
}

export default Search;
