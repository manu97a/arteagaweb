import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";


const BotonCompra = () => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    const currentUrl = window.location.href;
    setUrl(currentUrl);
  }, []);
  const text = "Hola, estoy interesado en comprar el instrumento del siguiente link:  " + url;
  return (
    <div className="container mx-auto">
        <Link
        to={`https://wa.me/+593987397247?text=${encodeURIComponent(text)}"`}
        target="_blank"
        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black border-2 border-[#C2391B] drop-shadow-md hover:drop-shadow-xl rounded-lg hover:text-white hover:bg-[#C2391B] focus:ring-4 focus:ring-gray-100 font-principal my-3"
        >
        Comprar
        </Link>
        
    </div>
  );
};

export default BotonCompra;
