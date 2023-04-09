import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

// public protection
const ProtectedRouter = () => {
  const { status } = useSelector((state) => state.auth);

  return status === "authenticated" ? <Outlet /> : <Navigate to="/" />;
};

// admin router protection

const AdminProtectedRouter = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return userInfo?.token ? userInfo?.isAdmin ? <Outlet /> : <Navigate to="/*" /> : <Navigate to="/login" />;
};

export { ProtectedRouter, AdminProtectedRouter };
