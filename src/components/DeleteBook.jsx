import axios from "axios";
import { useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

function DeleteBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .delete("https://project-name-backend-lms.onrender.com/book/book/" + id)
      .then((res) => {
        if (res.data.deleted) {
          navigate("/books");
        }
      })
      .catch((err) => console.log(err));
  }, [id, navigate]);
  return <p>Deleting book...</p>; // Minimal UI
}

export default DeleteBook;
