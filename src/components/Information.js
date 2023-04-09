import React from "react";

const brands = [
  {
    id: 1,
    url: "/images/brands/glosco.png",
    description: "glosco",
  },
  {
    id: 2,
    url: "/images/brands/fanola.png",
    description: "fanola",
  },
  {
    id: 3,
    url: "/images/brands/semilac.png",
    description: "semilac",
  },
  {
    id: 4,
    url: "/images/brands/ufaes.png",
    description: "ufaes",
  },
  {
    id: 3,
    url: "/images/brands/byotea.png",
    description: "byotea",
  },
];

const Information = () => {
  return (
    <div className="bg-rose w-full py-5 text-white px-4">
      <div className="container mx-auto flex md:justify-between items-center flex-wrap justify-evenly">
        {brands.map((brand, index) => {
          return (
            <div key={index}>
              <img src={brand.url} alt={brand.description} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Information;
