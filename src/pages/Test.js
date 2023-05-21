import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../components/Gallerystyles.css";
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
const sliderImageUrl = [
  //First image url
  {
    url: "https://plus.unsplash.com/premium_photo-1663853560438-6cc3a70a3c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  },
  //Second image url
  {
    url: "https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
  //Third image url
  {
    url: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },

  //Fourth image url

  {
    url: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
];
const Test = () => {
  return (
    <div className="flex flex-col ">
      <h1 className="flex justify-center font-libre md:text-3xl sm:text-2xl font-semibold mb-[30px] sm:mt-[100px] md:mt-[10px] ">
        Order Food Now
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
       
       
            <div className="w-full md:h-[650px] m-auto relative sm:h-[550px] ">
              <div className=" bg-gradient-to-tl from-gray-700 to-gray-700">
                <div
                  style={{ backgroundImage: `url(${sliderImageUrl[0].url})` }}
                  className="mx-5 bg-center bg-cover duration-500 hover:mix-blend-overlay absolute "
                ></div>
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
                  <a href="/order">Order Now</a>
                </button>
              </div>
            </div>
        
       
      </Carousel>

      <div className="flex justify-center mt-[20px]">
        <button class="bg-black hover:bg-yellow text-white font-libre font-bold py-2 px-6 rounded">
          Order Now
        </button>
      </div>
    </div>
  );
};
export default Test;
