import React from 'react'
import guitarra1 from '../../../assets/productos/Guitarras/Guitarra 1/principal.png'
import guitarra2 from '../../../assets/productos/Guitarras/Guitarra 2/principal.png'

import { motion } from "framer-motion";
const guitarras = [
    {
      id: 1,
      name: "Guitarra Clásica",
      href: "/producto-guitarra-uno",
      imageSrc: guitarra1,
      imageAlt: "Guitarra 1-Principal-Instrumentos arteaga",
      price: "$650",
      color: "Cedar Canadiense y Caoba",
    },
    {
      id: 1,
      name: "Guitarra Gypsy",
      href: "/producto-guitarra-dos",
      imageSrc: guitarra2,
      imageAlt: "Guitarra 2-Instrumentos arteaga",
      price: "$800",
      color: "Pino Italiano y Cedro Amazónico",
    },
  ];
const Guitarras = () => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
    {guitarras.map((guitarra) => (
      <motion.div initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.3, duration: 1 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }} key={guitarra.id} className="group relative">
        <div className="h-[500px] aspect-h-1 aspect-w-1 overflow-hidden border-2 bg-gray-200 lg:aspect-none group-hover:animate-pulse lg:max-h-100 justify-center items-center ">
          <img
            src={guitarra.imageSrc}
            alt={guitarra.imageAlt}
            className="mx-auto w-auto"
          />
        </div>
        <div className="mt-4 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-principal text-gray-700">
              <a href={guitarra.href}>
                <span aria-hidden="true" className="absolute inset-0" />
                {guitarra.name}
              </a>
            </h3>
            <p className="mt-1 text-sm font-principal text-[#C2391B]">
              {guitarra.color}
            </p>
          </div>
          <p className="text-sm font-medium text-gray-900">{guitarra.price}</p>
        </div>
      </motion.div>
    ))}
  </div>
  )
}

export default Guitarras