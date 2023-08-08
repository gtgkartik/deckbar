import React, { useEffect, useState } from 'react';
import axios from 'axios';


const CustomerReview = () => {
const [reviews, setReviews] = useState([]);

useEffect(() => {
  // Fetch reviews data from the backend API
  axios
    .get('https://j46mcje9w1.execute-api.ap-south-1.amazonaws.com/dev/api/reviews', {
      headers: {
        'x-api-key': 'AIzaSyAaiF8LlG6Bb9nIr3hL1wMHR9_PY87WNVs' // Replace with your actual API key
      }
    })
    .then((response) => {
      setReviews(response.data);
    })
    .catch((error) => {
      console.error('Error fetching reviews:', error);
    });
}, []);
// console.log(reviews)
    
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
