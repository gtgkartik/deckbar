import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Gallery2 = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-2/12 flex items-center justify-center">
          <a href="#">
            <IoIosArrowBack
              size={40}
              className="shadow-lg rounded-2xl text-gray-600"
            />
          </a>
        </div>
        <div className="w-[10/12] overflow-hidden">
          <ul className="flex w-full justify-center ">
            <li className=" ">
              <img className="w-[350px] h-[300px] object-cover" src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </li>
            <li className=" ">
              <img className="w-[350px] h-[300px] object-cover" src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </li>
            <li className=" ">
              <img className="w-[350px] h-[300px] object-cover" src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </li>
            <li className=" ">
              <img className="w-[350px] h-[300px] object-cover" src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </li>            <li className=" ">
              <img className="w-[350px] h-[300px] object-cover" src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </li>            <li className=" ">
              <img className="w-[350px] h-[300px] object-cover" src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </li>
            <li className=" ">
              <img className="w-[350px] h-[300px] object-cover" src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </li>
            <li className=" ">
              <img className="w-[350px] h-[300px] object-cover" src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </li>
            <li className=" ">
              <img className="w-[350px] h-[300px] object-cover" src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </li>
          </ul>
        </div>
        <div className="w-2/12 flex items-center justify-center">
          <a href="#">
            <IoIosArrowForward
              size={40}
              className="shadow-lg rounded-2xl text-gray-600"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Gallery2;
