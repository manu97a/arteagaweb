import React from "react";
import { Link } from "react-router-dom";
import EquipoHomeimg from "../assets/equipo/EquipoHome.jpg";
import { motion } from "framer-motion";
const AboutUs = () => {
  return (
    <div className="container max-w-full mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 bg-gray-200">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.7, duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-3xl lg:text-4xl font-principal leading-9 text-[#C2391B] pb-4 drop-shadow-lg "
          >
            Sobre Nosotros
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.9, duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="font-principal text-base leading-6 text-gray-900 "
          >
            Arteaga Instrumentos de Cuerda, fundado en 1993, taller familiar que
            se ha convertido en un referente en la construcción, reparación y
            restauración de instrumentos de cuerda frotada y pulsada. Nuestra
            habilidad y experiencia trabajando con instrumentos de cuerda nos ha
            permitido tener clientes nacionales e internacionales, incluyendo
            las orquestas mas importantes del Ecuador. Ofrecemos calidad y
            servicio excepcionales en cada proyecto que emprendemos.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, x: 80 },
              visible: { opacity: 1, x: 0 },
            }}
            className="w-1/2 h-10 py-10"
          >
            <Link
              to={"/historia"}
              className="px-5 py-3 text-base text-center text-black border-2 border-[#C2391B] drop-shadow-md hover:drop-shadow-xl rounded-lg hover:text-white hover:bg-[#C2391B] focus:ring-4 focus:ring-gray-100 font-principal"
            >
              Historia
            </Link>
          </motion.div>
        </div>
        <div className="w-full lg:w-8/12 ">
          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.9, duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, x: 80 },
              visible: { opacity: 1, x: 0 },
            }}
            className="w-full h-full rounded-xl shadow-2xl"
            src={EquipoHomeimg}
            alt="A group of People"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
