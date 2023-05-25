import React from "react";
import CesarPersonal from "../assets/equipo/Personales/CesarPersonal.jpg";
import MiguelPersonal from "../assets/equipo/Personales/MiguelPersonal.jpg";
import AgustoPersonal from "../assets/equipo/Personales/AgustoPersonal.jpg";
import { motion } from "framer-motion";
const equipoTrabajo = [
  {
    id: 1,
    name: "Cesar Arteaga Vera",
    imageSrc: CesarPersonal,
    imageAlt: "Cesar Arteaga Luthier Foto Personal",
    rol: "Grand Master Luthier",
  },
  {
    id: 2,
    name: "Agusto Arteaga Galdeman",
    imageSrc: AgustoPersonal,
    imageAlt: "Agusto Arteaga Luthier Foto Personal",
    rol: "Master Luthier",
  },
  {
    id: 3,
    name: "Miguel Arteaga Galdeman",
    imageSrc: MiguelPersonal,
    imageAlt: "Miguel Arteaga Luthier Foto Personal",
    rol: "Master Luthier",
  },
];

const Equipo = () => {
  return (
    <div className="container max-w-full max-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 bg-gray-200">
      <motion.h3
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 1.2, duration: 0.9 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="py-4 px-2 text-3xl font-principal text-center text-[#C2391B] drop-shadow-xl"
      >
        Nuestro Equipo
      </motion.h3>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.5, duration: 0.9 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="p-7 text-xl font-principal text-gray-900 text-center drop-shadow-lg"
      >
        Lutieres de amplia experiencia en la elaboración a mano de instrumentos
        musicales de cuerda frotada y pulsada.
      </motion.p>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.3, duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="container mx-auto"
      >
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-3">
          {equipoTrabajo.map((equipo) => (
            <div className="shadow-card flex flex-col rounded-xl bg-white bg-clip-border">
              <div class="mx-4 -mt-6 translate-y-0">
                <motion.img
                  viewport={{ once: true, amount: 0.5 }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  class="w-auto rounded-lg"
                  src={equipo.imageSrc}
                  alt={equipo.imageAlt}
                />
              </div>
              <div class="text-secondary flex-1 p-6">
                <h4 class="font-principal text-gray-900 text-2xl drop-shadow-xl">
                  {equipo.name}
                </h4>

                <p class="font-principal text-3xl text-[#C2391B] drop-shadow-lg opcacity-60 mb-3">
                  {equipo.rol}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Equipo;
