import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full bg-gray py-8 pr-20">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[600px] mx-auto my-4" src="/images/about.png" alt="/" />
        <div className="flex flex-col justify-center">
          <h1 className=" md:text-4xl sm:text-3xl text-2xl font-bold py-2">Acerca De</h1>
          <p className="text-rose font-bold ">Peluqueria & Estetica</p>
          <p className="text-justify text-dryGray">
            Peluqueria Lorena es tu nuevo centro de peluquería y estética favorito situado en Duque demandas, en
            Valencia. Cualquier nuevo negocio requiere unos fuertes cimientos y los nuestros están basados en la pasión,
            el compromiso y el profundo respeto a la profesión.
            <br /> Es importante para nosotros que tu visita sea una experiencia única y especial para ti. Estamos
            comprometidos a aconsejarte y ayudarte para que te sientas mejor que nunca.
          </p>
          <a href="https://www.instagram.com/esteticapeluquerialorena/">
            <button className="bg-rose text-white w-[200px] rounded-full shadow-gray  font-medium my-6 mx-auto md:mx-0 py-3 shadow-2xl">
              <span className="flex ml-2 justify-center ">Contactanos!</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
