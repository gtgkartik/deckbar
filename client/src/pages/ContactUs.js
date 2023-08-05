import EmailForm from "../components/EmailForm";
import Header from "../components/Header";
import HeaderImage from "../components/HeaderImage";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import image from '../Images/homeimages/23.jpg'

const ContactUs = () => {
  return (
    <>
      <motion.div initial={{opacity:0}} animate={{opacity:1}}>
        <Header contactus="text-yellow" />
        <HeaderImage
          title="Contact Us"
          imageurl={image}
        />
        <EmailForm />
        <Footer />
      </motion.div>
    </>
  );
};

export default ContactUs;
