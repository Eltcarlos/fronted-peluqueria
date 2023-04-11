import React from "react";
import { AiFillCreditCard } from "react-icons/ai";
import { FaMoneyBillAlt } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const Total = ({ card, money, total, lorena, miriam }) => {
  const DashboardData = [
    {
      bg: "bg-orange-600",
      icon: AiFillCreditCard,
      title: "Total Tarjeta",
      total: card,
    },
    {
      bg: "bg-blue-700",
      icon: FaMoneyBillAlt,
      title: "Total Efectivo",
      total: money,
    },
    {
      bg: "bg-green-600",
      icon: RiMoneyDollarCircleFill,
      title: "Total ",
      total: total,
    },
    {
      bg: "bg-gray",
      icon: RiMoneyDollarCircleFill,
      title: "Miriam ",
      total: miriam,
    },
    {
      bg: "bg-gray",
      icon: RiMoneyDollarCircleFill,
      title: "Lorena ",
      total: lorena,
    },
  ];
  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
        {DashboardData.map((data, index) => (
          <div key={index} className="p-4 rounded bg-dryGray border-border grid grid-cols-4 gap-2">
            <div className={`col-span-1 rounded-full h-12 w-12 flex-colo ${data.bg}`}>
              <data.icon />
            </div>
            <div className="col-span-3">
              <h2 className="text-black">{data.title}</h2>
              <p className="mt-2 text-black font-bold">{data.total}$</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Total;
