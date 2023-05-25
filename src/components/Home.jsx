import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Slider from "./Slider";
import Products from "./Products";
import AboutUs from "./AboutUs";
import Equipo from "./Equipo";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";


const Home = () => {
  return (
    <div>
      <ScrollTop>
        <Navbar></Navbar>
        <Hero></Hero>
        <Equipo></Equipo>
        <Products />
        <AboutUs />
        <Footer></Footer>
      </ScrollTop>
    </div>
  );
};

export default Home;
