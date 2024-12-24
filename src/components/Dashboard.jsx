import React, { useEffect, useState } from "react";
import "../css/Dashboard.css";
import axios from "axios";
function Dashboard() {
  const [data, setData] = useState({
    student: 0,
    admin: 0,
    book: 0,
  });
  useEffect(() => {
    axios
      .get("https://project-name-backend-lms.onrender.com/dashboard")
      .then((res) => {
        if (res.data.ok) {
          setData(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-box">
        <h2>Total Books</h2>
        <h2>{data.book}</h2>
      </div>
      <div className="dashboard-box">
        <h2>Total Students</h2>
        <h2>{data.student}</h2>
      </div>
      <div className="dashboard-box">
        <h2>Total Admin</h2>
        <h2>{data.admin}</h2>
      </div>
    </div>
  );
}

export default Dashboard;
