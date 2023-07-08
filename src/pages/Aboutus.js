import Header from "../components/Header";
import HeaderImage from "../components/HeaderImage";
import AbouUss from "../components/AboutUs2";
import { motion } from "framer-motion"
const AboutUs = () => {
  return (
    <>
      <motion.div initial = {{opacity: 0}} animate = {{opacity:1}} >
        <Header aboutus="text-yellow" />
        <HeaderImage
          title="About Us"
          imageurl="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        />
        <AbouUss />
      </motion.div>
    </>
  );
};

export default AboutUs;
