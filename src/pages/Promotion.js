import Header from "../components/Header";
import HeaderImage from "../components/HeaderImage";
import image1 from '../Images/originalimages/1.jpg'
import image2 from '../Images/originalimages/2.jpg'
import image3 from '../Images/originalimages/3.jpg'
import image4 from '../Images/originalimages/4.jpg'
import image5 from '../Images/originalimages/5.jpg'
import image6 from '../Images/originalimages/6.jpg'
import image7 from '../Images/originalimages/7.jpg'
import image8 from '../Images/originalimages/8.jpg'
import image9 from '../Images/originalimages/9.jpg'
import image10 from '../Images/promotionimages/7.jpg'
import image11 from '../Images/promotionimages/1.jpg'
import image12 from '../Images/promotionimages/2.jpg'
import image13 from '../Images/promotionimages/3.jpg'
import image14 from '../Images/promotionimages/4.jpg'
import image15 from '../Images/promotionimages/5.jpg'
import image16 from '../Images/promotionimages/6.jpg'
import image17 from '../Images/promotionimages/7.jpg'
import image18 from '../Images/promotionimages/8.jpg'
import image19 from '../Images/promotionimages/9.jpg'
import image20 from '../Images/promotionimages/10.jpg'
import image21 from '../Images/promotionimages/11.jpg'















import { motion } from "framer-motion"
import Footer from "../components/Footer";
import image from '../Images/homeimages/21.jpg'

const Promotion = () => {
  return (
    <>
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="mb-20">
      <Header promotion="text-yellow" />
      <HeaderImage
        title="Promotion"
        imageurl={image}
      />
    {/* Gallery  */}
    <div class=" grid md:grid-cols-4 sm:grid-cols-1 ls:grid-cols-3 gap-8 mx-auto mt-[100px] md:px-20 ls:px-15 sm:px-10">
        <div class="w-full rounded">
          <img
            src= {image1}
            alt="image"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div class="w-full rounded">
          <img
            src= {image2}
            alt="image"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div class="w-full  object-cover rounded">
          <img
            src= {image3}
            alt="image"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div class="w-full rounded">
          <img
            src= {image4}
            alt="image"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div class="w-full rounded">
          <img
            src= {image5}
            alt="image"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div class="w-full rounded">
          <img
            src= {image6}
            alt="image"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div class="w-full rounded">
          <img
            src= {image7}
            alt="image"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div class="w-full rounded">
          <img
            src= {image8}
            alt="image"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div class="w-full rounded">
          <img
            src= {image9}
            alt="image"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div class="w-full rounded">
          <img
            src= {image10}
            alt="image"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div class="w-full rounded">
          <img
            src= {image11}
            alt="image"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div class="w-full rounded">
          <img
            src= {image12}
            alt="image"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div class="w-full rounded">
          <img
            src= {image13}
            alt="image"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div class="w-full rounded">
          <img
            src= {image14}
            alt="image"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div class="w-full rounded">
          <img
            src= {image15}
            alt="image"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div class="w-full rounded">
          <img
            src= {image16}
            alt="image"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div class="w-full rounded">
          <img
            src= {image17}
            alt="image"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div class="w-full rounded">
          <img
            src= {image18}
            alt="image"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div class="w-full rounded">
          <img
            src= {image19}
            alt="image"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div class="w-full rounded">
          <img
            src= {image21}
            alt="image"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>

      </motion.div>
      <div className="mt-[200px]">
      <Footer/>

      </div>
    </>
  );
};

export default Promotion;
