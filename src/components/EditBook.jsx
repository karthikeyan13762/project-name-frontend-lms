import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../css/Addbook.css";
function EditBook() {
  const [userDta, setUserData] = useState({
    name: "",
    author: "",
    image: null,
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(`https://project-name-backend-lms.onrender.com/book/book/${id}`)
        .then((res) => {
          setUserData(res.data);
        })
        .catch((err) => {
          console.error("Error during fetch:", err); // Log any errors during the fetch
        });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", userDta.name);
    formData.append("author", userDta.author);
    formData.append("image", userDta.image);

    axios
      .put(
        "https://project-name-backend-lms.onrender.com/book/book/" + id,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.updated) {
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
        console.error("Error during edit book:", err);
      });
  };
  return (
    <div className="container">
      <form
        className="book-form"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <h2>Edit Book</h2>
        <div className="form-group">
          <label htmlFor="name">Book Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter book name"
            // required
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
            // required
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
            // required
            onChange={(e) =>
              setUserData({ ...userDta, image: e.target.files[0] })
            }
          />
        </div>
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
}

export default EditBook;
