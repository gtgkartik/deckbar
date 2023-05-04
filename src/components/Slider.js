import { useState } from "react";
import {IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import './Slider.css'
const Slider = () => {
    const [currentIndex, setcurrentIndex] = useState(1) ; 

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0 ;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1 ;
        setcurrentIndex(newIndex)
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex ===  slides.length -1  ;
        const newIndex = isLastSlide ? 0 : currentIndex +1 ;
        setcurrentIndex(newIndex)
    }

    const slides = [
        {
            url: "https://images.unsplash.com/photo-1618946503071-61626b5d5125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        },
        {
            url: "https://images.unsplash.com/photo-1635321593217-40050ad13c74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80"
        },
        {
            url: "https://images.unsplash.com/photo-1579065934361-0a0c8771812a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
            url : "https://images.unsplash.com/photo-1617562593428-9dfd3376a14e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }

    ]
    return ( 
        <>
        <div className="w-full md:h-[650px] m-auto relative sm:h-[550px] ">
            <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-full bg-center bg-cover duration-500 ">

            </div>
            {/* left arrow  */}
            <div className="absolute top-[50%] cursor-pointer left-5">
                <IoIosArrowBack onClick={prevSlide} color="white" size="30px"/>
            </div>
        
            {/* right arrow  */}
            <div className="absolute  top-[50%] right-0 cursor-pointer right-5">
                <IoIosArrowForward onClick={nextSlide}  color="white" size="30px"/>
            </div>

        </div>
        </>
     );
}
 
export default Slider;