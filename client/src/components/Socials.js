import { FacebookProvider, EmbeddedPost } from "react-facebook";
import { IconName, BsFacebook ,BsInstagram, BsWhatsapp, BsTelegram } from "react-icons/bs";
import { motion } from "framer-motion"

const Socials = () => {
  return (
    <>
      <div className="flex justify-center flex-col ">
        <h1 className="p-4 sm:text-lg ls:text-xl md:text-3xl text-black font-libre font-semibold leading-none text-center">
          Follow Us On Our Social Media
        </h1>
        <div className="flex justify-center">
          <ul className="flex items-center justify-center  ">
            <motion.li whileHover={{scale:1.2}} className="mx-2 ">
              <a href= "https://www.facebook.com/deckbar.sg" className="bg-[#3b5998] w-[50px] h-[50px] flex items-center justify-center rounded-md  " target="#"><BsFacebook  size= "25px" color="white"/> </a>
            </motion.li>
            <motion.li whileHover={{scale:1.2}} className="mx-2">
              <a href= "https://www.instagram.com/deckbarsg/" className="bg-[#EFD9D9] w-[50px] h-[50px]  flex items-center justify-center rounded-md" target="#"><BsInstagram  size= "25px" color="#E33030"/> </a>
            </motion.li>
            <motion.li whileHover={{scale:1.2}} className=" mx-2">
              <a href="https://wa.me/6598873377" className="bg-[#25d366] w-[50px] h-[50px]  flex items-center justify-center rounded-md" target="#"><BsWhatsapp  size= "25px" color="white"/></a> 
            </motion.li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Socials;
