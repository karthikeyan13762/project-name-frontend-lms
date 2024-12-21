import React from "react";

import {
  BrowserRouter,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Books from "./components/Books";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/login" element={<Login />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
