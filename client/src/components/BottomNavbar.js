import { AiOutlineHome,AiOutlineHeart,AiOutlineUser } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import {BsBag  } from "react-icons/bs";

const BottomNavbar = () => {
    return ( 
        <>
            <ul className="justify-center mx-auto md:hidden ls:hidden sm:flex z-10 bg-white fixed w-full bottom-0 py-2">
                <li className="px-7 cursor-pointer hover:text-yellow duration-150"><span><center ><AiOutlineHome style={{ fontWeight: 'thin' }} size="23px" fontWeight="5px"/><a href="#" className="font-thin">Home</a></center></span></li>
                <li className="px-7 cursor-pointer hover:text-yellow duration-150"><span><center><AiOutlineHeart size="25px"/><a href="#" className="font-thin">Wishlist</a></center></span></li>
                <li className="px-7 cursor-pointer hover:text-yellow duration-150"><span><center><GiHamburgerMenu size="25px"/><a href="#" className="font-thin">Menu</a></center></span></li>
                <li className="px-7 cursor-pointer hover:text-yellow duration-150"><span><center><AiOutlineUser size="25px"/><a href="#" className="font-thin">Account</a></center></span></li>
                <li className="px-7 cursor-pointer hover:text-yellow duration-150"><span><center><BsBag size="25px"/><a href="#" className="font-thin">Cart</a></center></span></li>
            </ul>
        </>
     );
}
 
export default BottomNavbar;