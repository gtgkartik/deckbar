import BottomNavbar from "../components/BottomNavbar";
import CustomerReview from "../components/CustomerReview";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Socials from "../components/Socials";
import GallerySocials from "../components/GallerySocials";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import Map from "../components/Map";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { motion } from "framer-motion"


const Home = () => {
  return (
    <>
      <motion.div className="w-screen h-auto flex flex-col" initial = {{opacity: 0,backgroundColor:"yellow", y:-300}} animate = {{opacity:1, backgroundColor:"white",y:0}} >
        <Header home="text-yellow" />
        <Slider />
        <AboutUs />
        {/* <BottomNavbar /> */}
        <Gallery />
        <CustomerReview />
        <div className="flex flex-col mt-[100px]">
          <Socials />
          <GallerySocials />
        </div>
        <div className="flex flex-col mt-[100px]">

          <div className="flex flex-row flex-wrap justify-center px-10 mt-[80px] my-[100px] ">
            {/* Map  */}
            <div className="w-[500px] md:px-0 ls:px-5 sm:px-0">
              <Map />
            </div>
            {/* end of map  */}

            {/* Text Section  */}
            <div className="px-5 md:pt-0 sm:pt-10">
              <h1 className="text-md font-semibold font-libre">
                Opening Hours
              </h1>
              <p className="font-libre py-4">
                11:00am to 12:00am (Sunday & <br /> Public Holiday Close)
                <br />
                Look out for announcement on our <br /> Facebook
              </p>
            </div>
            {/* End Of Text  */}

            {/* Text Section  */}
            <div className="px-5 sm:pt-10 md:pt-0">
              <h1 className="text-md font-semibold font-libre">
                For Any Enquiry /
                <br />
                Feedback, Please Contact
              </h1>
              <div className="flex flex-row mt-3 font-libre space-x-2 items-center">
                <MdEmail size={20} />
                <p>happyhut.sg@gmail.com</p>
              </div>

              <h1 className="font-libre text-md font-semibold pt-10">
                If urgent, please call us
              </h1>

              <div className="flex flex-row mt-3 font-libre space-x-2 items-center">
                <BsFillTelephoneFill size={20} />
                <p>
                  +65 98873377
                </p>
              </div>
            </div>
            {/* End Of Text  */}
          </div>
          <Footer />
        </div>
      </motion.div>
    </>
  );
};

export default Home;
