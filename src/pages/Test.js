import MenuCard from "../components/MenuCard";
import InstaFeeds from './InstaFeeds.js'

const Test = () => {
  return (
    <>
           <InstaFeeds token={process.env.REACT_APP_INS_TOKEN} limit={12} />
    </>
  );
};

export default Test;
