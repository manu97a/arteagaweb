import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollTop from "./ScrollTop";
import Equipo from "../assets/equipo/EquipoHome.jpg";
import autor from "../assets/equipo/Personales/AgustoPersonal.jpg";
import logotipo from "../assets/logotipo/logoarteaga.png";
import "flowbite";
// galeria de fotos
import historiagaleria1 from "../assets/productos/galeria historia/historia1.JPG";
import historiagaleria2 from "../assets/productos/galeria historia/historia2.JPG";
import historiagaleria3 from "../assets/productos/galeria historia/historia3.jpg";
import historiagaleria4 from "../assets/productos/galeria historia/historia4.jpg";
import historiagaleria5 from "../assets/productos/galeria historia/historia5.jpg";
import historiagaleria6 from "../assets/productos/galeria historia/historia6.jpg";

import antigua1 from "../assets/Fotos del Taller /antigua1.jpg";
import antigua2 from "../assets/Fotos del Taller /antigua2.jpg";
import antigua3 from "../assets/Fotos del Taller /antigua3.jpg";
import antigua4 from "../assets/Fotos del Taller /antigua4.jpg";
import antigua5 from "../assets/Fotos del Taller /antigua5.jpg";

const History = () => {
  return (
    <ScrollTop>
      <Navbar />
      <div className="container max-w-full mx-auto bg-gray-200 font-principal">
        <article class="container max-w-[1024px] mx-auto format format-sm sm:format-base lg:format-lg format-blue text-gray-900 ">
          <header class="mb-4 lg:mb-6 not-format">
            <address class="flex items-center mb-6 not-italic">
              <div class="inline-flex items-center mr-3 text-sm text-gray-900 ">
                <div className="p-8">
                  <img
                    class="mr-4 w-28 h-28 rounded-xl"
                    src={logotipo}
                    alt="Jese Leos"
                  />
                  <p className="text-2xl text-[#C2391B] p-2">Autor:</p>
                  <p class="text-xl font-bold text-gray-900">Agusto Arteaga</p>
                  <p class="text-base font-light text-gray-500 ">
                    Master Luthier
                  </p>
                  <p class="text-base font-light text-gray-500 ">
                    Mayo. 9, 2023
                  </p>
                </div>
              </div>
            </address>
            <h2 class="mb-4 text-2xl font-bold p-8 leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
              Nuestra historia
            </h2>
          </header>
          <div className="container max-w-[1024px]">
            <figure class="max-w-lg mx-auto">
              <img
                class="h-auto max-w-full rounded-lg"
                src={antigua1}
                alt="equiponoticia"
              />
              <figcaption class="mt-2 mb-8 text-sm text-center font-principal text-gray-500">
                Cesar Arteaga
              </figcaption>
            </figure>
          </div>

          <p className="p-8 leading-loose">
            Hace treinta años Cesar Augusto Arteaga Vera quien con 21 años
            inició su labor independiente en la construcción de instrumentos
            musicales de cuerda frotada y pulsada en la ciudad de Loja en
            Ecuador. Teniendo como objetivo especializarse en la construcción de
            violines, violas, violonchelos y contrabajos.
            <br />
            Con el pasar de los años Arteaga Instrumentos de Cuerda creció tanto
            en reputación como experiencia, lo cual permitió que el taller
            trabaje con las mejores sinfónicas, orquestas, grupos de cámara de
            Ecuador y también clientes nacionales e internacionales, esto se
            debe a que la calidad de los instrumentos fabricados en este taller
            es destacable y los músicos elijen este taller por su sonido único y
            la atención al detalle en cada construcción.
          </p>
          {/* inicio galeria antiguas fotos */}
          <div class=" py-6 sm:py-8 lg:py-12 rounded-xl ">
            <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                <div class="flex items-center gap-12">
                  

                  <p class="hidden max-w-screen-sm text-gray-900 md:block font-principal">
                    Conoce un poco de nuestras primeras construcciones:
                  </p>
                </div>

      
              </div>

              <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                <div
                  class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                >
                  <img
                    src={antigua2}
                    loading="lazy"
                    alt="antigua 2 "
                    class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              
                </div>

                <div
                  class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                >
                  <img
                    src={antigua3}
                    loading="lazy"
                    alt="antigua3"
                    class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                 
                </div>

                <div
                 
                  class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                >
                  <img
                    src={antigua4}
                    loading="lazy"
                    alt="antigua4"
                    class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              
                </div>

                <div
                  href="#"
                  class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                >
                  <img
                    src={antigua5}
                    loading="lazy"
                    alt="antigua 5"
                    class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                
                </div>
              </div>
            </div>
          </div>
          {/* final galeria antiguas fotos */}
          <p className="p-8 leading-loose">
            Nuestros instrumentos están fabricados con maderas nacionales e
            importadas con las mejores calidades del mercado, nuestro taller de
            lutería esta especializado en la construcción artesanal del
            instrumento, barniz, accesorios y sonido, teniendo como referencia
            las técnicas de antiguos lutieres que son las bases que sostienen
            nuestro trabajo.
            <br />
            Hoy en día Arteaga Instrumentos de cuerda es una empresa en donde
            Cesar Arteaga trabaja con sus hijos y también con colaboradores, los
            cuales son la siguiente generación de artesanos que llevan adelante
            la tradición e innovación en los servicios que presenta el taller
            los cuales son: construcción, reparación y restauración de todo
            instrumento de cuerda frotada y pulsada..
          </p>
          {/* Galeria de fotos */}
          <div class="container mx-auto px-5 py-2">
            <div class="-m-1 flex flex-wrap md:-m-2">
              <div class="flex w-1/2 flex-wrap">
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={historiagaleria1}
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={historiagaleria2}
                  />
                </div>
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={historiagaleria3}
                  />
                </div>
              </div>
              <div class="flex w-1/2 flex-wrap">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={historiagaleria4}
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={historiagaleria5}
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={historiagaleria6}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* fin galeria de fotos */}
          <p className="p-8 leading-loose">
            En resumen, la historia de este taller de instrumentos es una
            historia de amor por el trabajo, dedicación, y por la artesanía que
            ha sido transmitida de generación en generación. Gracias a su
            dedicación al detalle, a la calidad de los productos finales y a su
            compromismo con la tradición, Arteaga Instrumentos de cuerda se ha
            convertido en un lugar de referencia para varios músicos de todo el
            mundo.
            <br />
          </p>
          <div className="container max-w-[1024px] pb-8">
            <figure class="max-w-lg mx-auto">
              <img
                class="h-auto max-w-full rounded-lg"
                src={Equipo}
                alt="equiponoticia"
              />
              <figcaption class="mt-2 mb-8 text-sm text-center font-principal text-gray-500">
                Nuestro equipo de trabajo
              </figcaption>
            </figure>
          </div>
        </article>
      </div>

      <Footer />
    </ScrollTop>
  );
};

export default History;
