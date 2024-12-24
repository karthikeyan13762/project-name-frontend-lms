import React, { useEffect, useState } from "react";

import {
  BrowserRouter,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Books from "./components/Books";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AddStudent from "./components/AddStudent";
import Logout from "./components/Logout";
import axios from "axios";
import Addbook from "./components/Addbook";
import EditBook from "./components/EditBook";
import DeleteBook from "./components/DeleteBook";

function App() {
  const [role, setRolevar] = useState("");
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/verify")
      .then((res) => {
        if (res.data.login) {
          setRolevar(res.data.role);
        } else {
          setRolevar("");
        }
      })
      .catch((err) => console.log(err));
  });
  return (
    <BrowserRouter>
      <Nav role={role} />
      {/* desructure this role in nav */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books role={role} />} />
        <Route path="/login" element={<Login setRolevar={setRolevar} />} />
        <Route path="/logout" element={<Logout setRolevar={setRolevar} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/addbook" element={<Addbook />} />
        <Route path="/book/:id" element={<EditBook />} />
        <Route path="/delete/:id" element={<DeleteBook />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
