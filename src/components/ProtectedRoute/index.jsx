import { Navigate } from "react-router-dom";
import { LoginContext } from "../../contexts/LoginContext";
import React, { useContext } from "react";

export const ProtectedRoute = ({ children }) => {
  const { user } = useContext(LoginContext);
  if (user.email === "" || user.password === "") {
    return <Navigate to="/" />;
  }
  return children;
};
