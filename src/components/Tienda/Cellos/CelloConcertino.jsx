// importacion de imagenes
import CelloConcertino1 from "../../../assets/productos/Cellos/Cello Concertino/CelloConcertino-1.jpg";
import CelloConcertino2 from "../../../assets/productos/Cellos/Cello Concertino/CelloConcertino-2.jpg";
import CelloConcertino3 from "../../../assets/productos/Cellos/Cello Concertino/CelloConcertino-3.jpg";
import CelloConcertinoPrincipal from "../../../assets/productos/Cellos/Cello Concertino/c.jpg";
// -----------------
// importar galeria
import galeria1 from "../../../assets/productos/Cellos/Cello Concertino/galeria1.jpg";
import galeria2 from "../../../assets/productos/Cellos/Cello Concertino/galeria2.jpg";
import galeria3 from "../../../assets/productos/Cellos/Cello Concertino/galeria3.jpg";
import galeria4 from "../../../assets/productos/Cellos/Cello Concertino/galeria4.jpg";
import galeria5 from "../../../assets/productos/Cellos/Cello Concertino/galeria5.jpg";
import galeria6 from "../../../assets/productos/Cellos/Cello Concertino/galeria6.jpg";
// ---------------------
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import ScrollTop from "../../ScrollTop";
import GoBack from "../../Extras/GoBack";
import BotonCompra from "../../BotonCompra";
import { useLocation } from "react-router-dom";

const product = {
  name: "Cello Concertino",
  price: "$5000",
  href: "#",
  images: [
    {
      src: CelloConcertinoPrincipal,
      alt: "Cellocuadricula1",
    },
    {
      src: CelloConcertino2,
      alt: "Cellocuadricula2",
    },
    {
      src: CelloConcertino3,
      alt: "Cellocuadricula3",
    },
    {
      src: CelloConcertino1,
      alt: "Cellocuadricula4",
    },
  ],

  description:
    "Luego de 30 años de trabajo e investigación constante acerca de la lutería dan como resultado nuestro violonchelo concertino fabricado madera de la más alta categoría de los bosques rumanos y demás materiales importados de varias partes del mundo se conjugan en un solo instrumento. Disfruta de este violonchelo de autor la experiencia de nuestro luthier Cesar Arteaga ofrece una fabricación minuciosa y detalles únicos que realzan la presencia del instrumentos, además de su espectacular sonoridad con matices únicos que superan las espectativas de músicos solitas o de orquesta.",
  highlights: [
    "Cuentan con cuerdas THOMASTIK SPIROCORE ajustada con LARSEN SOLOIST´S o PISRASTRO EVA PIRAZZI",
    "Diapasón de ébano negro africano categoría AAA",
    "Tiracuerdas de Ébano o arce de calidad AAA",
    "Puente francés de arce de calidad AAA",
    "Clavijas de ébano con ojo parisino"
  ],
  spectecnicas:[
    "Tapa delantera Pino Spruce",
    "Tapa inferior, aros y mástil de arce",
    "Modelo Antonio Stradivari 'Davidov' 1712"
  ],
  details: "Incluye estuche de lona reforzada, arco de madera de pernambuco o fibra de carbón.",
};
const imageGallery = [
  {
    id: 1,
    imgSrc: galeria1,
    imgAlt: "Foto extra 1 para galeria de fotos Cello Concertino",
  },
  {
    id: 2,
    imgSrc: galeria2,
    imgAlt: "Foto extra 2 para galeria de fotos Cello Concertino",
  },
  {
    id: 3,
    imgSrc: galeria3,
    imgAlt: "Foto extra 3 para galeria de fotos Cello Concertino",
  },
  {
    id: 4,
    imgSrc: galeria4,
    imgAlt: "Foto extra 4 para galeria de fotos Cello Concertino",
  },
  {
    id: 5,
    imgSrc: galeria5,
    imgAlt: "Foto extra 5 para galeria de fotos Cello Concertino",
  },
  {
    id: 6,
    imgSrc: galeria6,
    imgAlt: "Foto extra 6 para galeria de fotos Cello Concertino",
  },
  {
    id: 7,
    imgSrc: CelloConcertino2,
    imgAlt: "Foto extra 6 para galeria de fotos Cello Concertino",
  },
  {
    id: 8,
    imgSrc: CelloConcertino3,
    imgAlt: "Foto extra 6 para galeria de fotos Cello Concertino",
  },
];

export default function Example() {
  const actualInstrumento = useLocation().pathname;
  
  return (
    <ScrollTop>
      <Navbar></Navbar>
      <div className="bg-gray-200">
        <div className="mx-auto max-w-2xl lg:max-w-7xl pt-8 pl-2 sm:pl-10 md:pl-10">
          <GoBack />
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
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
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
                  <ul className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-900">
                        <span className="font-principal text-gray-900">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <h3 className="text-xl font-principal text-[#C2391B] mt-8">
                  Especificaciones Técnicas
                </h3>
                <div className="mt-4">
                  <ul className="list-disc space-y-2 pl-4 text-sm">
                    {product.spectecnicas.map((id) => (
                      <li key={id} className="text-gray-900">
                        <span className="font-principal text-gray-900">
                          {id}
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
}
