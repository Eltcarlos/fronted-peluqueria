import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          {/* social icons */}
          <div className="flex space-x-6 items-center justify-center ">
            <NavLink to="login">
              <BsFillPersonFill size={30} className="hover:text-rose cursor-pointer" />
            </NavLink>
            <a href="https://www.instagram.com/esteticapeluquerialorena/">
              <FaInstagram size={30} className="hover:text-rose cursor-pointer" />
            </a>
          </div>
          {/* logo */}
          <div>
            <img className="w-20 h-20" src="/images/logo.png" alt="logo" />
          </div>
          <p>© 2023 Peluqueria Lorena todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
