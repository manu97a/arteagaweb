import React from "react";
// importar las imagenes
import Concertino1 from "../../../assets/productos/Violines/Violin Concertino/violin concertino 1/Principal.png";
import Concertino2 from "../../../assets/productos/Violines/Violin Concertino/violin concertino 2/Thumb.png";
import Concertino3 from "../../../assets/productos/Violines/Violin Concertino/v concertino 3/Principal.png";
import Cabezacaballo from "../../../assets/productos/Violines/Violin Concertino/violin cabeza de caballo/Principal.png";
import { Link } from "react-router-dom";
const concertinos = [
  {
    id: 1,
    name: "Violin Concertino",
    href: "/producto-violin-concertino-uno",
    imageSrc: Concertino1,
    imageAlt: "Violin Concertino 1-Instrumentos arteaga",
    price: "$1400",
    color: "Pino y Arce AAA",
  },
  {
    id: 2,
    name: "Violin Concertino",
    href: "/producto-violin-concertino-dos",
    imageSrc: Concertino2,
    imageAlt: "Violin Concertino 2-Instrumentos arteaga",
    price: "$1400",
    color: "Pino y Arce AAA",
  },
  {
    id: 3,
    name: "Violin Concertino",
    href: "/producto-violin-concertino-tres",
    imageSrc: Concertino3,
    imageAlt: "Violin Concertino 3-Instrumentos arteaga",
    price: "$1400",
    color: "Pino y Arce AAA",
  },
  {
    id: 4,
    name: "Violin Cabeza de Caballo",
    href: "/producto-violin-concertino-cabeza-caballo",
    imageSrc: Cabezacaballo,
    imageAlt: "Violin Cabeza de Caballo-Instrumentos arteaga",
    price: "$1000",
    color: "Pino y Arce AAA",
  },
];

// --------------------
const ViolinesConcertino = () => {
  return (
    <div>
      <h2 className="mt-10 text-4xl text-center text-[#C2391B] font-principal tracking-tight">
        Violines Concertino
      </h2>
      {/* <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 border-2">
        {concertinos.map((concertino) => (
          <div key={concertino.id} className="group relative">
            <div className="mx-auto h-[500px] aspect-h-1 aspect-w-1 overflow-hidden rounded-md border-2 bg-gray-200 lg:aspect-none group-hover:animate-pulse lg:max-h-100 ">
              <img
                src={concertino.imageSrc}
                alt={concertino.imageAlt}
                className="w-1/2 mx-auto"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm font-principal text-gray-700">
                  <Link to={concertino.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {concertino.name}
                  </Link>
                </h3>
                <p className="mt-1 text-sm font-principal text-[#C2391B]">
                  {concertino.color}
                </p>
              </div>
              <p className="text-sm font-medium text-gray-900">
                {concertino.price}
              </p>
            </div>
          </div>
        ))}
      </div> */}
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 border-2">
        {concertinos.map((concertino) => (
          <div key={concertino.id} className="group relative">
            <div className="h-[500px] aspect-h-1 aspect-w-1 overflow-hidden border-2 bg-gray-200 lg:aspect-none group-hover:animate-pulse lg:max-h-100 justify-center items-center ">
              <img
                src={concertino.imageSrc}
                alt={concertino.imageAlt}
                className="mx-auto w-auto"
              />
            </div>
            <div className="mt-4 flex flex-col justify-between text-center">
              <div>
                <h3 className="text-sm font-principal text-gray-700">
                  <Link to={concertino.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {concertino.name}
                  </Link>
                </h3>
                <p className="mt-1 text-sm font-principal text-[#C2391B]">
                  {concertino.color}
                </p>
              </div>
              <p className="text-sm font-medium text-gray-900">
                {concertino.price}
              </p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default ViolinesConcertino;
