import React from "react";
import { BsCalendar2Date, BsFillGridFill } from "react-icons/bs";
import { FaCashRegister } from "react-icons/fa";
import { RiCoupon2Fill, RiLogoutCircleLine } from "react-icons/ri";

import Layout from "./../../Layout/Layout";
import { NavLink } from "react-router-dom";

const SideBar = ({ children }) => {
  const SideLinks = [
    {
      name: "Estadisticas",
      link: "/dashboard/statistics",
      icon: BsFillGridFill,
    },
    {
      name: "Cupones",
      link: "/dashboard/coupons",
      icon: RiCoupon2Fill,
    },
    {
      name: "Reservaciones",
      link: "/dashboard/reservation",
      icon: BsCalendar2Date,
    },
    {
      name: "Caja del dia",
      link: "/dashboard/cash",
      icon: FaCashRegister,
    },
  ];

  const active = "bg-dryGray text-subMain";
  const hover = "hover:text-white hover:bg-main";
  const inActive = "rounded font-medium text-sm transitions flex gap-3 items-center p-4";
  const Hover = ({ isActive }) => (isActive ? `${active} ${inActive}` : `${inActive} ${hover}`);

  return (
    <Layout>
      <div className="min-h-screen container mx-auto px-2">
        <div className="xl:grid grid-cols-8 gap-10 items-start md:py-12 py-6">
          <div className="col-span-2 sticky bg-dry border border-gray-800 p-6 rounded-md xl:mb-0 mb-5">
            {
              //SideBar Links
              SideLinks.map((link, index) => (
                <NavLink to={link.link} key={index} className={Hover}>
                  <link.icon /> <p>{link.name}</p>
                </NavLink>
              ))
            }
            <button className={`${inActive} ${hover} w-full`}>
              <RiLogoutCircleLine /> Log Out
            </button>
          </div>
          <div className="col-span-6 rounded-md bg-dry border border-gray-800 p-6">{children}</div>
        </div>
      </div>
    </Layout>
  );
};

export default SideBar;
