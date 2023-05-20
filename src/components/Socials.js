import { FacebookProvider, EmbeddedPost } from "react-facebook";

import { IconName, BsFacebook ,BsInstagram, BsWhatsapp, BsTelegram } from "react-icons/bs";

const Socials = () => {
  return (
    <>
      <div className="flex justify-center flex-col ">
        <h1 className="p-4 sm:text-lg ls:text-xl md:text-3xl text-black font-libre font-semibold leading-none text-center">
          Follow Us On Our Social Media
        </h1>
        <div className="flex justify-center">
          <ul className="flex items-center justify-center  ">
            <li className="bg-[#3b5998] w-[50px] h-[50px]  flex items-center justify-center rounded-md mx-2">
              <a><BsFacebook  size= "25px" color="white"/> </a>
            </li>
            <li className="bg-[#EFD9D9] w-[50px] h-[50px]  flex items-center justify-center rounded-md mx-2">
              <a><BsInstagram  size= "25px" color="#E33030"/> </a>
            </li>
            <li className="bg-[#25d366] w-[50px] h-[50px]  flex items-center justify-center rounded-md mx-2">
              <a><BsWhatsapp  size= "25px" color="white"/></a> 
            </li>
            <li className="bg-[#2ca5e0] w-[50px] h-[50px]  flex items-center justify-center rounded-md mx-2">
              <a><BsTelegram  size= "25px" color="white"/></a> 
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Socials;
