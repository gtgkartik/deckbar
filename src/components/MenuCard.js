import { useNavigate } from "react-router-dom";
import "./MenuCard.css";

const MenuCard = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative overflow-hidden rounded-lg shadow-lg bg-gradient-to-tl cursor-pointer from-gray-700 to-gray-700">
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
