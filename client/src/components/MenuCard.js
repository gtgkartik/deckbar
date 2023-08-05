import React, { useState } from "react";
import "./MenuCard.css";
import Modal from "../components/Modal";
import Mains from "../Images/mains.png";
import SoupsAndSalads from "../Images/salads.png";
import Appetizers from "../Images/appetizers.png";
import Pastas from "../Images/pastas.png";
import Sandwiches from "../Images/sandwiches.png";
import FingerFoods from "../Images/fingerfoods.png";
import Pizzas from "../Images/pizzas.png";
import Desserts from "../Images/desserts.png";
import Beverages from "../Images/beverages.png";
import Beers from "../Images/beers.png";
import HouseWines from "../Images/beers.png";
import Housewinespdf from "../Images/housewinespdf.jpg";
import HotDrinks from "../Images/hotdrinks.png";
import Cocktails from "../Images/cocktails.png";
import Mocktails from "../Images/mocktails.png";

const MenuCard = ({ title, url }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);
  const [showModal7, setShowModal7] = useState(false);
  const [showModal8, setShowModal8] = useState(false);
  const [showModal9, setShowModal9] = useState(false);
  const [showModal10, setShowModal10] = useState(false);
  const [showModal11, setShowModal11] = useState(false);
  const [showModal12, setShowModal12] = useState(false);
  const [showModal13, setShowModal13] = useState(false);
  const [showModal14, setShowModal14] = useState(false);

  return (
    <>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className="max-h-screen overflow-y-auto">
          <img src={Mains} />
        </div>
      </Modal>
      <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}>
        <div className="max-h-screen overflow-y-auto">
          <img src={SoupsAndSalads} />
        </div>
      </Modal>
      <Modal isVisible={showModal3} onClose={() => setShowModal3(false)}>
        <div className="max-h-screen overflow-y-auto">
          <img src={Appetizers} className="h-[780px]" />
        </div>
      </Modal>
      <Modal isVisible={showModal4} onClose={() => setShowModal4(false)}>
        <div className="max-h-screen overflow-y-auto">
          <img src={Pastas} className="h-[600px]" />
        </div>
      </Modal>
      <Modal isVisible={showModal5} onClose={() => setShowModal5(false)}>
        <div className="max-h-screen overflow-y-auto">
          <img src={Sandwiches} className="h-[560px]" />
        </div>
      </Modal>
      <Modal isVisible={showModal6} onClose={() => setShowModal6(false)}>
        <div className="max-h-screen overflow-y-auto">
          <img src={FingerFoods} className="h-[650px]" />
        </div>
      </Modal>
      <Modal isVisible={showModal7} onClose={() => setShowModal7(false)}>
        <div className="max-h-screen overflow-y-auto">
          <img src={Pizzas} className="h-[650px]" />
        </div>
      </Modal>
      <Modal isVisible={showModal8} onClose={() => setShowModal8(false)}>
        <div className="max-h-screen overflow-y-auto">
          <img src={Desserts} className="h-[400px]" />
        </div>
      </Modal>
      <Modal isVisible={showModal9} onClose={() => setShowModal9(false)}>
        <div className="max-h-screen overflow-y-auto">
          <img src={Beverages} className="h-[460px]" />
        </div>
      </Modal>
      <Modal isVisible={showModal10} onClose={() => setShowModal10(false)}>
        <div className="max-h-screen overflow-y-auto">
          <img src={Beers} className="h-[780px]" />
        </div>
      </Modal>
      <Modal isVisible={showModal11} onClose={() => setShowModal11(false)}>
        <div className="max-h-screen overflow-y-auto">
          <img src={Housewinespdf} className="h-[780px]" />
        </div>
      </Modal>
      <Modal isVisible={showModal12} onClose={() => setShowModal12(false)}>
        <div className="max-h-screen overflow-y-auto">
          <img src={HotDrinks} className="h-[520px]" />
        </div>
      </Modal>
      <Modal isVisible={showModal13} onClose={() => setShowModal13(false)}>
        <div className="max-h-screen overflow-y-auto">
          <img src={Cocktails} className="h-[780px]" />
        </div>
      </Modal>
      <Modal isVisible={showModal14} onClose={() => setShowModal14(false)}>
        <div className="max-h-screen overflow-y-auto">
          <img src={Mocktails} className="h-[450px]" />
        </div>
      </Modal>

      {/* Mains  */}
      <div className="menucard-container">
        <div
          className="relative overflow-hidden rounded-lg shadow-lg bg-gradient-to-tl cursor-pointer from-gray-700 to-gray-700"
          onClick={() => setShowModal(true)}
        >
          <img
            className="object-cover absolute w-full h-48 mix-blend-overlay"
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Flower and sky"
          />

          <div className="flex justify-center items-center h-48 z-10">
            <a href="#" className="text-xl texttitle underline text-white">
              Mains
            </a>
          </div>
        </div>
      </div>
      {/* End of Mains  */}

      {/* Soups and salads  */}
      <div className="menucard-container">
        <div
          className="relative overflow-hidden rounded-lg shadow-lg bg-gradient-to-tl cursor-pointer from-gray-700 to-gray-700"
          onClick={() => setShowModal2(true)}
        >
          <img
            className="object-cover absolute w-full h-48 mix-blend-overlay"
            src="https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
            alt="Flower and sky"
          />

          <div className="flex justify-center items-center h-48 z-10">
            <a href="#" className="text-xl texttitle underline text-white">
              Soups and Salads
            </a>
          </div>
        </div>
      </div>
      {/* End of soups and salads  */}

      {/* Appetizers  */}
      <div className="menucard-container">
        <div
          className="relative overflow-hidden rounded-lg shadow-lg bg-gradient-to-tl cursor-pointer from-gray-700 to-gray-700"
          onClick={() => setShowModal3(true)}
        >
          <img
            className="object-cover absolute w-full h-48 mix-blend-overlay"
            src="https://images.unsplash.com/photo-1607098665874-fd193397547b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Flower and sky"
          />

          <div className="flex justify-center items-center h-48 z-10">
            <a href="#" className="text-xl texttitle underline text-white">
              Appetizers
            </a>
          </div>
        </div>
      </div>
      {/* End of appetizers  */}

      {/* Start of pastas  */}
      <div className="menucard-container">
        <div
          className="relative overflow-hidden rounded-lg shadow-lg bg-gradient-to-tl cursor-pointer from-gray-700 to-gray-700"
          onClick={() => setShowModal4(true)}
        >
          <img
            className="object-cover absolute w-full h-48 mix-blend-overlay"
            src="https://images.unsplash.com/photo-1597393353415-b3730f3719fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Flower and sky"
          />

          <div className="flex justify-center items-center h-48 z-10">
            <a href="#" className="text-xl texttitle underline text-white">
              Pastas
            </a>
          </div>
        </div>
      </div>
      {/* end of pastas  */}

      {/* Sandwiches  */}
      <div className="menucard-container">
        <div
          className="relative overflow-hidden rounded-lg shadow-lg bg-gradient-to-tl cursor-pointer from-gray-700 to-gray-700"
          onClick={() => setShowModal5(true)}
        >
          <img
            className="object-cover absolute w-full h-48 mix-blend-overlay"
            src="https://images.unsplash.com/photo-1628191010210-a59de33e5941?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Flower and sky"
          />

          <div className="flex justify-center items-center h-48 z-10">
            <a href="#" className="text-xl texttitle underline text-white">
              Sandwiches
            </a>
          </div>
        </div>
      </div>
      {/* End of sandwiches  */}

      {/* Finger Foods  */}
      <div className="menucard-container">
        <div
          className="relative overflow-hidden rounded-lg shadow-lg bg-gradient-to-tl cursor-pointer from-gray-700 to-gray-700"
          onClick={() => setShowModal6(true)}
        >
          <img
            className="object-cover absolute w-full h-48 mix-blend-overlay"
            src="https://images.unsplash.com/photo-1603573561692-d36965bd5096?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1159&q=80"
            alt="Flower and sky"
          />

          <div className="flex justify-center items-center h-48 z-10">
            <a href="#" className="text-xl texttitle underline text-white">
              Finger Foods
            </a>
          </div>
        </div>
      </div>
      {/* End of finger foods  */}

      {/* Pizzas */}
      <div className="menucard-container">
        <div
          className="relative overflow-hidden rounded-lg shadow-lg bg-gradient-to-tl cursor-pointer from-gray-700 to-gray-700"
          onClick={() => setShowModal7(true)}
        >
          <img
            className="object-cover absolute w-full h-48 mix-blend-overlay"
            src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Flower and sky"
          />

          <div className="flex justify-center items-center h-48 z-10">
            <a href="#" className="text-xl texttitle underline text-white">
              Pizzas
            </a>
          </div>
        </div>
      </div>
      {/* end of pastas  */}

      {/* Desserts  */}
      <div className="menucard-container">
        <div
          className="relative overflow-hidden rounded-lg shadow-lg bg-gradient-to-tl cursor-pointer from-gray-700 to-gray-700"
          onClick={() => setShowModal8(true)}
        >
          <img
            className="object-cover absolute w-full h-48 mix-blend-overlay"
            src="https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Flower and sky"
          />

          <div className="flex justify-center items-center h-48 z-10">
            <a href="#" className="text-xl texttitle underline text-white">
              Desserts
            </a>
          </div>
        </div>
      </div>
      {/* end of desserts  */}

      {/* Beverages  */}
      <div className="menucard-container">
        <div
          className="relative overflow-hidden rounded-lg shadow-lg bg-gradient-to-tl cursor-pointer from-gray-700 to-gray-700"
          onClick={() => setShowModal9(true)}
        >
          <img
            className="object-cover absolute w-full h-48 mix-blend-overlay"
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Flower and sky"
          />

          <div className="flex justify-center items-center h-48 z-10">
            <a href="#" className="text-xl texttitle underline text-white">
              Beverages
            </a>
          </div>
        </div>
      </div>
      {/* end of beverages  */}

      {/* Beers  */}
      <div className="menucard-container">
        <div
          className="relative overflow-hidden rounded-lg shadow-lg bg-gradient-to-tl cursor-pointer from-gray-700 to-gray-700"
          onClick={() => setShowModal10(true)}
        >
          <img
            className="object-cover absolute w-full h-48 mix-blend-overlay"
            src="https://images.unsplash.com/photo-1572916108357-39ee1f59e007?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Flower and sky"
          />

          <div className="flex justify-center items-center h-48 z-10">
            <a href="#" className="text-xl texttitle underline text-white">
              Beers
            </a>
          </div>
        </div>
      </div>
      {/* end of beers  */}
      {/* House wines  */}
      <div className="menucard-container">
        <div
          className="relative overflow-hidden rounded-lg shadow-lg bg-gradient-to-tl cursor-pointer from-gray-700 to-gray-700"
          onClick={() => setShowModal11(true)}
        >
          <img
            className="object-cover absolute w-full h-48 mix-blend-overlay"
            src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Flower and sky"
          />

          <div className="flex justify-center items-center h-48 z-10">
            <a href="#" className="text-xl texttitle underline text-white">
              House of Wines
            </a>
          </div>
        </div>
      </div>
      {/* end of house wines  */}

      {/* Hot drinks  */}
      <div className="menucard-container">
        <div
          className="relative overflow-hidden rounded-lg shadow-lg bg-gradient-to-tl cursor-pointer from-gray-700 to-gray-700"
          onClick={() => setShowModal12(true)}
        >
          <img
            className="object-cover absolute w-full h-48 mix-blend-overlay"
            src="https://images.unsplash.com/photo-1598976796336-63db295ccde2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Flower and sky"
          />

          <div className="flex justify-center items-center h-48 z-10">
            <a href="#" className="text-xl texttitle underline text-white">
              Hot Drinks
            </a>
          </div>
        </div>
      </div>
      {/* end of hot drinks  */}

      {/* cocktails  */}
      <div className="menucard-container">
        <div
          className="relative overflow-hidden rounded-lg shadow-lg bg-gradient-to-tl cursor-pointer from-gray-700 to-gray-700"
          onClick={() => setShowModal13(true)}
        >
          <img
            className="object-cover absolute w-full h-48 mix-blend-overlay"
            src="https://images.unsplash.com/photo-1605270012917-bf157c5a9541?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
            alt="Flower and sky"
          />

          <div className="flex justify-center items-center h-48 z-10">
            <a href="#" className="text-xl texttitle underline text-white">
              Cocktails
            </a>
          </div>
        </div>
      </div>
      {/* end of cocktails  */}

      {/* Mocktails  */}
      <div className="menucard-container">
        <div
          className="relative overflow-hidden rounded-lg shadow-lg bg-gradient-to-tl cursor-pointer from-gray-700 to-gray-700"
          onClick={() => setShowModal14(true)}
        >
          <img
            className="object-cover absolute w-full h-48 mix-blend-overlay"
            src="https://images.unsplash.com/photo-1619604395920-a16f33192a50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
            alt="Flower and sky"
          />

          <div className="flex justify-center items-center h-48 z-10">
            <a href="#" className="text-xl texttitle underline text-white">
              Mocktails
            </a>
          </div>
        </div>
      </div>
      {/* end of mocktails  */}
    </>
  );
};

export default MenuCard;
