import React, { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";

function Book(props) {
  const [singleBook, setsingleBook] = useState({});

  useEffect(() => {
    async function getBook() {
      props.book !== undefined
        ? setsingleBook(props.book)
        : console.log(
            singleBook
          ) /*await BooksAPI.get(props.id).then((data) => setsingleBook(data)) */;
    }
    getBook();
  }, []);

  return (
    <li key={singleBook.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${singleBook?.imageLinks?.smallThumbnail})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              value={singleBook?.shelf || "none"}
              onChange={(e) => console.log(e.target.value)}
            >
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
        <div className="book-title">{singleBook.title}</div>
        <div className="book-authors">
          {singleBook?.authors?.length > 0 &&
            singleBook?.authors.map((author, i, arr) => {
              if (arr.length === 1) {
                return author;
              } else if (arr.length - 1 === i) {
                return " and " + author;
              } else {
                return author;
              }
            })}
        </div>
      </div>
    </li>
  );
}

export default Book;
