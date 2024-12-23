import React, { useState } from "react";
import "../css/AddStudend.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function AddStudent() {
  const [userDta, setUserData] = useState({
    roll: "",
    userName: "",
    grade: "",
    password: "",
  });

  const navigate = useNavigate();
  let token =
    document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1] || "";
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://project-name-backend-bookstore.onrender.com/student/register",
        userDta,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Replace `token` with your actual token variable
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        // console.log("Response data:", res); // Log the response data for debugging
        // navigate i to the dashboard
        if (res.data.registered) {
          navigate("/dashboard");
        }
        console.log(res);

        // Reset user data state
        setUserData({
          roll: "",
          userName: "",
          grade: "",
          password: "",
        });
      })
      .catch((err) => {
        console.error("Error during addStudent:", err); // Log any errors during the addStudent process
      });
  };
  return (
    <div className="container">
      <form className="student-form" onSubmit={handleSubmit}>
        <h2>Add Student</h2>
        <div className="form-group">
          <label htmlFor="roll">Roll No:</label>
          <input
            type="text"
            id="roll"
            name="roll"
            placeholder="Enter your roll number"
            required
            maxLength={5}
            onChange={(e) => setUserData({ ...userDta, roll: e.target.value })}
            value={userDta.roll}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            required
            maxLength={20}
            onChange={(e) =>
              setUserData({ ...userDta, userName: e.target.value })
            }
            value={userDta.username}
          />
        </div>
        <div className="form-group">
          <label htmlFor="grade">Grade:</label>
          <input
            type="text"
            id="grade"
            name="grade"
            placeholder="Enter your grade"
            required
            maxLength={3}
            onChange={(e) => setUserData({ ...userDta, grade: e.target.value })}
            value={userDta.grade}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            maxLength={10}
            onChange={(e) =>
              setUserData({ ...userDta, password: e.target.value })
            }
            value={userDta.password}
          />
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;
