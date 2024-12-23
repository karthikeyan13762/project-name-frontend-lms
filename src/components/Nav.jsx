import React from "react";
import { Link } from "react-router-dom";
import "../css/Nav.css";
function Nav({ role }) {
  return (
    <nav className="navbar">
      <div className="left-navbar">
        <Link to={"/"}>LMS App</Link>
      </div>
      <div className="right-navbar">
        <Link to={"/books"} className="navbar-link">
          Books
        </Link>

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
