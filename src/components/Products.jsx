import React from "react";
import Product1img from "../assets/productos/Producto1.png";
import Product2img from "../assets/productos/Producto2.png";
import Product3img from "../assets/productos/Producto3.png";
import Product4img from "../assets/productos/Producto4.png";
import ViolinesConcertino from "../components/Tienda/Violines/ViolinesConcertino";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Violin Personalizado",
    href: "#",
    imageSrc: Product1img,
    imageAlt: "Violin Personalizado Instrumentos arteaga",
    price: "$3500",
    color: "Nogal y Pino",
  },
  {
    id: 2,
    name: "Violin Personalizado",
    href: "#",
    imageSrc: Product2img,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$350",
    color: "Madera Refinada",
  },
  {
    id: 3,
    name: "Violin Escala 4",
    href: "#",
    imageSrc: Product3img,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$1500",
    color: "Madera Refinada",
  },
  {
    id: 4,
    name: "Violin Personalizado",
    href: "#",
    imageSrc: Product4img,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$350",
    color: "Madera Refinada",
  },
  {
    id: 4,
    name: "Violin Personalizado",
    href: "#",
    imageSrc: Product4img,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$350",
    color: "Madera Refinada",
  },
  {
    id: 5,
    name: "Violin Personalizado",
    href: "#",
    imageSrc: Product4img,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$350",
    color: "Madera Refinada",
  },
  // More products...
];

export default function Products() {
  return (
    <div className="bg-gray-200">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-center"
        >
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-4xl text-center text-[#C2391B] font-principal tracking-tight"
          >
            Nuestros Productos
          </motion.h2>
          <p className="text-xl text-center py-3 text-gray-900 font-principal tracking-tight">
            Contamos con una amplia gama de instrumentos de cuerda frotada y
            pulsada, instrumentos andinos y accesorios
          </p>
          <Link
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.8, duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            to={"/Productos"}
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black border-2 border-[#C2391B] drop-shadow-md hover:drop-shadow-xl rounded-lg hover:text-white hover:bg-[#C2391B] focus:ring-4 focus:ring-gray-100 font-principal my-3"
          >
            Ver Tienda
          </Link>
        </motion.div>

        <ViolinesConcertino />
      </div>
    </div>
  );
}
