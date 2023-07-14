import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/Aboutus';
import Promotion from './pages/Promotion';
import Order from './pages/Order';
import Menu from './pages/Menu';
import ContactUs from './pages/ContactUs';
import Test from './pages/Test';
import Mains from './pages/menuitems/Mains';
import SoupsAndSalads from './pages/menuitems/SoupsAndSalads';
import Appetizers from './pages/menuitems/Appetizers';
import Pastas from './pages/menuitems/Pastas';
import Sandwiches from './pages/menuitems/Sandwiches';
import FingerFoods from './pages/menuitems/FingerFoods';
import Pizzas from './pages/menuitems/Pizzas';
import Desserts from './pages/menuitems/Desserts';
import Beverages from './pages/menuitems/Beverages';
import Beers from './pages/menuitems/Beers';
import HouseWines from './pages/menuitems/HouseWines';
import HotDrinks from './pages/menuitems/HotDrinks';
import Cocktails from './pages/menuitems/Cocktails';
import Mocktails from './pages/menuitems/Mocktails';
import Activities from './pages/Activities';
function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path = "/" element ={<Home/>}/>
      <Route path = "/about-us" element ={<AboutUs/>}/>
      <Route path='/promotion' element ={<Promotion/>}/>
      <Route path="/order" element = {<Order/>} />
      <Route path="/menu" element = {<Menu/>}/>
      <Route path="/contactus" element = {<ContactUs/>}/>
      <Route path="/gallery" element={<Activities/>}/>
      <Route path="/test" element = {<Test/>}/>
      <Route path= "/menu/mains" element={<Mains/>}/>
      <Route path = "menu/soupsandsalads" element = {<SoupsAndSalads/>}/>
      <Route path = "menu/appetizers" element = {<Appetizers/>}/>
      <Route path = "menu/pastas" element = {<Pastas/>}/>
      <Route path = "menu/sandwiches" element = {<Sandwiches/>}/>
      <Route path = "menu/fingerfoods" element = {<FingerFoods/>}/>
      <Route path = "menu/pizzas" element = {<Pizzas/>}/>
      <Route path = "menu/desserts" element = {<Desserts/>}/>
      <Route path = "menu/beers" element = {<Beers/>}/>
      <Route path = "menu/beverages" element = {<Beverages/>}/>
      <Route path = "menu/housewines" element = {<HouseWines/>}/>
      <Route path = "menu/hotdrinks" element = {<HotDrinks/>}/>
      <Route path = "menu/cocktails" element = {<Cocktails/>}/>
      <Route path = "menu/mocktails" element = {<Mocktails/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
