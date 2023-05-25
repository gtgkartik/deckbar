import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderImage from "../components/HeaderImage";
import MenuCard from "../components/MenuCard";
import Modal from "../components/Modal";
import { useState } from "react";
import mains from "../Images/mains.png";

const records = [
  {
    id: 1,
    title: "Mains",
    url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    path: "/menu/mains",
    modalimageurl:
      "https://images.unsplash.com/photo-1536236397240-9b229a37a286?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 2,
    title: "Soups & Salads",
    url: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    path: "/menu/soupsandsalads",
    modalimageurl:
      "https://images.unsplash.com/photo-1536236397240-9b229a37a286?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 3,
    title: "Appetizers",
    url: "https://images.unsplash.com/photo-1607098665874-fd193397547b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    path: "/menu/appetizers",
    modalimageurl:
      "https://images.unsplash.com/photo-1536236397240-9b229a37a286?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 4,
    title: "Pastas",
    url: "https://images.unsplash.com/photo-1597393353415-b3730f3719fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    path: "/menu/pastas",
    modalimageurl:
      "https://images.unsplash.com/photo-1536236397240-9b229a37a286?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },

  {
    id: 5,
    title: "Sandwiches",
    url: "https://images.unsplash.com/photo-1628191010210-a59de33e5941?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    path: "/menu/sandwiches",
    modalimageurl:
      "https://images.unsplash.com/photo-1536236397240-9b229a37a286?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 6,
    title: "Finger Foods",
    url: "https://images.unsplash.com/photo-1603573561692-d36965bd5096?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1159&q=80",
    path: "/menu/fingerfoods",
    modalimageurl:
      "https://images.unsplash.com/photo-1536236397240-9b229a37a286?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 7,
    title: "Pizzas",
    url: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    path: "/menu/pizzas",
    modalimageurl:
      "https://images.unsplash.com/photo-1536236397240-9b229a37a286?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 8,
    title: "Desserts",
    url: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    path: "/menu/desserts",
    modalimageurl:
      "https://images.unsplash.com/photo-1536236397240-9b229a37a286?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 9,
    title: "Beverages",
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    path: "/menu/beverages",
    modalimageurl:
      "https://images.unsplash.com/photo-1536236397240-9b229a37a286?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 10,
    title: "Beers",
    url: "https://images.unsplash.com/photo-1572916108357-39ee1f59e007?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    path: "/menu/beers",
    modalimageurl:
      "https://images.unsplash.com/photo-1536236397240-9b229a37a286?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 11,
    title: "House Wines",
    url: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    path: "/menu/housewines",
    modalimageurl:
      "https://images.unsplash.com/photo-1536236397240-9b229a37a286?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 12,
    title: "House Wines",
    url: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    path: "/menu/housewines",
    modalimageurl:
      "https://images.unsplash.com/photo-1536236397240-9b229a37a286?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 13,
    title: "Hot Drinks",
    url: "https://images.unsplash.com/photo-1598976796336-63db295ccde2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    path: "/menu/hotdrinks",
    modalimageurl:
      "https://images.unsplash.com/photo-1536236397240-9b229a37a286?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 14,
    title: "Cocktails",
    url: "https://images.unsplash.com/photo-1605270012917-bf157c5a9541?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    path: "/menu/cocktails",
    modalimageurl:
      "https://images.unsplash.com/photo-1536236397240-9b229a37a286?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 15,
    title: "Mocktails",
    url: "https://images.unsplash.com/photo-1619604395920-a16f33192a50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    path: "/menu/mocktails",
    modalimageurl:
      "https://images.unsplash.com/photo-1536236397240-9b229a37a286?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
];

const Menu = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Header menu="text-yellow" />
      <HeaderImage
        title="Menu"
        imageurl="https://images.unsplash.com/photo-1573551565922-aec98de55802?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      />

      <div className="flex flex-col items-center mb-[90px] mt-[100px]">
        <h1 className="ls:text-[40px] font-semibold font-libre sm:text-[32px]">
          Menu
        </h1>
        <h1 className="ls:text-[15px] text-center texttitle sm:text-[14px] flex-wrap font-normal mt-6 font-libre overflow-hidden mx-0 px-4">
          Refer to menu and WhatsApp us at 8771 2549 to place order between 10am
          to 11pm Monday – Saturday. <br /> Menu price is subjected to 8% GST
          for Takeaways.
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 ls:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-8 w-full md:px-[150px] ls:px-[100px] sm:px-[50px] mt-6 mb-[130px]">
        {records.map((record) => {
          return (
            <>
              <MenuCard
                key={record.id}
                title={record.title}
                url={record.url}
                path={record.path}
                onClick={() => setShowModal(true)}// Update the state variable name here
              />
            </>
          );
        })}
      </div>
      {showModal && <Modal />}
      <Footer />
    </>
  );
};

export default Menu;
