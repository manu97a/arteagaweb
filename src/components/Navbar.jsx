import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/logotipo/logoarteaga.png'
import TiendaPrincipal from './Tienda/TiendaPrincipal';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#F9DF7C] bg-[#C2391B]'>
      <h1 className='w-16'><Link to={"/"}><img src={logo} alt="Arteaga" srcset="" /></Link></h1>
      <ul className='hidden md:flex font-principal'>
        <li className='p-4'>
          <Link to={"/"}>Inicio</Link>  
        </li>
        <li className='p-4'> 
          <Link to={"/Productos"}>Productos</Link>
          </li>
        <li className='p-4'><Link to={"/historia"}>Historia</Link></li>
        <li className='p-4'><Link to={"/contacto"}>Contacto</Link></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'z-40 fixed left-0 top-0 w-[60%] h-full bg-[#C2391B] font-principal ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-20 m-4'><Link to={"/"}><img src={logo} alt="" /></Link></h1>
          <li className='p-4 border-b border-white'>
            <Link to={"/"}>Inicio</Link>  
          </li>
          <li className='p-4 border-b border-white'> 
          <Link to={"/Productos"}>Productos</Link>
          </li>
          <li className='p-4 border-b border-white'><Link to={"/historia"}>Historia</Link></li>
          <li className='p-4 border-b border-white'><Link to={"/contacto"}>Contacto</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;