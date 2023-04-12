import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { logout } from "../../store/auth/authSlice";
import { removeCash } from "../../store/cashRegister/cashSlice";
import { removeReservation } from "../../store/reservation/reservationSlice";

export const navigation = [
  {
    name: "inicio",
    href: "home",
  },
  {
    name: "Acerca De",
    href: "about",
  },
  {
    name: "Servicios",
    href: "services",
  },
  {
    name: "Clientes",
    href: "clients",
  },
  {
    name: "Citas",
    href: "citas",
  },
];

const NavBar = () => {
  const [bg, setBg] = useState(false);
  const { status } = useSelector((state) => state.authState);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  }, []);

  const logOut = () => {
    const message = "Error en la petición";
    dispatch(logout(message));
    dispatch(removeCash());
    dispatch(removeReservation());
    localStorage.removeItem("token");
    localStorage.removeItem("persist:root");
  };

  return (
    <div
      className={`${
        bg ? "bg-black h-20" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <NavLink to="/">
        <div className="flex items-center">
          <div className="flex items-start space-x-0">
            <img className="w-[100px]" src="/images/logo.png" alt="logo" />
          </div>
        </div>
      </NavLink>

      <ul className="flex space-x-8 capitalize text-[15px] ">
        {navigation.map((item, index) => {
          return (
            <li className="text-white hover:text-rose cursor-pointer" key={index}>
              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
        {status === "authenticated" && (
          <NavLink onClick={logOut} className="text-white hover:text-rose cursor-pointer">
            {" "}
            Logout{" "}
          </NavLink>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
