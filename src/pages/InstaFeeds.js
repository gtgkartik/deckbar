import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Feed from "./Feed";

const InstaFeeds = ({ token, ...props }) => {
  const [feeds, setFeedsData] = useState([]);
  //use useRef to store the latest value of the prop without firing the effect
  const tokenProp = useRef(token);
  tokenProp.current = token;
  useEffect(() => {
    // this is to avoid memory leaks
    const abortController = new AbortController();

    async function fetchInstagramPost() {
      try {
        axios
          .get(
            `https://v1.nocodeapi.com/gtgkartik/instagram/ModAOqKHQVNQwshl`
          )
          .then((resp) => {
            setFeedsData(resp.data.data);
          });
      } catch (err) {
        console.log("error", err);
      }
    }

    // manually call the fecth function
    fetchInstagramPost();

    return () => {
      // cancel pending fetch request on component unmount
      abortController.abort();
    };
  }, [props.limit]);

  return (
    <div class=" grid md:grid-cols-4 sm:grid-cols-1 ls:grid-cols-3 gap-2 mx-auto mt-[100px] md:px-20 ls:px-15 sm:px-10">
      {feeds.map((feed) => (
        
        
          <Feed key={feed.id} feed={feed} />
        
      ))}
    </div>
  );
};

export default InstaFeeds;
