
// import React, { children } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) =>{
     const token = localStorage.getItem("token");
     const role = localStorage.getItem("role");

     if(!token || role !== "ADMIN"){
        return <Navigate to="/admin-login" replace />
     }

     return children;
};

export default PrivateRoute;
