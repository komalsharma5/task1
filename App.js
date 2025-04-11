import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashbord from "./Components/Dashbord";
import Login from "./Login/Login";
import Signin from "./Signin/Signin";
import { Typography } from "@mui/material";
import { showProfile } from "./Redux/Slice/authSlice";

function App() {
  const dispatch = useDispatch();
  const {isAuthenticated} = useSelector((state) => state.auth);
  console.log("isAuthenticated-->", isAuthenticated)

  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(token){
      dispatch(showProfile(token))
    }
  },[])


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
