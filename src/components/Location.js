import React from "react";

const Location = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="text-rose font-bold ">Hola tú!👋</p>
          <h1 className="text-black md:text-4xl sm:text-3xl text-2xl font-bold py-2">Peluqueria & Estetica</h1>
          <p className="text-gray font-bold ">
            Te ofrecemos los mejores servicios de peluquería, estética y belleza con una forma rápida y segura de
            realizar tu compra🙊 .
          </p>
          <button className="bg-rose text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            <span className="flex ml-2 justify-center">Agenda tu cita✅ </span>
          </button>
        </div>
        <div>
          {" "}
          <iframe
            width="100%"
            height="100%"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=calle duque demandas 25&t=&z=18&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
