import React from "react";
import TestimonialSlider from "./TestimonialSlider";

export const testimonials = [
  {
    authorImg: "/images/testimonials/1.png",
    authorText: "Masaje relajante espectacular. La atención personalizada y muy buena. Sin duda repetiré muy pronto.",
    authorName: "Olivia Doe",
  },
  {
    authorImg: "/images/testimonials/2.png",
    authorText:
      "Una gran atención, una peluquería unisex muy bien llevada y con un gran servicio. Además con un precio muy competitivo. De ahora en adelante será mi peluquería",
    authorName: "Lucia Fernanda",
  },
  {
    authorImg: "/images/testimonials/3.png",
    authorText:
      "Excelente atención. Debes hacer cita. Limpieza y observancia de normas sanitarias. Ah! Y buen corte de cabello!",
    authorName: "Samya MH",
  },
];

const Clients = () => {
  return (
    <section id="clients" className="section bg-gray">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h1 className=" md:text-4xl sm:text-3xl text-2xl font-bold py-10">Testimonios</h1>
        </div>
        <TestimonialSlider data={testimonials} />
      </div>
    </section>
  );
};

export default Clients;
