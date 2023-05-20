import BottomNavbar from "../components/BottomNavbar";
import CustomerReview from "../components/CustomerReview";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Socials from '../components/Socials';
import GallerySocials from '../components/GallerySocials';
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'

const Home = () => {
  return (
    <>
      <div className="w-screen h-auto flex flex-col">
        <Header home="text-yellow"/>
        <Slider/>
        <AboutUs />
        <BottomNavbar/>
        <Gallery/>
        <CustomerReview/>
        <div className="flex flex-col mt-[100px]">
          <Socials />
          <GallerySocials />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
