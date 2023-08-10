import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CustomerReview = () => {

    fetch("'https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJS6au6ssZ2jERyc-n--OV4j4&key=AIzaSyAaiF8LlG6Bb9nIr3hL1wMHR9_PY87WNVs'",{
      method: "GET",
      headers: {
        "access-control-allow-origin" : "*",
        // 'Content-Type' :
      }})
    .then(res => {
      if (res.ok){
        console.log("Success"); 
      }  else {
        console.log("fail")
      }
    })
    .then(data => console.log(data))
    .catch(err => console.log("error"))

  return (
    <>
      <section className="mt-[90px] py-[30px]  bg-[#eeeeee] dark:text-gray-100">
        <div className=" flex flex-col items-center  mb-8 md:p-10 md:px-12">
          <h1 className=" sm:text-2xl md:text-3xl text-black font-libre font-semibold leading-none text-center">
            What our customers are saying about us
          </h1>
        </div>
        <div className=" flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
          {reviews.map((review) => {
            return (
              <>
                <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg ">
                  <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-white ">
                    <p className="relative px-6 py-1 text-lg italic text-center text-black">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="w-8 h-8 text-yellow"
                      >
                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                      </svg>
                      {review.text}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="absolute right-0 w-8 h-8 text-yellow"
                      >
                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                      </svg>
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-yellowlight dark:text-gray-900">
                    <img
                      src={review.profile_photo_url}
                      alt=""
                      className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700"
                    />
                    <p className="text-xl font-semibold leading-tight">
                      {review.author_name}
                    </p>
                    <p className="text-sm uppercase"></p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default CustomerReview;





const reviews = [
  {
    author_name: "cai me",
    author_url:
      "https://www.google.com/maps/contrib/110132988779603246610/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/AD_cMMRcixawPyNWvr6d7GHAX2iJwAfRpdjVEXCX51XBww=s128-c0x00000000-cc-rp-mo-ba4",
    rating: 5,
    relative_time_description: "3 years ago",
    text: "Just somewhere northwestern part from downtown area, you'll see this cozy place right beside the main entance of CT Hub.\n\nIf you want to relax, chill, chitchat and catch up with friends, get soothe with a glass or bottle of wine or beer while listening to heart-warming acoustic tunes, this is the place you wouldn't want to miss.\n\n#HappyPeople\n#HappyPlace\n#HappyHut",
    time: 1560676928,
    translated: false,
  },
  {
    author_name: "Sabrina Palileo",
    author_url:
      "https://www.google.com/maps/contrib/111467047741638441836/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/AD_cMMR2zJuUBmtNwWkGTlxJaf2aMDEh4VYQbqPH7uWKpg=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "a year ago",
    text: "The food is great and the staff are very friendly and accommodating. The ambience of the bar itself is very chill so it\u2019s a nice place to hang out. The location is also not in a very busy area  that I can enjoy a quiet drink. They are also having live bands these days so it\u2019s really a great bar to grab a drink.",
    time: 1652863333,
    translated: false,
  },
  {
    author_name: "Nil Y (NPC)",
    author_url:
      "https://www.google.com/maps/contrib/116726322732189925035/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/AD_cMMSg95W-3fy7Bc-ysS0RZ_vXaopRF3FJmtTrXptBzg=s128-c0x00000000-cc-rp-mo-ba4",
    rating: 4,
    relative_time_description: "6 months ago",
    text: "Decent price for drinks. It had great live music. Pretty cool place. Ambience is quite nice and it's a nice calm place to chill. The drinks are cheap too. However the food is just okay. The food is great and the staff are very friendly and accommodating. The ambience of the bar itself is very chill so it\u2019s a nice place to hang out.",
    time: 1668174049,
    translated: false,
  },
  {
    author_name: "Saksham Sood",
    author_url:
      "https://www.google.com/maps/contrib/110533568603273725300/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/AD_cMMRn7ReeYyWMd9NaaCv3WHMNJGsgMODLWEDBIcfn6rg=s128-c0x00000000-cc-rp-mo-ba3",
    rating: 3,
    relative_time_description: "4 years ago",
    text: "Ambience is quite nice and it's a nice calm place to chill. The drinks are cheap too. However the food is just okay.",
    time: 1551983355,
    translated: false,
  },
  {
    author_name: "Eng Tiong Tan",
    author_url:
      "https://www.google.com/maps/contrib/107468512968000700440/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a/AAcHTtceOMeMfE5Yr0FLNGxF8r37yoLTAcY4evRYUHKH=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "a month ago",
    text: "My son says the fish and chips is the best he ever had!!!The food is great and the staff are very friendly and accommodating.",
    time: 1681563832,
    translated: false,
  },
];
