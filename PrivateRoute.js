import React from "react";
import { Outlet } from "react-router-dom";
import Signin from "../Signin/Signin";
import { useSelector } from "react-redux";
const PrivateRoute = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    return isAuthenticated ? <Outlet /> : <Signin />;
   
};

export default PrivateRoute;



