import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Addbook.css";
function Addbook() {
  const navigate = useNavigate();
  const [userDta, setUserData] = useState({
    name: "",
    author: "",
    image: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", userDta.name);
    formData.append("author", userDta.author);
    formData.append("image", userDta.image);

    axios
      .post(
        "https://project-name-backend-lms.onrender.com/book/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.added) {
          navigate("/books");
        } else {
          console.log(res);
        }
        setUserData({
          name: "",
          author: "",
          image: null,
        });
      })
      .catch((err) => {
        console.error("Error during addBook:", err);
      });
  };

  return (
    <div className="container">
      <form
        className="book-form"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <h2>Add Book</h2>
        <div className="form-group">
          <label htmlFor="name">Book Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter book name"
            required
            onChange={(e) => setUserData({ ...userDta, name: e.target.value })}
            value={userDta.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="Enter author name"
            required
            onChange={(e) =>
              setUserData({ ...userDta, author: e.target.value })
            }
            value={userDta.author}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            required
            onChange={(e) =>
              setUserData({ ...userDta, image: e.target.files[0] })
            }
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default Addbook;
