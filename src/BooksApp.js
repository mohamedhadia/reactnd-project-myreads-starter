import React from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

function BooksApp(props) {
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {props.books
                    .filter((book) => book.shelf === "currentlyReading")
                    .map((book) => (
                      <Book
                        key={book.id}
                        book={book}
                        id={book.id}
                        update={props.update}
                      />
                    ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {props.books
                    .filter((book) => book.shelf === "wantToRead")
                    .map((book) => (
                      <Book
                        key={book.id}
                        book={book}
                        id={book.id}
                        update={props.update}
                      />
                    ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {props.books
                    .filter((book) => book.shelf === "read")
                    .map((book) => (
                      <Book
                        key={book.id}
                        book={book}
                        id={book.id}
                        update={props.update}
                      />
                    ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BooksApp;
