import React from "react";
import Product1img from "../assets/productos/Producto1.png";
import Product2img from "../assets/productos/Producto2.png";
import Product3img from "../assets/productos/Producto3.png";
import Product4img from "../assets/productos/Producto4.png";
import { Link } from "react-router-dom";

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
        <div className="text-center">
          <h2 className="text-4xl text-center text-[#C2391B] font-principal tracking-tight">
            Nuestros Productos
          </h2>
          <p className="text-xl text-center py-3 text-gray-900 font-principal tracking-tight">
            Contamos con una amplia gama de instrumentos de cuerda frotada y pulsada, instrumentos
            andinos y accesorios
          </p>
          <Link to={"/Productos"} className= "inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black border-2 border-[#C2391B] drop-shadow-md hover:drop-shadow-xl rounded-lg hover:text-white hover:bg-[#C2391B] focus:ring-4 focus:ring-gray-100 font-principal my-3">

            Ver Tienda
          </Link>
          
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-200 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:animate-pulse lg:h-100">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm font-principal text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm font-principal text-[#C2391B]">
                    {product.color}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
