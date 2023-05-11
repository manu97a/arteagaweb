import React from "react";
import { Link } from "react-router-dom";

// importar imagenes
import Semiprofesional1 from "../../../assets/productos/Violines/Violin Semiprofesional/violin 1/Principal.png";
import Semiprofesional2 from "../../../assets/productos/Violines/Violin Semiprofesional/violin 2/Principal.png";
import Semiprofesional3 from "../../../assets/productos/Violines/Violin Semiprofesional/violin 3/Principal.png";
import Semiprofesional4 from "../../../assets/productos/Violines/Violin Semiprofesional/violin 4/Principal.png";
// ----------------------------
const semiprofesionales = [
  {
    id: 1,
    name: "Violin Semiprofesional Nro. 1",
    href: "/producto-violin-semiprofesional-uno",
    imageSrc: Semiprofesional1,
    imageAlt: "Violin Semiprofesional Nro. 1-Instrumentos arteaga",
    price: "$650",
    color: "Pino y Arce Categoría A",
  },
  {
    id: 2,
    name: "Violin Semiprofesional Nro. 2",
    href: "/producto-violin-semiprofesional-dos",
    imageSrc: Semiprofesional2,
    imageAlt: "Violin Semiprofesional Nro. 2-Instrumentos arteaga",
    price: "$650",
    color: "Pino y Arce Categoría A",
  },
  // {
  //   id: 3,
  //   name: "Violin Semiprofesional Nro. 3",
  //   href: "/producto-violin-semiprofesional-tres",
  //   imageSrc: Semiprofesional3,
  //   imageAlt: "Violin Semiprofesional Nro. 3-Instrumentos arteaga",
  //   price: "$1500",
  //   color: "Pino y Arce Categoría A",
  // },
  // {
  //   id: 4,
  //   name: "Violin Semiprofesional Nro. 4",
  //   href: "/producto-violin-semiprofesional-cuatro",
  //   imageSrc: Semiprofesional4,
  //   imageAlt: "Violin Semiprofesional Nro. 4-Instrumentos arteaga",
  //   price: "$3500",
  //   color: "Pino y Arce Categoría A",
  // },
];
const ViolinesSemiprofesional = () => {
  return (
    <div>
      <h2 className="mt-10 text-4xl text-center text-[#C2391B] font-principal tracking-tight">
        Violines Semiprofesionales
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 border-2">
        {semiprofesionales.map((semiprofesinal) => (
          <div key={semiprofesinal.id} className="group relative">
            <div className="h-[500px] aspect-h-1 aspect-w-1 overflow-hidden rounded-md border-2 bg-gray-200 lg:aspect-none group-hover:animate-pulse lg:max-h-100">
              <img
                src={semiprofesinal.imageSrc}
                alt={semiprofesinal.imageAlt}
                className="object-cover object-center w-1/2"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm font-principal text-gray-700">
                  <Link to={semiprofesinal.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {semiprofesinal.name}
                  </Link>
                </h3>
                <p className="mt-1 text-sm font-principal text-[#C2391B]">
                  {semiprofesinal.color}
                </p>
              </div>
              <p className="text-sm font-medium text-gray-900">
                {semiprofesinal.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViolinesSemiprofesional;
