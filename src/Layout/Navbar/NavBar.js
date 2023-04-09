import React, { useState } from "react";
import { AiFillHome, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import { BiCut } from "react-icons/bi";
import { BsCalendarDateFill, BsFillFilePersonFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const hover = "p-4 flex space-x-1 hover:text-rose transitions text-white";
  const Hover = ({ isActive }) => (isActive ? "text-subMain p-4 flex-space-x-1" : hover);

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <Link to="/">
        <img className="w-[500px] mx-auto my-4" src="/images/logo.png" alt="logo" />
      </Link>

      <ul className="hidden md:flex">
        <li className="p-1 space-x-1">
          <NavLink to="/movies" className={Hover}>
            <AiFillHome size={20} />
            <span>Inicio</span>
          </NavLink>
        </li>
        <li className="p-1 space-x-1">
          <NavLink to="/movies" className={Hover}>
            <MdGroups2 size={20} />
            <span>Nosotros</span>
          </NavLink>
        </li>
        <li className="p-1 space-x-1">
          <NavLink to="/movies" className={Hover}>
            <BiCut size={20} />
            <span>Servicios</span>
          </NavLink>
        </li>
        <li className="p-1 space-x-1">
          <NavLink to="/movies" className={Hover}>
            <BsFillFilePersonFill size={20} />
            <span>clientes</span>
          </NavLink>
        </li>
        <li className="p-1 space-x-1">
          <NavLink to="/movies" className={Hover}>
            <BsCalendarDateFill size={20} />
            <span>Reservaciones</span>
          </NavLink>
        </li>
        <li className="p-1 space-x-3">
          <NavLink to="/movies" className={Hover}>
            <FaFacebookF size={20} />
            <FaInstagram size={20} />
          </NavLink>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <Link to="/">
          <img className="w-[500px] mx-auto my-4" src="/images/logo.png" alt="logo" />
        </Link>{" "}
        <li className="p-4 flex space-x-1">
          <AiFillHome size={20} />
          <span>Inicio</span>
        </li>
        <li className="p-4 flex space-x-1">
          <MdGroups2 size={20} />
          <span>Nosotros</span>
        </li>
        <li className="p-4 flex space-x-1">
          <BiCut size={20} />
          <span>Servicios</span>
        </li>
        <li className="p-4 flex space-x-1">
          <BsFillFilePersonFill size={20} />
          <span>clientes</span>
        </li>
        <li className="p-4 flex space-x-1">
          <BsCalendarDateFill size={20} />
          <span>Reservaciones</span>
        </li>
        <li className="p-4 flex space-x-3">
          <FaFacebookF size={20} />
          <FaInstagram size={20} />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
