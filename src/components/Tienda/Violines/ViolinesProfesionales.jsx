import React from "react";
import { Link } from "react-router-dom";
// importar imagenes
import Profesional1 from "../../../assets/productos/Violines/Violin Profesional/violin1/Principal.png";
import Profesional2 from "../../../assets/productos/Violines/Violin Profesional/violin2/Principal.png";
import Profesional3 from "../../../assets/productos/Violines/Violin Profesional/violin3/Principal.png";
import Profesional4 from "../../../assets/productos/Violines/Violin Profesional/violin4/Principal.png";
import Profesional5 from "../../../assets/productos/Violines/Violin Profesional/violin5/Principal.png";
import ElectroAcustico from "../../../assets/productos/Violines/Violin Profesional/violinelectro/Principal.png";
// ---------------------------
const profesionales = [
  {
    id: 1,
    name: "Violin Profesional Nro. 1",
    href: "/producto-violin-profesional-uno",
    imageSrc: Profesional1,
    imageAlt: "Violin Profesional Nro. 1-Instrumentos arteaga",
    price: "$850",
    color: "Pino y Arce Categoría AA",
  },
  {
    id: 2,
    name: "Violin Profesional Nro. 2",
    href: "/producto-violin-profesional-dos",
    imageSrc: Profesional2,
    imageAlt: "Violin Profesional Nro. 2-Instrumentos arteaga",
    price: "$850",
    color: "Pino y Arce Categoría AA",
  },
  {
    id: 3,
    name: "Violin Profesional Nro. 3",
    href: "/producto-violin-profesional-tres",
    imageSrc: Profesional3,
    imageAlt: "Violin Profesional Nro. 3-Instrumentos arteaga",
    price: "$850",
    color: "Pino y Arce Categoría AA",
  },
  // {
  //   id: 4,
  //   name: "Violin Profesional Nro. 4",
  //   href: "/producto-violin-profesional-cuatro",
  //   imageSrc: Profesional4,
  //   imageAlt: "Violin Profesional Nro. 4-Instrumentos arteaga",
  //   price: "$5000",
  //   color: "Pino y Arce Categoría AA",
  // },
  {
    id: 5,
    name: "Violin Profesional Nro. 5",
    href: "/producto-violin-profesional-quinto",
    imageSrc: Profesional5,
    imageAlt: "Violin Profesional Nro. 5-Instrumentos arteaga",
    price: "$850",
    color: "Pino y Arce Categoría AA",
  },
  {
    id: 6,
    name: "Violin ElectroAcústico",
    href: "/producto-violin-profesional-electroacustico",
    imageSrc: ElectroAcustico,
    imageAlt: "Violin ElectroAcústico-Instrumentos arteaga",
    price: "$900",
    color: "Pino y Arce Categoría AA",
  },
];
const ViolinesProfesionales = () => {
  return (
    <div>
      <h2 className="mt-10 text-4xl text-center text-[#C2391B] font-principal tracking-tight">
        Violines Profesionales
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 border-2">
        {profesionales.map((profesional) => (
          <div key={profesional.id} className="group relative">
            <div className="h-[500px] aspect-h-1 aspect-w-1 overflow-hidden rounded-md border-2 bg-gray-200 lg:aspect-none group-hover:animate-pulse lg:max-h-100">
              <img
                src={profesional.imageSrc}
                alt={profesional.imageAlt}
                className="object-cover object-center w-1/2"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm font-principal text-gray-700">
                  <Link to={profesional.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {profesional.name}
                  </Link>
                </h3>
                <p className="mt-1 text-sm font-principal text-[#C2391B]">
                  {profesional.color}
                </p>
              </div>
              <p className="text-sm font-medium text-gray-900">
                {profesional.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViolinesProfesionales;
