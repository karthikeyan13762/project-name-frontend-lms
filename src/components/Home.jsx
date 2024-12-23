import React, { useEffect } from "react";
import "../css/Home.css";

function Home() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Library Management System</h1>
        <p className="hero-description">
          A Library Management System simplifies managing books, borrowings, and
          returns, making library operations efficient and user-friendly.
        </p>
      </div>
      <div className="hero-image"></div>
    </div>
  );
}

export default Home;
