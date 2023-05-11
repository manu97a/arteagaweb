import React from 'react'
// importar imagenes
import CelloConcertino from "../../../assets/productos/Cellos/Cello Concertino/Principal.png";
import CelloProfesional from '../../../assets/productos/Cellos/Cello Profesional/main.png'
import CelloSemiprofesional1 from "../../../assets/productos/Cellos/Cello Semiprofesional/Cello 1/Principal.png";
import CelloSemiprofesional2 from "../../../assets/productos/Cellos/Cello Semiprofesional/Cello 2/Principal.png";
import { Link } from 'react-router-dom';
const cellos = [
  {
    id: 1,
    name: "Cello Concertino",
    href: "/producto-cello-concertino",
    imageSrc: CelloConcertino,
    imageAlt: "Cello Concertino-Instrumentos arteaga",
    price: "$5000",
    color: "Pino y Arce Rumano Categoría AAA",
  },
  {
    id: 2,
    name: "Cello Profesional",
    href: "/producto-cello-profesional",
    imageSrc: CelloProfesional,
    imageAlt: "Cello Profesional-Instrumentos arteaga",
    price: "$1500",
    color: "Pino y Arce Rumano Categoría AAA",
  },
  

  // More products...
];
const Cellos = () => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {cellos.map((cello) => (
                <div key={cello.id} className="group relative">
                  <div className="h-[500px] aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:animate-pulse lg:max-h-100">
                    <img
                      src={cello.imageSrc}
                      alt={cello.imageAlt}
                      className="object-cover object-center w-1/2"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm font-principal text-gray-700">
                        <Link to={cello.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {cello.name}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm font-principal text-[#C2391B]">
                        {cello.color}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {cello.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
  )
}

export default Cellos