import React from "react";
// imagenes para la galeria
import RequintoMain from "../../../assets/productos/Requintos/Requinto Mixto/uno.jpg";
import Requinto2 from "../../../assets/productos/Requintos/Requinto Mixto/Dos.jpg";
import Requinto3 from "../../../assets/productos/Requintos/Requinto Mixto/Tres.jpg";
import Requinto4 from "../../../assets/productos/Requintos/Requinto Mixto/Cuatro.jpg";
// -----------------------------
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import ScrollTop from "../../ScrollTop";
// ----------------------
import galeria1 from "../../../assets/productos/Requintos/Requinto Mixto/galeria1.jpg";
import galeria2 from "../../../assets/productos/Requintos/Requinto Mixto/galeria2.jpg";
import galeria3 from "../../../assets/productos/Requintos/Requinto Mixto/galeria3.jpg";
import GoBack from "../../Extras/GoBack";
import BotonCompra from "../../BotonCompra";
import { useLocation } from "react-router-dom";

const imageGallery = [
  {
    id: 1,
    imgSrc: Requinto2,
    imgAlt: "Foto extra 2 para galeria de fotos requinto",
  },
  {
    id: 2,
    imgSrc: Requinto3,
    imgAlt: "Foto extra 2 para galeria de fotos requinto",
  },
  {
    id: 3,
    imgSrc: RequintoMain,
    imgAlt: "Foto extra 1 para galeria de fotos requinto",
  },
  {
    id: 4,
    imgSrc: galeria2,
    imgAlt: "Foto extra 2 para galeria de fotos requinto",
  },
];
const product = {
  name: "Requinto Mixto",
  price: "$1000",
  href: "#",
  images: [
    {
      src: galeria3,
      alt: "Requinto Mixto -Primera",
    },
    {
      src: Requinto2,
      alt: "Requinto Mixto -Segunda",
    },
    {
      src: Requinto3,
      alt: "Requinto Mixto-Tercera",
    },
    {
      src: Requinto4,
      alt: "Requinto Mixto-Cuarta",
    },
  ],

  description:
    "Nuestro requinto mixto ofrece una calidad de sonido nítido y potente, que marcará la diferencia en tus presentaciones ",
  highlights: ["Tapa Armónica elaborada con pino Spruce y Cedar Canadiense", "Tapa inferior y aros de Caoba", "Mástil de cedro amazónico","Diapasón de ebano africano","Roseta estrellada de 7 puntas con marquetería de abalon","Escala de 520mm","Ecualizador FishMan Pro-PSY-201 Presys Blend"],
  details: "Estuche rígido y uñeta",
}; 
const RequintoMixto = () => {
  const actualInstrumento = useLocation().pathname;
  return (
    <ScrollTop>
      <Navbar></Navbar>
      <div className="bg-gray-200">
        <div className="mx-auto max-w-2xl lg:max-w-7xl pt-8 pl-2 sm:pl-10 md:pl-10">
          <GoBack/>
        </div>
        <div className="pt-6">
          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={product.images[1].src}
                  alt={product.images[1].alt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={product.images[2].src}
                  alt={product.images[2].alt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              <img
                src={product.images[3].src}
                alt={product.images[3].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-principal tracking-tight text-[#C2391B] sm:text-3xl">
                {product.name}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only font-principal text-[#C2391B]">
                Product information
              </h2>
              <p className="text-3xl tracking-tight font-principal text-gray-900">
                {product.price}
                <BotonCompra porComprar={actualInstrumento}/>
              </p>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only font-principal text-[#C2391B]">
                  Description
                </h3>

                <div className="space-y-6">
                  <p className="text-base font-principal text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-principal text-[#C2391B]">
                  Especificaciones
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-900">
                        <span className="font-principal text-gray-900">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-xl font-principal text-[#C2391B]">
                  Incluye
                </h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm font-principal text-gray-900">
                    {product.details}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto p-3 lg:hidden">
            <h2 className="p-5 text-4xl text-center text-[#C2391B] font-principal tracking-tight">
              Conoce más sobre este producto
            </h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              {imageGallery.map((img) => (
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src={img.imgSrc}
                    alt={img.imgAlt}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </ScrollTop>
  );
};

export default RequintoMixto;
