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
import image10 from '../Images/originalimages/10.jpg'

import { motion } from "framer-motion"

const Promotion = () => {
  return (
    <>
    <motion.div initial={{opacity:0}} animate={{opacity:1}}>
      <Header promotion="text-yellow" />
      <HeaderImage
        title="Promotion"
        imageurl="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
      />
    {/* Gallery  */}
    <div class=" grid md:grid-cols-4 sm:grid-cols-1 ls:grid-cols-3 gap-5 mx-auto mt-[100px] md:px-20 ls:px-15 sm:px-10">
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
        
 
      </div>

      </motion.div>
    </>
  );
};

export default Promotion;
