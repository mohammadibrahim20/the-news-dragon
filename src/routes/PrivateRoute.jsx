import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log("user in private router", user);
  console.log(loading)
  if (loading) {
    return <Spinner animation="border" variant="primary" />
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;

/* 
*
* 1 . Check user is logged in or not
*  2. if user is logged in, then allowed to access and visit the routes
* 3. else redirect the user to the login page
* 4. setup the private router


 */
