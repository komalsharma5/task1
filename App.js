import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashbord from "./Components/Dashbord";
import Login from "./Login/Login";
import Signin from "./Signin/Signin";
import { Typography } from "@mui/material";

function App() {
  const {isAuthenticated} = useSelector((state) => state.auth);
  console.log("isAuthenticated-->", isAuthenticated)


  return (
    <Routes>
      { isAuthenticated ? (
        <>
          <Route path="/profile" element={<Dashbord />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/signup" element={<Signin />} />
          <Route path="/login" element={<Login />} />
        </>
      )}
      <Route path="*" element={<Typography>Page not found</Typography>} />
      
    </Routes>
  );
}

export default App;
