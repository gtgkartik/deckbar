import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Gallerystyles.css";
import { Link } from "react-router-dom";

import image4 from '../Images/homeimages/12.jpg'
import image3 from '../Images/homeimages/13.jpg'
import image2 from '../Images/homeimages/14.jpg'
import image5 from '../Images/homeimages/15.jpg'
import image1 from '../Images/homeimages/16.jpg'
import image6 from '../Images/homeimages/17.jpg'
import image7 from '../Images/homeimages/18.jpg'
import image8 from '../Images/homeimages/19.jpg'








const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Gallery = () => {
  return (
    <div className="flex flex-col ">
      <h1 className="flex justify-center font-libre md:text-3xl sm:text-2xl font-semibold mb-[30px] sm:mt-[100px] md:mt-[10px] ">
        Come Visit Us Now
      </h1>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        // showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >

        <div className="slider" >
          <img src={image1} alt="movie" />
        </div>
        <div className="slider" >
          <img src={image2} alt="movie" />
        </div>
        <div className="slider" >
          <img src={image3} alt="movie" />
        </div>

        <div className="slider" >
          <img src={image4} alt="movie" />
        </div>
        <div className="slider" >
          <img src={image5} alt="movie" />
        </div>
        <div className="slider" >
          <img src={image6} alt="movie" />
        </div>
        <div className="slider" >
          <img src={image7} alt="movie" />
        </div>
        <div className="slider" >
          <img src={image8} alt="movie" />
        </div>
      </Carousel>
      <div className="flex justify-center mt-[20px]">
        <Link to="/gallery">
          <button class="bg-black hover:bg-yellow text-white font-libre font-bold py-2 px-6 rounded">
            Check out Gallery
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Gallery;
