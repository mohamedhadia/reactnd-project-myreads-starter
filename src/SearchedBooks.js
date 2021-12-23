import React, { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";

function SearchedBooks(props) {
  const [allBooks, setAllBooks] = useState([]);
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    BooksAPI.getAll().then((data) => setAllBooks(data));
  }, []);

  useEffect(() => {
    try {
      setSearchedBooks([]);
      if (props.searchVlaue === "" || !props.searchVlaue) {
        setSearchedBooks([]);
      } else if (props.searchVlaue.length > 0) {
        BooksAPI.search(props.searchVlaue).then(
          (data) => data?.length > 0 && setSearchedBooks(data)
        );
      }
    } catch (error) {
      setErrorMsg("please type another search");
    }
  }, [props.searchVlaue]);

  return (
    <>
      {errorMsg && <p>{errorMsg}</p>}
      {searchedBooks?.map((book) => (
        <Book
          key={book.id}
          book={allBooks.find((e) => e.id === book.id) || book}
          update={props.update}
        />
      ))}
    </>
  );
}

export default SearchedBooks;
