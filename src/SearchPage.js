import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchedBooks from "./SearchedBooks";
// import BookSearch from "./BookSearch";

function SearchPage(props) {
  const [searchVlaue, setsearchVlaue] = useState("");

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
            value={searchVlaue}
            onChange={(e) => setsearchVlaue(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          <SearchedBooks searchVlaue={searchVlaue} update={props.update} />
        </ol>
      </div>
    </div>
  );
}

export default SearchPage;
