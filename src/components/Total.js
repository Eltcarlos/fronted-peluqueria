import React from "react";
import { Pie } from "react-chartjs-2";
import { AiFillCreditCard, AiFillEuroCircle } from "react-icons/ai";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { FaMoneyBillAlt } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { darkScrollbar } from "@mui/material";
ChartJS.register(ArcElement, Tooltip, Legend);

const Total = ({ card, money, total, lorena, miriam }) => {
  const DashboardData = [
    {
      bg: "bg-orange-600",
      icon: AiFillCreditCard,
      title: "Total Tarjeta",
      total: card,
      graph: {
        labels: ["Tarjeta", "Total"],
        datasets: [
          {
            label: "$ EUR",
            data: [card, total],
            backgroundColor: [
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 3,
          },
        ],
      },
    },
    {
      bg: "bg-blue-700",
      icon: FaMoneyBillAlt,
      title: "Total Efectivo",
      total: money,
      graph: {
        labels: ["Efectivo", "Total"],
        datasets: [
          {
            label: "$ EUR",
            data: [money, total],
            backgroundColor: [
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 3,
          },
        ],
      },
    },
    {
      bg: "bg-green-600",
      icon: RiMoneyDollarCircleFill,
      title: "Total ",
      total: total,
      graph: {
        labels: ["Tarjeta", "Efectivo", "Miriam", "Lorena"],
        datasets: [
          {
            label: "$ EUR",
            data: [card, money, miriam, lorena],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 3,
          },
        ],
      },
    },
    {
      bg: "bg-gray",
      icon: RiMoneyDollarCircleFill,
      title: "Miriam ",
      total: miriam,
      graph: {
        labels: ["Miriam", "Total"],
        datasets: [
          {
            label: "$ EUR",
            data: [miriam, total],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 3,
          },
        ],
      },
    },
    {
      bg: "bg-gray",
      icon: RiMoneyDollarCircleFill,
      title: "Lorena ",
      total: lorena,
      graph: {
        labels: ["Lorena", "Total"],
        datasets: [
          {
            label: "$ EUR",
            data: [lorena, total],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 3,
          },
        ],
      },
    },
  ];

  return (
    <div>
      <div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-5 mt-6">
        {DashboardData.map((data, index) => (
          <div
            key={index}
            className="p-5 rounded bg-gradient-to-r from-slate-100 via-slate-200 to-slate-200 border-gray shadow-xl grid grid-cols-6 gap-2"
          >
            <div className={`col-span-1 rounded-full border h-12 w-12 flex-colo ${data.bg}`}>
              <data.icon />
            </div>
            <div className="col-span-3 ml-4 ">
              <h2 className="text-black">{data.title}</h2>
              <p className="mt-12 text-black font-bold flex">
                {data.total}$ <AiFillEuroCircle size={40} />
              </p>
            </div>
            <div className="col-span-2 h-full w-full">
              {data.total === card && <Pie data={data.graph} />}
              {data.total === money && <Pie data={data.graph} />}
              {data.total === total && <Pie data={data.graph} />}
              {data.total === miriam && <Pie data={data.graph} />}
              {data.total === lorena && <Pie data={data.graph} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Total;
