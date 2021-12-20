import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BooksApp from "./BooksApp";
import Search from "./Search";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    BooksAPI.getAll().then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<BooksApp books={books} />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
