import { Link } from "react-router-dom";
import Footer from "./Footer";
import image1 from '../Images/about/image.jpg'
import image2 from '../Images/about/image2.jpg'


const AboutUs2 = () => {
  return (
    <>
      <div className="flex md:py-[] sm:py-[100px] md:flex-row  sm:flex-col">
        {/* Left HandSide  */}
        <div className=" md:w-[60%] sm:w-[100%]">
          <div className="font-libre flex flex-col md:px-12 md:ml-20 sm:mx-10 justify-center">
            <div className="text-3xl  font-semibold">About Us</div>
            <div className="py-5 mt-4 leading-7">
              Welcome to DeckBar, where we blend the elements of relaxation,
              entertainment, and exceptional service to create a truly memorable
              experience. Located at CTHUB, DeckBar is a vibrant and dynamic
              destination that caters to groups and individuals seeking a unique
              social atmosphere with amazing conversations in Alfresco model.
            </div>
            <div className="py-5 leading-7">
              Welcome to our Deck Bar, where delightful drinks and delectable
              eats meet in a harmonious blend of flavors and ambiance. Nestled
              in a vibrant and picturesque setting, our bar offers an enchanting
              outdoor experience, allowing you to savor the finest culinary
              creations while enjoying the beauty of nature.
            </div>
            <div className="py-5 leading-7">
              At our Deck Bar, we believe that great food and drinks are meant
              to be savored in the open air, where the gentle breeze and warm
              sunshine enhance the dining experience. Whether you're seeking a
              refreshing cocktail, a perfectly crafted brew, or a tantalizing
              culinary adventure, we have something to satisfy every palate.
            </div>
            <div className="py-5 leading-7">
              Complementing our impressive beverage selection is our carefully
              curated menu, designed to delight and satisfy. Our culinary team
              takes inspiration from global flavors, infusing traditional dishes
              with a modern twist. Whether you're craving mouthwatering tapas,
              artisanal pizzas, or succulent grilled specialties, our menu
              offers a diverse range of options to please every palate.
            </div>
            <div className="py-5 leading-7">
              As you unwind and enjoy your meal, immerse yourself in the lively
              atmosphere of our Deck Bar. Surrounded by lush greenery, twinkling
              lights, and the sounds of laughter and conversation, you'll feel
              transported to a world of relaxation and enjoyment. Our friendly
              and attentive staff is always ready to ensure your experience is
              nothing short of exceptional, providing warm hospitality and
              personalized service.
            </div>
            <div className="py-5 leading-7">
              Whether you're meeting friends for happy hour, enjoying a romantic
              evening under the stars, or celebrating a special occasion, our
              Deck Bar is the perfect destination. Join us for a memorable
              dining experience where the flavors of exquisite drinks and
              mouthwatering eats are elevated by the enchanting ambiance of the
              great outdoors.
            </div>
            <div className="py-5 leading-7">
              Come and discover the true essence of alfresco dining at our bar—a
              place where flavors mingle, conversations flow, and unforgettable
              memories are made. We look forward to welcoming you to our Deck
              Bar, where every sip and every bite is a celebration of the good
              life.
            </div>
            <div className="py-10 leading-7">
              For reservation of tables, WhatsApp us at +65 98873377
            </div>
            <div className="">
        <Link to="/menu">
        <button className="rounded-sm bg-black hover:bg-yellow text-white px-7 py-2">
                Menu
              </button>
        </Link>
            </div>
          </div>
        </div>

        {/* Right HandSide  */}
        <div className="sm:pt-10 md:w-[40%] flex justify-center md:relative md:right-12 sm:w-[100%]">
          <div className="flex flex-col">
            <div className="mb-[50px]">
              <img
                className="w-[400px] rounded-xl shadow-xl"
                src={image1}
              />
            </div>
            <div>
              <img
                className="w-[400px] rounded-xl shadow-xl"
                src={image2}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default AboutUs2;
