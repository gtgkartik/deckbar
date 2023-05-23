import {IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const HeaderImage = (props) => {
  return (
    <>
      <div className=" relative bg-gradient-to-tl from-gray-700 to-gray-700 w-full h-[300px]">
        <img
          className="w-full h-full object-cover absolute  mix-blend-overlay"
          src= {props.imageurl}
        />
        <div className="p-24 flex flex-col">
          <h1 className=" font-libre font-medium text-white text-[40px] ">
            {props.title}
          </h1>
          <ul className="flex flex-row items-center mt-4">
            <li className="pr-2 text-white font-thin font-libre"><a href="#">Home</a></li>
            <li className="px-2 text-white"><IoIosArrowForward color="white"/></li>
            <li className="px-2 text-white font-thin font-libre"><a href="#">{props.title}</a></li>
          </ul>

        </div>
      </div>
    </>
  );
};


export default HeaderImage;
