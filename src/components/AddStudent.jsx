import React, { useState } from "react";
import "../css/Addstudent.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function AddStudent() {
  const [userData, setUserData] = useState({
    roll: "",
    username: "",
    grade: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://project-name-backend-lms.onrender.com/student/register",
        userData
      )
      .then((res) => {
        if (res.data.registered) {
          navigate("/dashboard");
        }

        // Reset user data state
        setUserData({
          roll: "",
          username: "",
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
            onChange={(e) => setUserData({ ...userData, roll: e.target.value })}
            value={userData.roll}
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
              setUserData({ ...userData, username: e.target.value })
            }
            value={userData.username}
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
            onChange={(e) =>
              setUserData({ ...userData, grade: e.target.value })
            }
            value={userData.grade}
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
              setUserData({ ...userData, password: e.target.value })
            }
            value={userData.password}
          />
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;
