import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Nav.css";

function Nav({ role }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu state
  };

  return (
    <nav className="navbar">
      <div className="left-navbar">
        <Link to={"/"}>LMS App</Link>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${menuOpen ? "open" : ""}`}></div>
        <div className={`line ${menuOpen ? "open" : ""}`}></div>
        <div className={`line ${menuOpen ? "open" : ""}`}></div>
      </div>

      {/* Navigation Links */}
      <div className={`right-navbar ${menuOpen ? "open" : ""}`}>
        {(role === "admin" || role === "student") && (
          <Link to={"/books"} className="navbar-link">
            Books
          </Link>
        )}

        {role === "admin" && (
          <>
            <Link to={"/addbook"} className="navbar-link">
              Add Book
            </Link>
            <Link to={"/addstudent"} className="navbar-link">
              Add Student
            </Link>
            <Link to={"/dashboard"} className="navbar-link">
              Dashboard
            </Link>
          </>
        )}

        {role === "" ? (
          <Link to={"/login"} className="navbar-link">
            Login
          </Link>
        ) : (
          <Link to={"/logout"} className="navbar-link">
            Logout
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Nav;
