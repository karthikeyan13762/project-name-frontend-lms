// import axios from "axios";
// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function Logout({ setRolevar }) {
//   const navigate = useNavigate();
//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/auth/logout")
//       .then((res) => {
//         console.log(res.data);

//         if (res.data.logout) {
//           setRolevar("");
//           navigate("/");
//         }
//       })
//       .catch((err) => console.log(err));
//   }, []);
// }

// export default Logout;

import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout({ setRolevar }) {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/logout")
      .then((res) => {
        if (res.data.Logout) {
          // Fix: Use the correct property `Logout` from the server response
          setRolevar("");
          navigate("/"); // Navigate to the home page after setting the role
        }
      })
      .catch((err) => {
        console.log("Logout error:", err);
        setRolevar(""); // Clear the role state even if an error occurs
        navigate("/");
      });
  }, []);

  return null; // No need to render anything for this component
}

export default Logout;
