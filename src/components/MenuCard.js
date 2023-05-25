import React from "react";
import "./MenuCard.css";

const MenuCard = ({ title, url, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div className="menucard-container" onClick={handleClick}>
      <div className="relative overflow-hidden rounded-lg shadow-lg bg-gradient-to-tl cursor-pointer from-gray-700 to-gray-700">
        <img
          className="object-cover absolute w-full h-48 mix-blend-overlay"
          src={url}
          alt="Flower and sky"
        />

        <div className="flex justify-center items-center h-48 z-10">
          <a href="#" className="text-xl texttitle underline text-white">
            {title}
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
