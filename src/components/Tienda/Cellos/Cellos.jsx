import React from "react";
// importar imagenes
import CelloConcertino from "../../../assets/productos/Cellos/Cello Concertino/Principal.png";
import CelloProfesional from "../../../assets/productos/Cellos/Cello Profesional/main.png";
import CelloSemiprofesional1 from "../../../assets/productos/Cellos/Cello Semiprofesional/Cello 1/Principal.png";
import CelloSemiprofesional2 from "../../../assets/productos/Cellos/Cello Semiprofesional/Cello 2/Principal.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          key={cello.id}
          className="group relative"
        >
          <div className="h-[500px] aspect-h-1 aspect-w-1 overflow-hidden border-2 bg-gray-200 lg:aspect-none group-hover:animate-pulse lg:max-h-100 justify-center items-center ">
            <img
              src={cello.imageSrc}
              alt={cello.imageAlt}
              className="mx-auto w-auto"
            />
          </div>
          <div className="mt-4 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-principal text-gray-700">
                <Link to={cello.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {cello.name}
                </Link>
              </h3>
              <p className="mt-1 text-sm font-principal text-[#C2391B]">
                {cello.color}
              </p>
            </div>
            <p className="text-sm font-medium text-gray-900">{cello.price}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Cellos;
