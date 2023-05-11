import React from "react";
import { Link } from "react-router-dom";
import herosectionimg from "../assets/homeImgs/HeroSectionViolin.png";

const Hero = () => {
  return (
    // <section>
    //   <div class=" text-white py-20">
    //     <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
    //       <div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
    //         <h1 class="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose font-principal">
    //           Instrumentos Arteaga
    //         </h1>
    //         <p class="text-sm md:text-base text-gray-50 mb-4 font-principal">
    //           Instrumentos de cuerda con el más alto grado de calidad,
    //           fabricados en Ecuador desde 1993.
    //         </p>
    //         <a
    //           href="#"
    //           class="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
    //         >
    //           Explore Now
    //         </a>
    //       </div>
    //       <div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
    //         <div class="h-48 flex flex-wrap content-center">
    //           <div>
    //             <img
    //               class="inline-block mt-28 hidden xl:block"
    //               src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="bg-white">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="text-[#C2391B] max-w-2xl mb-4 text-4xl font-principal tracking-tight leading-none md:text-5xl xl:text-6xl">
            Arteaga Instrumentos de Cuerda
          </h1>
          <p className="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl font-principal">
            Taller de lutería fundado en 1993 en la ciudad de Loja, dedicado a la construcción y reparación de instrumentos de cuerda de primera categoría, utilizando las mejores maderas y acabados tradicionales.
          </p>
          <Link
            to={"/contact-us"}
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black border-2 border-[#C2391B] drop-shadow-md hover:drop-shadow-xl rounded-lg hover:text-[#C2391B] focus:ring-4 focus:ring-gray-100 font-principal"
          >
            Contactanos
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={herosectionimg} alt="mockup" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
