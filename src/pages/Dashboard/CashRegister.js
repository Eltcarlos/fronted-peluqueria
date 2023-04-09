import React from "react";
import { FaRegListAlt, FaUser } from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";
import SideBar from "./SideBar";

const CashRegister = () => {
  const DashboardData = [
    {
      bg: "bg-orange-600",
      icon: FaRegListAlt,
      title: "Total Movies",
      total: 90,
    },
    {
      bg: "bg-blue-700",
      icon: HiViewGridAdd,
      title: "Total Categories",
      total: 8,
    },
    {
      bg: "bg-green-600",
      icon: FaUser,
      title: "Total Users",
      total: 134,
    },
  ];
  return (
    <SideBar>
      <h2 className="text-xl font-bold">Caja del dia</h2>
    </SideBar>
  );
};

export default CashRegister;
