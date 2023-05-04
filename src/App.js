import './App.css';
import AboutUs from './components/AboutUs';
import AboutUs2 from './components/AboutUs2';
import BottomNavbar from './components/BottomNavbar';
import CustomerReview from './components/CustomerReview';
import Gallery from './components/Gallery';
import Gallery2 from './components/Gallery2';
import Header from './components/Header';
import Slider from './components/Slider';
import Socials from './components/Socials';
function App() {
  return (
    <>
    <div className='w-screen h-auto flex flex-col'>
      <Header/>
      <Slider/>
      <AboutUs/>
      <BottomNavbar/>
      <Gallery bgcolor="#eeeeee" title= "Deck Bar E-Shop" btntext="Order Now"/>
      <Gallery title= "Dine In" btntext="Browse Menu"/>
      {/* <CustomerReview/> */}
    </div>
    </>
  );
}

export default App;
