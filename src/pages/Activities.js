import InstaFeeds from './InstaFeeds.js'
import Header from "../components/Header";
import HeaderImage from "../components/HeaderImage";
import { motion } from "framer-motion"
const Test = () => {
  return (
    <>
    <motion.div initial={{opacity:0}} animate={{opacity:1}}>
        <Header activities="text-yellow" />
      <HeaderImage
        title="Activities"
        imageurl="https://images.unsplash.com/photo-1612325508365-22caba7bb69e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      />
        <InstaFeeds token={process.env.REACT_APP_INS_TOKEN} limit={12} />
        </motion.div>
    </>
  );
};

export default Test;
