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
          <div className="min-h-200 aspect-h-1 aspect-w-1 w-1/2 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:animate-pulse lg:h-100">
            <img
              src={requinto.imageSrc}
              alt={requinto.imageAlt}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="mt-4 flex justify-between">
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
