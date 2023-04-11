import React, { useEffect } from "react";
import { BsCalendar2Date, BsFillGridFill } from "react-icons/bs";
import { FaCashRegister } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";

import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/auth/authSlice";
import { removeCash } from "../../store/cashRegister/cashSlice";

const SideBar = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.auth);

  const logOut = () => {
    const message = "Error en la petición";
    dispatch(logout(message));
    dispatch(removeCash());
    localStorage.removeItem("token");
  };

  useEffect(() => {
    if (status === "not-authenticated") {
      navigate("/");
    }
  }, [status, navigate]);

  const SideLinks = [
    {
      name: "Estadisticas",
      link: "/dashboard/statistics",
      icon: BsFillGridFill,
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
    <div className="bg-default bg-no-repeat bg-cover bg-center bg-fixed text-white">
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
            <button onClick={logOut} className={`${inActive} ${hover} w-full`}>
              <RiLogoutCircleLine /> Log Out
            </button>
          </div>
          <div className="col-span-6 rounded-md bg-white border border-gray-800 p-6">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
