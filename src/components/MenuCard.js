import { useNavigate } from "react-router-dom";
import "./MenuCard.css";
import Modal from "../components/Modal";
import { useState } from "react";

const MenuCard = (props) => {
  const navigate = useNavigate();

  const handleOnClose = () => setShowMyModal(false)
  const [showModal, setShowMyModal] = useState(false);

  // const handleClick = () => {
  //   console.log('clicked')
  //   return (
  //     <Modal/>
  //   ) // Replace '/another-path' with the desired path
  // };

  return (
    <>
      <Modal onClose= {handleOnClose} visible={showModal} />
      <div
        className="relative overflow-hidden rounded-lg shadow-lg bg-gradient-to-tl cursor-pointer from-gray-700 to-gray-700"
        onClick={() => setShowMyModal(true)}
      >
        <img
          className="object-cover absolute w-full h-48 mix-blend-overlay"
          src={props.url}
          alt="Flower and sky"
        />

        <div className="flex justify-center items-center h-48 z-10">
          <a href="#" className="text-xl texttitle underline text-white">
            {props.title}
          </a>
        </div>
      </div>
    </>
  );
};

export default MenuCard;
