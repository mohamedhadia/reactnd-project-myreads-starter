import React from "react";
import { Route, Routes } from "react-router-dom";
// import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BooksApp from "./BooksApp";
import Search from "./Search";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BooksApp />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
