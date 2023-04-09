import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiCut } from "react-icons/bi";
import { BsCalendarDateFill, BsFillFilePersonFill, BsFillPersonFill } from "react-icons/bs";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const hover = "p-4 flex space-x-1 hover:text-rose transitions text-white";
  const Hover = ({ isActive }) => (isActive ? "text-rose p-4 flex-space-x-1" : hover);

  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <Link to="/">
          <img className="w-[500px] mx-auto my-4" src="/images/logo.png" alt="logo" />
        </Link>
        <p className="py-4">© 2022 Peluqueria Lorena todos los derechos reservados.</p>
        <div className="flex md:w-[75%] ">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <ul>
            <li className="p-1 space-x-1">
              <NavLink to="/movies" className={Hover}>
                <AiFillHome />
                <span>Inicio</span>
              </NavLink>
            </li>
            <li className="p-1 space-x-1">
              <NavLink to="/movies" className={Hover}>
                <MdGroups2 />
                <span>Nosotros</span>
              </NavLink>
            </li>
            <li className="p-1 space-x-1">
              <NavLink to="/movies" className={Hover}>
                <BiCut />
                <span>Servicios</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="p-1 space-x-1">
              <NavLink to="/movies" className={Hover}>
                <BsFillFilePersonFill />
                <span>clientes</span>
              </NavLink>
            </li>
            <li className="p-1 space-x-1">
              <NavLink to="/movies" className={Hover}>
                <BsCalendarDateFill />
                <span>Reservaciones</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="p-2 flex space-x-1">
              <NavLink to="/login" className={Hover}>
                <BsFillPersonFill />
                <span>Login</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
