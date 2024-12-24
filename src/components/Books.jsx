import React, { useEffect, useState } from "react";
import BookCard from "./BookCard.jsx";
import axios from "axios";
import "../css/Book.css";
function Books({ role }) {
  const [books, setBooks] = useState();

  useEffect(() => {
    axios
      .get("https://project-name-backend-lms.onrender.com/book/books")
      .then((res) => {
        setBooks(res.data); // No need to access res.data.books, since the response returns an array
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="book-list">
      {books?.map((book) => (
        <BookCard key={book._id} book={book} role={role} />
      ))}
    </div>
  );
}

export default Books;
