import React from "react";
import { Link } from "react-router-dom";
import "../css/Nav.css";
function Nav() {
  return (
    <nav className="navbar">
      <div className="left-navbar">
        <Link to={"/"}>LMS App</Link>
      </div>
      <div className="right-navbar">
        <Link to={"/books"} className="navbar-link">
          Books
        </Link>
        <Link to={"/login"} className="navbar-link">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
