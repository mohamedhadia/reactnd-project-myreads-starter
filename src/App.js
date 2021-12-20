import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BooksApp from "./BooksApp";
import Search from "./Search";

function App() {
  const [books, setBooks] = useState([]);
  const [update, setupdate] = useState(1);
  useEffect(() => {
    BooksAPI.getAll().then((data) => setBooks(data));
  }, [update]);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<BooksApp books={books} update={setupdate} />}
        />
        <Route path="search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
