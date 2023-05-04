import './Header.css'
import {AiOutlineUser ,AiOutlineHeart ,AiOutlineSearch} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import {BsBag  } from "react-icons/bs";
import {RxCross2} from "react-icons/rx";
import { useState, useEffect } from 'react';
const Header = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
          document.body.classList.add('overlay');
        } else {
          document.body.classList.remove('overlay');
        }
      }, [open]);
      
    return ( <>
    <nav className= "shadow-[500]">

        <div className='px-10 py-8 mx-auto flex justify-between items-center'>
            <div className='flex items-center '>
                <a href='#' className='logo text-2xl text-yellow flex-shrink-0 truncate'>Deck Bar</a>
            </div>

            {/* Primary Navbar  */}
            <div className='hidden md:flex flex space-x-10 px-10'>
                <a className='hover:text-yellow duration-150 flex-shrink-0 truncate' href='#'>Home</a>
                <a className='hover:text-yellow duration-150 flex-shrink-0 truncate' href='#'>About Us</a>
                <a className='hover:text-yellow duration-150 flex-shrink-0 truncate' href='#'>Promotion</a>
                <a className='hover:text-yellow duration-150 flex-shrink-0 truncate' href='#'>Order</a>
                <a className='hover:text-yellow duration-150 flex-shrink-0 truncate' href='#'>Menu</a>
                <a className='hover:text-yellow duration-150 flex-shrink-0 truncate' href='#'>Contact Us</a> 
            </div>

            {/* Secondary Navbar  */}
            <div className='flex items-center space-x-9 md:px-10'>
                <div className='hidden md:flex flex items-center space-x-2'>
                    <AiOutlineUser/>
                    <div className='flex space-x-1'>
                        <a className='hover:text-yellow duration-150 flex-shrink-0 truncate' href='#'>Login</a>
                        <h4>/</h4>
                        <a className='hover:text-yellow duration-150 flex-shrink-0 truncate' href='#'>Register</a>
                    </div>
                </div>
                <div className='hidden md:flex text-2xl'><h1>|</h1></div>
                <div className='flex  items-center space-x-8'>

                    {/* Heart Icon  */}
                    <div className='md:flex'>
                        <a href='#'>
                            <AiOutlineHeart className='hover:text-yellow duration-150 flex-shrink-0 truncate' size='20px'/>
                        </a>
                    </div>

                     {/* Bag icon  */}
                    <div className='sm:flex '>
                        <a href='#'>
                            <BsBag className='hover:text-yellow duration-150 flex-shrink-0 truncate' size='20px' />
                        </a>
                    </div>

                    {/* Search Icon  */}
                    <div className='md:flex '>
                        <a href='#'>
                        <AiOutlineSearch className='hover:text-yellow duration-150 flex-shrink-0 truncate' size='20px' />
                        </a>
                    </div>
                </div>
                <div className='md:hidden  items-center' onClick={()=> setOpen(!open) }>
                <a href='#' >
                    <GiHamburgerMenu  size='20px'/>
                </a>
                </div>
            </div>
        </div>

                    
        <nav className={`z-50 off-canvas-menu fixed h-screen top-0  w-1/2 mx-auto sm:w- sm:mx-0 bg-white md:hidden flex items-center
        px-8 ${open ? 'right-0' : 'hidden'}`}>
            {/* Mobile Hamburger  */}
             
                <a  className='menu-close-btn  absolute top-8 left-3' href="#" onClick={()=> setOpen(!open) } ><RxCross2 size='25px' /></a>        
                
       
                <ul className=''>
                    <li className='my-5'><a className='hover:text-yellow duration-300 flex-shrink-0 truncate text-xl font-sans' href='#'>Home</a></li>
                    <li className='my-5'><a className='hover:text-yellow duration-300 flex-shrink-0 truncate text-xl font-sans' href='#'>About Us</a></li>
                    <li className='my-5'><a className='hover:text-yellow duration-300 flex-shrink-0 truncate text-xl font-sans' href='#'>Promotion</a></li>
                    <li className='my-5'><a className='hover:text-yellow duration-300 flex-shrink-0 truncate text-xl font-sans' href='#'>Order</a></li>
                    <li className='my-5'><a className='hover:text-yellow duration-300 flex-shrink-0 truncate text-xl font-sans' href='#'>Menu</a></li>
                    <li className='my-5'><a className='hover:text-yellow duration-300 flex-shrink-0 truncate text-xl font-sans' href='#'>Contact US </a></li>
                </ul>            
   
        </nav>
    </nav>
    
    </> );
}
 
export default Header;