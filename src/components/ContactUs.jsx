import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollTop from "./ScrollTop";
import GoBack from "./Extras/GoBack";
import { Link , useLocation} from "react-router-dom";

import { BiWorld } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";

const ContactUs = () => {
  const rutaActual = useLocation();
  
  return (
    <ScrollTop>
      <Navbar />
      <GoBack />
      <div className="container max-w-full mx-auto bg-gray-100 p-2 font-principal">
        <div class="container my-24 px-6 mx-auto">
          <h1 className="text-4xl text-center text-[#C2391B] font-principal tracking-tight pb-8">
            Contactos
          </h1>
          <p className="text-xl text-center py-3 text-gray-900 font-principal tracking-tight">
            Puedes contactarnos para cualquier duda o consulta relacionada con la fabricación y restauración de instrumentos de cuerda. Estaremos en contacto lo más pronto posible y encantados de responder tus preguntas y brindarte la información que necesitas para obtener el mejor sonido de tu instrumento. ¡No dudes en contactarnos! Estamos aquí para ayudarte en todo lo que necesites.
          </p>
          <section class="mb-32 text-gray-800">
            <div class="relative overflow-hidden bg-no-repeat bg-cover extraclass2 rounded-xl"></div>
            <div class="container text-gray-800 px-4 md:px-12">
              <div class="block rounded-lg shadow-lg py-10 md:py-12 px-4 md:px-6 extraclass">
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 mb-12">
                  <div class="mb-12 lg:mb-0 text-center mx-auto cursor-pointer">
                    <BiWorld className="w-8 h-8 text-[#C2391B] mb-6 mx-auto" />
                    <h6 class="font-medium">Ecuador</h6>
                  </div>

                  <div class="mb-12 lg:mb-0 text-center mx-auto">
                    <Link to="https://goo.gl/maps/MMtWr3j6qKZHSHiN9">
                      <FiMapPin className="w-8 h-8 text-[#C2391B] mb-6 mx-auto" />
                      <h6 class="font-medium">Loja</h6>
                    </Link>
                  </div>

                  <div class="mb-6 md:mb-0 text-center mx-auto">
                    <Link to="https://wa.me/+593987397247">
                      <BsWhatsapp className="w-8 h-8 text-[#C2391B] mb-6 mx-auto" />
                      <h6 class="font-medium">+ 593 98 739 7247</h6>
                    </Link>
                  </div>
                  <div class="text-center mx-auto">
                    <svg
                      class="w-8 h-8 text-[#C2391B] mb-6 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M271.06,144.3l54.27,14.3a8.59,8.59,0,0,1,6.63,8.1c0,4.6-4.09,8.4-9.12,8.4h-35.6a30,30,0,0,1-11.19-2.2c-5.24-2.2-11.28-1.7-15.3,2l-19,17.5a11.68,11.68,0,0,0-2.25,2.66,11.42,11.42,0,0,0,3.88,15.74,83.77,83.77,0,0,0,34.51,11.5V240c0,8.8,7.83,16,17.37,16h17.37c9.55,0,17.38-7.2,17.38-16V222.4c32.93-3.6,57.84-31,53.5-63-3.15-23-22.46-41.3-46.56-47.7L282.68,97.4a8.59,8.59,0,0,1-6.63-8.1c0-4.6,4.09-8.4,9.12-8.4h35.6A30,30,0,0,1,332,83.1c5.23,2.2,11.28,1.7,15.3-2l19-17.5A11.31,11.31,0,0,0,368.47,61a11.43,11.43,0,0,0-3.84-15.78,83.82,83.82,0,0,0-34.52-11.5V16c0-8.8-7.82-16-17.37-16H295.37C285.82,0,278,7.2,278,16V33.6c-32.89,3.6-57.85,31-53.51,63C227.63,119.6,247,137.9,271.06,144.3ZM565.27,328.1c-11.8-10.7-30.2-10-42.6,0L430.27,402a63.64,63.64,0,0,1-40,14H272a16,16,0,0,1,0-32h78.29c15.9,0,30.71-10.9,33.25-26.6a31.2,31.2,0,0,0,.46-5.46A32,32,0,0,0,352,320H192a117.66,117.66,0,0,0-74.1,26.29L71.4,384H16A16,16,0,0,0,0,400v96a16,16,0,0,0,16,16H372.77a64,64,0,0,0,40-14L564,377a32,32,0,0,0,1.28-48.9Z"
                      ></path>
                    </svg>
                    <h6 class="font-medium">
                      Transferencias Bancarias o Efectivo
                    </h6>
                  </div>
                </div>
                <div class="max-w-[700px] mx-auto">
                  <form>
                    <div class="form-group mb-6">
                      <input
                        type="text"
                        class="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-[#C2391B] focus:outline-none"
                        id="exampleInput7"
                        placeholder="Nombre"
                      />
                    </div>
                    <div class="form-group mb-6">
                      <input
                        type="email"
                        class="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-[#C2391B] focus:outline-none"
                        id="exampleInput8"
                        placeholder="Correo Electrónico"
                      />
                    </div>
                    <div class="form-group mb-6">
                      <textarea
                        class="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-[#C2391B] focus:outline-none
            "
                        id="exampleFormControlTextarea13"
                        rows="3"
                        placeholder="Escribe tu consulta"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      class="
            w-full
            px-6
            py-2.5
            bg-[#C2391B]
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-[#c23a1bf0] hover:shadow-lg
            transition
            duration-150
            ease-in-out"
                    >
                      Enviar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </ScrollTop>
  );
};

export default ContactUs;
