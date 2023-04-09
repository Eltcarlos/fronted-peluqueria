import React from "react";

const Location = () => {
  return (
    <div className="w-full bg-rose py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
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
            <button className="bg-rose  text-white w-[200px] rounded-full shadow-gray shadow-2xl font-medium my-6 mx-auto md:mx-0 py-3">
              <span className="flex ml-2 justify-center">Agenda tu cita ✅ </span>
            </button>
          </div>
        </div>
        <div>
          {" "}
          <iframe
            title="This is "
            width="100%"
            height="100%"
            className="rounded-2xl"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=calle duque demandas 25&t=&z=18&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
