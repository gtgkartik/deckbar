import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
const Header = (props) => {
  const [open, setOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (open) {
      document.body.classList.add("overlay");
    } else {
      http: document.body.classList.remove("overlay");
    }
  }, [open]);

  return (
    <>
      <motion.nav >
        <div className="md:px-[120px] ls:px-[80px] sm:px-[30px] py-8 mx-auto sm:flex items-center justify-between  ">
          <div className="flex items-center">
            <a
              href="/"
              className="logo text-2xl text-yellow flex-shrink-0 truncate"
            >
              Deck Bar
            </a>
          </div>

          {/* Primary Navbar  */}
          <div className="sm:hidden ls:flex  space-x-10 px-10 relative   justify-center"> 
            <a
              className={`hover:text-yellow ${props.home} duration-150 flex-shrink-0 truncate`}
              href="/"
            >
              Home
            </a>
            <a
              className={`hover:text-yellow ${props.aboutus} duration-150 flex-shrink-0 truncate`}
              href="about-us"
            >
              About Us
            </a>
            <a
              className={`hover:text-yellow ${props.promotion} duration-150 flex-shrink-0 truncate`}
              href="promotion"
            >
              Promotion
            </a>
            {/* <a className={`hover:text-yellow ${props.order} duration-150 flex-shrink-0 truncate`} href='/order'>Order</a> */}
            <a
              className={`hover:text-yellow ${props.gallery} duration-150 flex-shrink-0 truncate`}
              href="/gallery"
            >
              Gallery
            </a>
            <a
              className={`hover:text-yellow ${props.menu} duration-150 flex-shrink-0 truncate`}
              href="/menu"
            >
              Menu
            </a>
            <a
              className={`hover:text-yellow ${props.contactus} duration-150 flex-shrink-0 truncate`}
              href="contactus"
            >
              Contact Us
            </a>
          </div>

          {/* Secondary Navbar  */}

          <div
            className="md:hidden  items-center relative "
            onClick={() => setOpen(!open)}
          >
            <a href="#">
              <GiHamburgerMenu size="20px" />
            </a>
          </div>
        </div>

        <nav
          className={`z-50 off-canvas-menu fixed h-screen top-0  w-1/2 mx-auto  sm:mx-0 bg-white md:hidden flex items-center
        px-8 ${open ? "right-0" : "hidden"} ${animationClass} `}
        >
          {/* Mobile Hamburger  */}

          <a
            className="menu-close-btn absolute top-8 left-3"
            href="#"
            onClick={() => {
              setOpen(!open);
              setAnimationClass(open ? "animate-close" : "animate-open");
            }}
          >
            <RxCross2 size="25px" />
          </a>

          <ul className="">
            <li className="my-5">
              <a
                className={`hover:text-yellow ${props.home} duration-150 flex-shrink-0 truncate`}
                href="/"
              >
                Home
              </a>
            </li>
            <li className="my-5">
              <a
                className={`hover:text-yellow ${props.aboutus} duration-150 flex-shrink-0 truncate`}
                href="about-us"
              >
                About Us
              </a>
            </li>
            <li className="my-5">
              <a
                className={`hover:text-yellow ${props.promotion} duration-150 flex-shrink-0 truncate`}
                href="promotion"
              >
                Promotion
              </a>
            </li>
            {/* <li className='my-5'><a  className={`hover:text-yellow ${props.order} duration-150 flex-shrink-0 truncate`} href='/order'>Order</a></li> */}
            <li className="my-5">
              <a
                className={`hover:text-yellow ${props.menu} duration-150 flex-shrink-0 truncate`}
                href="/menu"
              >
                Menu
              </a>
            </li>
            <li className="my-5">
              <a
                className={`hover:text-yellow ${props.contactus} duration-150 flex-shrink-0 truncate`}
                href="/contactus"
              >
                Contact US{" "}
              </a>
            </li>
            <li className="my-5">
              <a
                className={`hover:text-yellow ${props.activities} duration-150 flex-shrink-0 truncate`}
                href="/activities"
              >
                Gallery
              </a>
            </li>
          </ul>
        </nav>
      </motion.nav>
    </>
  );
};

export default Header;
