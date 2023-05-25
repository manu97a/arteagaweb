import React from "react";
import { Link } from "react-router-dom";
import herosectionimg from "../assets/homeImgs/HeroSectionViolin.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-[#C2391B] max-w-2xl mb-4 text-4xl font-principal tracking-tight leading-none md:text-5xl xl:text-6xl"
          >
            Arteaga Instrumentos de Cuerda
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl font-principal"
          >
            Taller de lutería fundado en 1993 en la ciudad de Loja, dedicado a
            la construcción y reparación de instrumentos de cuerda de primera
            categoría, utilizando las mejores maderas y acabados tradicionales.
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
          >
            <Link
              to={"/contact-us"}
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black border-2 border-[#C2391B] drop-shadow-md hover:drop-shadow-xl rounded-lg hover:text-[#C2391B] focus:ring-4 focus:ring-gray-100 font-principal"
            >
              Contáctanos
            </Link>
          </motion.div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            src={herosectionimg}
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
