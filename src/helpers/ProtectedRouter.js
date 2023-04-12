import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

// public protection
const ProtectedRouter = () => {
  const { isAdmin } = useSelector((state) => state.authState);

  return isAdmin === true ? <Outlet /> : <Navigate to="/" />;
};

// admin router protection

const AdminProtectedRouter = () => {
  const { userInfo } = useSelector((state) => state.authState);

  return userInfo?.token ? userInfo?.isAdmin ? <Outlet /> : <Navigate to="/*" /> : <Navigate to="/login" />;
};

export { ProtectedRouter, AdminProtectedRouter };
