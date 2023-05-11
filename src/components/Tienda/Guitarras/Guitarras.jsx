import React from 'react'
import guitarra1 from '../../../assets/productos/Guitarras/Guitarra 1/principal.png'
import guitarra2 from '../../../assets/productos/Guitarras/Guitarra 2/principal.png'


const guitarras = [
    {
      id: 1,
      name: "Guitarra Clásica",
      href: "/producto-guitarra-uno",
      imageSrc: guitarra1,
      imageAlt: "Guitarra 1-Principal-Instrumentos arteaga",
      price: "$650",
      color: "Cedar Canadiense y Caoba",
    },
    {
      id: 1,
      name: "Guitarra Gypsy",
      href: "/producto-guitarra-dos",
      imageSrc: guitarra2,
      imageAlt: "Guitarra 2-Instrumentos arteaga",
      price: "$800",
      color: "Pino Italiano y Cedro Amazónico",
    },
  ];
const Guitarras = () => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
    {guitarras.map((guitarra) => (
      <div key={guitarra.id} className="group relative">
        <div className="min-h-200 aspect-h-1 aspect-w-1 w-1/2 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:animate-pulse lg:h-100">
          <img
            src={guitarra.imageSrc}
            alt={guitarra.imageAlt}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm font-principal text-gray-700">
              <a href={guitarra.href}>
                <span aria-hidden="true" className="absolute inset-0" />
                {guitarra.name}
              </a>
            </h3>
            <p className="mt-1 text-sm font-principal text-[#C2391B]">
              {guitarra.color}
            </p>
          </div>
          <p className="text-sm font-medium text-gray-900">{guitarra.price}</p>
        </div>
      </div>
    ))}
  </div>
  )
}

export default Guitarras