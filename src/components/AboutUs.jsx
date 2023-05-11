import React from "react";
import { Link } from "react-router-dom";
import EquipoHomeimg from "../assets/equipo/EquipoHome.jpg";

const AboutUs = () => {
  return (
    <div className="container max-w-full mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 bg-gray-200">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-principal leading-9 text-[#C2391B] pb-4 drop-shadow-lg ">
            Sobre Nosotros
          </h1>
          <p className="font-principal text-base leading-6 text-gray-900 ">
            Arteaga Instrumentos de Cuerda, fundado en 1993, taller familiar que
            se ha convertido en un referente en la construcción, reparación y
            restauración de instrumentos de cuerda frotada y pulsada. Nuestra
            habilidad y experiencia trabajando con instrumentos de cuerda nos ha
            permitido tener clientes nacionales e internacionales, incluyendo
            las orquestas mas importantes del Ecuador. Ofrecemos calidad y
            servicio excepcionales en cada proyecto que emprendemos.
          </p>
          <div className="w-1/2 h-10 py-10">
            <Link
              to={"/historia"}
              className="px-5 py-3 text-base text-center text-black border-2 border-[#C2391B] drop-shadow-md hover:drop-shadow-xl rounded-lg hover:text-white hover:bg-[#C2391B] focus:ring-4 focus:ring-gray-100 font-principal"
            >
              Historia
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-8/12 ">
          <img
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
