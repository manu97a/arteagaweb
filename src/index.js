import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter,RouterProvider} from "react-router-dom";
import "./index.css";
import Home from "./components/Home";


// paginacion

import TiendaPrincipal from "./components/Tienda/TiendaPrincipal";
import CelloConcertino from "./components/Tienda/Cellos/CelloConcertino";
import Concertino1 from "./components/Tienda/Violines/Concertinos/Concertino1";
import Concertino2 from "./components/Tienda/Violines/Concertinos/Concertino2";
import Concertino3 from "./components/Tienda/Violines/Concertinos/Concertino3";
import Semiprofesional1 from "./components/Tienda/Violines/Semiprofesionales/Semiprofesional1";
import Semiprofesional2 from "./components/Tienda/Violines/Semiprofesionales/Semiprofesional2";
import Semiprofesional3 from "./components/Tienda/Violines/Semiprofesionales/Semiprofesional3";
import Semiprofesional4 from "./components/Tienda/Violines/Semiprofesionales/Semiprofesional4";
import RequintoMixto from "./components/Tienda/Requintos/RequintoMixto";
import Guitarra2 from "./components/Tienda/Guitarras/Guitarra2";
import Profesional1 from "./components/Tienda/Violines/Profesionales/Profesional1";
import Profesional2 from "./components/Tienda/Violines/Profesionales/Profesional2";

import Profesional5 from "./components/Tienda/Violines/Profesionales/Profesional5";
import ContactUs from "./components/ContactUs";
import ConcertinoCaballo from "./components/Tienda/Violines/Concertinos/ConcertinoCaballo";
import CelloProfesional from "./components/Tienda/Cellos/CelloProfesional";
import Profesional3 from "./components/Tienda/Violines/Profesionales/Profesional3";
import Electroacustico from "./components/Tienda/Violines/Profesionales/Electroacustico";
import Guitarra1 from "./components/Tienda/Guitarras/Guitarra1";
import History from "./components/History";



const router = createHashRouter([
  {
    path: "/",
    element:<Home/>
  },
  {
    path: "/Productos",
    element:<TiendaPrincipal/>
  },
  {
    path: "/contacto",
    element:<ContactUs/>
  },
  {
    path: "/producto-cello-concertino",
    element:<CelloConcertino/>
  },
  {
    path: "/producto-cello-profesional",
    element:<CelloProfesional/>
  },
  {
    path: "/producto-violin-concertino-uno",
    element:<Concertino1/>
  },
  {
    path: "/producto-violin-concertino-dos",
    element:<Concertino2/>
  },
  {
    path: "/producto-violin-concertino-tres",
    element:<Concertino3/>
  },
  {
    path: "/producto-violin-concertino-cabeza-caballo",
    element:<ConcertinoCaballo/>
  },
  {
    path: "/producto-violin-semiprofesional-uno",
    element:<Semiprofesional1/>
  },
  {
    path: "/producto-violin-semiprofesional-dos",
    element:<Semiprofesional2/>
  },
  {
    path: "/producto-violin-semiprofesional-tres",
    element:<Semiprofesional3/>
  },
  {
    path: "/producto-violin-semiprofesional-cuatro",
    element:<Semiprofesional4/>
  },
  {
    path: "/producto-requinto-mixto",
    element:<RequintoMixto/>
  },
  {
    path: "/producto-guitarra-uno",
    element:<Guitarra1/>
  },
  {
    path: "/producto-guitarra-dos",
    element:<Guitarra2/>
  },
  {
    path: "/producto-violin-profesional-uno",
    element:<Profesional1/>
  },
  {
    path: "/producto-violin-profesional-dos",
    element:<Profesional2/>
  },
  {
    path: "/producto-violin-profesional-tres",
    element:<Profesional3/>
  },
  {
    path: "/producto-violin-profesional-quinto",
    element:<Profesional5/>
  },
  {
    path: "/producto-violin-profesional-electroacustico",
    element:<Electroacustico/>
  },
  {
    path: "/contact-us",
    element: <ContactUs/>
  },
  {
    path: "/historia",
    element: <History/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
 
  <React.StrictMode>
    <RouterProvider router={router}/>

  

  </React.StrictMode>
  
)