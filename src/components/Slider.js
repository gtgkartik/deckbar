import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./Slider.css";
import image1 from '../Images/homeimages/1.jpg'
import image2 from '../Images/homeimages/4.jpg'
import image3 from '../Images/homeimages/5.jpg'
import image4 from '../Images/homeimages/8.jpg'



const Slider = () => {
  const [currentIndex, setcurrentIndex] = useState(1);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setcurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex);
  };

  const slides = [
    {
      url: image4,
    },
    {
      url: image2,
    },
    {
      url: image3,
    },
    {
      url: image1,
    },
  ];
  return (
    <>
      <div className="w-full md:h-[650px] m-auto relative sm:h-[550px]  bg-gradient-to-tl from-gray-700 to-gray-700">
        {/* Image */}
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full bg-center bg-cover duration-500 mix-blend-overlay absolute "
        >
        </div>
        {/* left arrow  */}
        <div className="absolute z-10 top-[50%] cursor-pointer left-5">
          <IoIosArrowBack onClick={prevSlide} color="white" size="30px" />
        </div>
        {/* right arrow  */}
        <div className="absolute  top-[50%] cursor-pointer right-7">
          <IoIosArrowForward onClick={nextSlide} color="white" size="30px" />
        </div>
        {/* Text and titles  */}
        <div className=" flex flex-col absolute md:top-[350px] ls:top-[300px] sm:top-[350px] ls:pl-[100px] sm:pl-[50px] ">
          <h1 className="font-libre text-white md:text-[15px] ls:text-[15px] sm:text-[13px]  mb-5 sm:justify-center">
            A rare cosy void deck space for you
          </h1>
          <h1 className="font-libre text-white md:text-[40px] ls:text-[30px] sm:text-[25px]">
            So Casual So Chill! <br /> Feel Good, feel Power up !
          </h1>
          <button className="bg-white hover:bg-black hover:text-white text-black font-libre py-2 w-[200px] mt-5 rounded">
            <a href="/order">Menu</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
