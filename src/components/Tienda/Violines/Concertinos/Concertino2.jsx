import React from "react";

// imagenes para pc
import Concertino2Main from '../../../../assets/productos/Violines/Violin Concertino/violin concertino 2/Primera.jpg'
import Concertino22 from '../../../../assets/productos/Violines/Violin Concertino/violin concertino 2/Segunda.jpg'
import Concertino23 from '../../../../assets/productos/Violines/Violin Concertino/violin concertino 2/Tercera.jpg'
import Concertino24 from '../../../../assets/productos/Violines/Violin Concertino/violin concertino 2/Cuarta.jpg'
// -------------------
// importar layout
import Navbar from "../../../Navbar";
import Footer from "../../../Footer";
import ScrollTop from "../../../ScrollTop";
// ----------------------
// importar imagenes para galeria 
import galeria1 from "../../../../assets/productos/Violines/Violin Concertino/violin concertino 2/galeria1.jpg";
import galeria2 from "../../../../assets/productos/Violines/Violin Concertino/violin concertino 2/galeria2.jpg";
import galeria3 from "../../../../assets/productos/Violines/Violin Concertino/violin concertino 2/galeria3.jpg";
import galeria4 from "../../../../assets/productos/Violines/Violin Concertino/violin concertino 2/galeria4.jpg";
import galeria5 from "../../../../assets/productos/Violines/Violin Concertino/violin concertino 2/galeria5.jpg";
import galeria6 from "../../../../assets/productos/Violines/Violin Concertino/violin concertino 2/galeria6.jpg";
import GoBack from "../../../Extras/GoBack";
import BotonCompra from "../../../BotonCompra";
import { useLocation } from "react-router-dom";
// -------------------------

const product = {
  name: "Violin Concertino Nro 2",
  price: "$1400",
  href: "#",
  images: [
    {
      src: Concertino24,
      alt: "Violin Concertino Nro 2-Primera",
    },
    {
      src: Concertino22,
      alt: "Violin Concertino Nro 1-Segunda",
    },
    {
      src: Concertino23,
      alt: "Violin Concertino Nro 1-Tercera",
    },
    {
      src: Concertino2Main ,
      alt: "Violin Concertino Nro 1-Cuarta",
    },
  ],

  description:
    "Disfruta de un violín de autor elaborado con madera importada de primera categoría y las mejores técnicas de la lutheria tradicional. Déjate envolver por un violín con una presencia espectacular y un sonido potente lleno de matices, adecuándose  a las exigencias del músico mas experimentado.",
  highlights: [
    "Cuentan con cuerdas PISRASTRO EVA PIRAZZI",
    "Diapasón, clavijas tiracuerdas de Ébano o arce de primera",
    "Puente de arce profesional",
  ],
  details: "Incluye estuche rígido de fibra de vidrio tapizado, arco de pernambuco o fibra de carbono.",
};
const imageGallery = [
  {
    id: 1,
    imgSrc: galeria1,
    imgAlt: "Foto extra 1 para galeria de fotos violin concertino 2",
  },
  {
    id: 2,
    imgSrc: galeria2,
    imgAlt: "Foto extra 2 para galeria de fotos violin concertino 2",
  },
  {
    id: 3,
    imgSrc: galeria3,
    imgAlt: "Foto extra 3 para galeria de fotos violin concertino 2",
  },
  {
    id: 4,
    imgSrc: galeria4,
    imgAlt: "Foto extra 4 para galeria de fotos violin concertino 2",
  },
  {
    id: 5,
    imgSrc: galeria5,
    imgAlt: "Foto extra 5 para galeria de fotos violin concertino 2",
  },
  {
    id: 6,
    imgSrc: galeria6,
    imgAlt: "Foto extra 6 para galeria de fotos violin concertino 2",
  },

]
const Concertino2 = () => {
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
          <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16">
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

export default Concertino2;
