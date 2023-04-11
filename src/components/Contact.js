import React from "react";

const Contact = () => {
  return (
    <div id="citas" className="w-full bg-black py-16 px-4">
      <h1 className="text-center md:text-4xl sm:text-3xl text-2xl font-bold py-2">Reserva tu cita</h1>
      <p className="text-center text-border ">
        Rellena este formulario y nos pondremos en contacto contigo para darte cita previa. Gracias!
      </p>
      <br />

      <div className="ml-10 mx-auto grid md:grid-cols-1">
        <form className="space-y-8 w-full items-center">
          <div className="flex gap-8">
            <input
              className="bg-gray text-paragraph h-[60px] outline-none pl-6 w-full font-body text-[15px] rounded-sm focus:outline focus:outline-1 focus:outline-accent"
              type="text"
              placeholder="Nombre"
            />
            <input
              className=" bg-gray text-paragraph h-[60px] outline-none pl-6 w-full font-body text-[15px] rounded-sm focus:outline focus:outline-1 focus:outline-accent"
              type="text"
              placeholder="(+) Numero celular"
            />
          </div>
          <input
            className=" bg-gray text-paragraph h-[60px] outline-none pl-6 w-full font-body text-[15px] rounded-sm focus:outline focus:outline-1 focus:outline-accent"
            type="text"
            placeholder="correo@gmail.com"
          />
          <div>
            <button className="bg-rose  text-white w-[200px] rounded-full shadow-gray shadow-2xl font-medium my-6 mx-auto md:mx-0 py-3">
              <span className="flex justify-center">Envia tu cita </span>
            </button>{" "}
          </div>
        </form>
      </div>
      <div className="items-center w-full h-full pl-10">
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
  );
};

export default Contact;
