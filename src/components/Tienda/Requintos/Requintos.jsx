import React from "react";
import RequintoMixto from "../../../assets/productos/Requintos/Requinto Mixto/Principal.png";
const requintos = [
  {
    id: 1,
    name: "Requinto Mixto",
    href: "/producto-requinto-mixto",
    imageSrc: RequintoMixto,
    imageAlt: "Requinto Mixto-Instrumentos arteaga",
    price: "$1000",
    color: "Pino Spruce y Cedar Canadiense",
  },
];
const Requintos = () => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
      {requintos.map((requinto) => (
        <div key={requinto.id} className="group relative">
          <div className="h-[500px] aspect-h-1 aspect-w-1 overflow-hidden border-2 bg-gray-200 lg:aspect-none group-hover:animate-pulse lg:max-h-100 justify-center items-center ">
            <img
              src={requinto.imageSrc}
              alt={requinto.imageAlt}
              className="mx-auto w-auto"
            />
          </div>
          <div className="mt-4 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-principal text-gray-700">
                <a href={requinto.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {requinto.name}
                </a>
              </h3>
              <p className="mt-1 text-sm font-principal text-[#C2391B]">
                {requinto.color}
              </p>
            </div>
            <p className="text-sm font-medium text-gray-900">{requinto.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Requintos;
