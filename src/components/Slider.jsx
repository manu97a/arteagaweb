import React, { useState } from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx"
import Slider1 from "../assets/homeImgs/slider/Slider1.jpg";
import Slider2 from "../assets/homeImgs/slider/Slider2.jpg";
import Slider3 from "../assets/homeImgs/slider/Slider3.jpg";
import Slider4 from "../assets/homeImgs/slider/Slider4.jpg";
import Slider5 from "../assets/homeImgs/slider/Slider5.jpg";

const Slider = () => {
  const slides = [
    {
      url: Slider1,
    },
    {
      url: Slider2,
    },
    {
      url: Slider3,
    },
    {
      url: Slider4,
    },
    {
      url: Slider5,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newindex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newindex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex)=>{
    setCurrentIndex(slideIndex)
  }
  
  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronDoubleLeft onClick={prevSlide} size={30} />
      </div>

      {/* Rigth Arrrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronDoubleRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide,slideIndex)=>(
            <div key={slideIndex} onClick={()=> goToSlide(slideIndex)} className="text-2xl cursor-pointer">
                <RxDotFilled/>
            </div>

        ))}

      </div>
    </div>
  );
};

export default Slider;
