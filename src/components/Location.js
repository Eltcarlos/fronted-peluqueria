import React, { useState } from "react";
import { Link } from "react-scroll";

const Location = () => {
  const [play] = useState(true);
  return (
    <div id="home" className="w-full bg-rose py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 space-x-10">
        <div className="flex flex-col justify-center">
          <p className="text-white font-bold text-center">Hola tú!👋</p>
          <h1 className="text-white text-center font-sans	leading-loose	 md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Peluqueria & Estetica
          </h1>
          <p className="text-border font-bold font-mono text-center">
            Te ofrecemos los mejores servicios de peluquería, estética y belleza con una forma rápida y segura de
            realizar tu compra🙊 .
          </p>
          <div className="text-center">
            <Link
              to="citas"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="transition-all duration-300"
            >
              <button className="bg-rose  text-white w-[200px] rounded-full shadow-gray shadow-2xl font-medium my-6 mx-auto md:mx-0 py-3">
                <span className="flex ml-2 justify-center">Agenda tu cita ✅ </span>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <div className="max-w-[140px] flex md:flex-colo">
            <video muted autoPlay={play} loop className="w-full h-full rounded">
              <source src="/images/principal.mp4" type="video/mp4" />
            </video>
            <video muted autoPlay={play} loop className="w-full h-full rounded">
              <source src="/images/secondary.mp4" type="video/mp4" />
            </video>
            <video muted autoPlay={play} loop className="w-full h-full rounded">
              <source src="/images/default.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
