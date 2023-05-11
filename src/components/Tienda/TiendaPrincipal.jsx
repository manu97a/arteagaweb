import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Cellos from "./Cellos/Cellos";
import Requintos from "./Requintos/Requintos";
import Violines from "./Violines/Violines";
import Guitarras from "./Guitarras/Guitarras";
import ScrollTop from "../ScrollTop";
import GoBack from "../Extras/GoBack";

const TiendaPrincipal = () => {
  return (
    /*  */
    <ScrollTop>
      <Navbar></Navbar>

      <div className="bg-gray-200">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <GoBack />
          <div className="text-center">
            <h1 className="text-4xl text-center text-[#C2391B] font-principal tracking-tight">
              Productos
            </h1>
            <p className="text-xl text-center py-3 text-gray-900 font-principal tracking-tight">
              El taller de lutheria a cargo de César Augusto Arteaga Vera
              expresa que: todos los productos presentados a continuación
              incluyen todos los detalles presentados en las descripciones de
              cada uno de los mismos.
              <div class="relative flex py-5 items-center"></div>
              En caso de requerir alguna personalización, cambio de cuerdas o
              acabado el precio cambiará para lo cual dejamos nuestras redes
              sociales y líneas de contacto directa para facilitar el proceso de
              fabrcicación personalizada del instrumento.
              <div class="relative flex py-5 items-center"></div>
              <p className="text-[#C2391B]">
              El precio de los instrumentos no incluye el valor de envío nacional o internacional

              </p>
              
            </p>
            <div class="relative flex py-5 items-center"></div>
            <h1 className="text-4xl text-center text-[#C2391B] font-principal tracking-tight">
              Cellos
            </h1>
            <Cellos></Cellos>
            <h1 className="mt-10 text-4xl text-center text-[#C2391B] font-principal tracking-tight">
              Requintos
            </h1>
            <Requintos></Requintos>
            <h1 className="mt-10 text-4xl text-center text-[#C2391B] font-principal tracking-tight">
              Violines
            </h1>
            <Violines></Violines>
            <h1 className="mt-10 text-4xl text-center text-[#C2391B] font-principal tracking-tight">
              Guitarras
            </h1>
            <Guitarras />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </ScrollTop>
  );
};

export default TiendaPrincipal;
