import React, { useState } from "react";
import "../css/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login({ setRolevar }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [role, setRole] = useState("admin");

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleSubmit = () => {
    axios
      .post("https://project-name-backend-lms.onrender.com/auth/login", {
        username,
        password,
        role,
      })
      .then((res) => {
        if (res.data.login && res.data.role === "admin") {
          setRolevar("admin");
          navigate("/dashboard");
        } else if (res.data.login && res.data.role === "student") {
          setRolevar("student");
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            name="role"
            id="role"
            onChange={(e) => setRole(e.target.value)}
          >
            <option value={"admin"}>Admin</option>
            <option value={"student"}>Studenet</option>
          </select>
        </div>
        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
}

export default Login;
