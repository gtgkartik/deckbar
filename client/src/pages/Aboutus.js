import Header from "../components/Header";
import HeaderImage from "../components/HeaderImage";
import AbouUss from "../components/AboutUs2";
import { motion } from "framer-motion"
import image from '../Images/homeimages/24.jpg'

const AboutUs = () => {
  return (
    <>
      <motion.div initial = {{opacity: 0}} animate = {{opacity:1}} >
        <Header aboutus="text-yellow" />
        <HeaderImage
          title="About Us"
          imageurl={image}
        />
        <AbouUss />
      </motion.div>
    </>
  );
};

export default AboutUs;
