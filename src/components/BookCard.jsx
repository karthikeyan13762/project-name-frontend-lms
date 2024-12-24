import React from "react";
import "../css/BookCard.css";
import { Link } from "react-router-dom";
function BookCard({ book, role }) {
  const { name, author, image } = book;
  return (
    <div className="book-card">
      <img
        src={`https://project-name-backend-lms.onrender.com${image}`}
        alt={name}
        className="book-image"
      />
      <div className="book-details">
        <h3>{name}</h3>
        <p>{author}</p>
      </div>
      <div className="book-actions">
        {role === "admin" && (
          <div className="book-card-buttons">
            <button className="edit-button">
              <Link to={`/book/${book._id}`} id="edit-link">
                Edit
              </Link>
            </button>
            <button className="delete-button">
              <Link to={`/delete/${book._id}`} id="edit-link">
                Delete
              </Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookCard;
