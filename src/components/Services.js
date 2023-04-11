import React from "react";

const services = [
  {
    icon: "/images/services/peluqueria.png",
    name: "Peluqueria",
  },
  {
    icon: "/images/services/estetica.png",
    name: "Estetica",
  },
  {
    icon: "/images/services/uñas.png",
    name: "Uñas",
  },
  {
    icon: "/images/services/pies.png",
    name: "Pies",
  },
];

const Services = () => {
  return (
    <section id="services" className="section bg-main">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h1 className=" md:text-4xl sm:text-3xl text-2xl font-bold py-10">Servicios</h1>

          <h5 className="p-2">
            Que estas esperando para adquirir uno de nuestros servicios 🫢, aqui tendras unas vista mas detallada 😏.
          </h5>
          <div className="m-10 grid lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              return (
                <div className="bg-border p-6 rounded-2xl" key={index}>
                  <div className="text-rose rounded-sm w320 h-30 flex justify-center items-center mb-2 text-[28px]">
                    <img src={service.icon} alt={index} />
                  </div>
                  <div className="border-2 bg-rose border-rose hover:border-white">
                    <h4>{service.name}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
