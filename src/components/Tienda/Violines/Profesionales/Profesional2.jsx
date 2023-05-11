import React from "react";
// importar layout
import Navbar from "../../../Navbar";
import Footer from "../../../Footer";
import ScrollTop from "../../../ScrollTop";
// ---------------------
// importar imagenes principales
import Profesional21 from "../../../../assets/productos/Violines/Violin Profesional/violin2/primera.jpg";
import Profesional22 from "../../../../assets/productos/Violines/Violin Profesional/violin2/segunda.JPG";
import Profesional23 from "../../../../assets/productos/Violines/Violin Profesional/violin2/tercera.JPG";
import Profesional24 from "../../../../assets/productos/Violines/Violin Profesional/violin2/cuarta.JPG";
import galeria1 from "../../../../assets/productos/Violines/Violin Profesional/violin2/galeria1.JPG"
import GoBack from "../../../Extras/GoBack";
import BotonCompra from "../../../BotonCompra";
import { useLocation } from "react-router-dom";

// ---------

const product = {
  name: "Violin Profesional Nro 2",
  price: "$850",
  href: "#",
  images: [
    {
      src: Profesional21,
      alt: "Violin Profesional Nro 1-Primera",
    },
    {
      src: Profesional22,
      alt: "Violin Profesional Nro 1-Segunda",
    },
    {
      src: galeria1,
      alt: "Violin Profesional Nro 1-Tercera",
    },
    {
      src: Profesional24,
      alt: "Violin Profesional Nro 1-Cuarta",
    },
  ],

  description:
    "Ideal para músicos profesionales que buscan un instrumento especial, las características de este violín dan una gran sonoridad y presencia única",
  highlights: [
    "Cuentan con cuerdas THOMASTIK  PRÄZISION",
    "Diapasón, clavijas tiracuerdas de Ébano o arce de primera",
    "Puente de arce profesional",
  ],
  details: "Incluye estuche rígido, arco de madera o fibra de carbono.",
};
const imageGallery = [
  {
    id: 1,
    imgSrc: Profesional22,
    imgAlt: "Foto extra 1 para galeria de fotos violin concertino 1",
  },
  {
    id: 2,
    imgSrc: Profesional23,
    imgAlt: "Foto extra 2 para galeria de fotos violin concertino 1",
  },
  {
    id: 2,
    imgSrc: Profesional24,
    imgAlt: "Foto extra 2 para galeria de fotos violin concertino 1",
  },
  {
    id: 2,
    imgSrc: galeria1,
    imgAlt: "Foto extra 2 para galeria de fotos violin concertino 1",
  },
  
];
const Profesional2 = () => {
  const actualInstrumento = useLocation().pathname;
  return (
    <ScrollTop>
      <Navbar />
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

      <Footer />
    </ScrollTop>
  );
};

export default Profesional2;
