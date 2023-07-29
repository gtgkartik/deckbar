import React from "react";
import { Link } from 'react-router-dom';

const Feed = (props) => {
    
    const redirectToWebsite = () => {
        window.location.href = 'https://www.instagram.com/deckbarsg/';
      };
  const { id, caption, media_type, media_url } = props.feed;
  let post;

  switch (media_type) {
    case "VIDEO":
      break;
    case "CAROUSEL_ALBUM":
      post = (
        <>
        <Link onClick={redirectToWebsite}>
        
          <div className="max-w-sm hover:cursor-pointer rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
              <img
                width="100%"
                height="auto"
                id={id}
                src={media_url}
                alt={caption}
                
              />
              {/* <div class="font-bold text-xl mb-2">   {caption}</div> */}

            </div>
          </div>
          </Link>
        </>
      );
      break;
    default:
      post = (
        <>
        <Link onClick={redirectToWebsite}>
        
          <div class="max-w-sm hover:cursor-pointer rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
              <img
                width="100%"
                height="auto"
                id={id}
                src={media_url}
                alt={caption}
                
              />
              {/* <div class="font-bold text-xl mb-2">   {caption}</div> */}
              <p class="text-gray-700 text-base">
           
              </p>
            </div>
          </div>
          </Link>
        </>
      );
  }

  return <React.Fragment>{post}</React.Fragment>;
};

export default Feed;
