import React from "react";

const Footer = () => {
  return (
    <div className="container max-w-full">
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-principal title-font mb-4 text-white">
              Contáctanos
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-principal text-[#F9DF7C]">
              Contáctanos para mayor información sobre cualquiera de nuestros
              productos.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="w-full text-center font-principal text-[#F9DF7C]">
                <a
                  className="text-blue hover:animate-pulse hover:text-white"
                  href="mailto:instrumentosarteaga@email.com"
                >
                  instrumentosarteaga@gmail.com
                </a>
                <p className="leading-normal my-5">
                  Av. 8 Diciembre y Loja, 110150
                  <br />
                  Loja,Ecuador
                </p>
                <span className="inline-flex">
                  <a
                    className="text-[#F9DF7C] hover:text-white"
                    href="https://www.facebook.com/instrumentosarteaga/"
                  >
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    className="ml-4 text-[#F9DF7C] hover:text-white"
                    href="https://www.instagram.com/instrumentos_arteaga/"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
