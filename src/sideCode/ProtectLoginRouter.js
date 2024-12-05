import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedLoginRouter = ({ children }) => {
  const { Admin } = useSelector((state) => state.adminUser);
  if (!Admin) {
    return <Navigate to='/' replace />;
  }

  return children;
};

export default ProtectedLoginRouter;
