import { FaHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { ColorList } from "./ColorList";

export const Card = ({ dataProducts, favoriteHandler, children }) => {
  return (
    <>
      {dataProducts.length == 0 && children}
      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:w-4/5 mx-auto">
        {dataProducts.map((item) => (
          <li
            key={item.id}
            className="border border-blue-700 rounded-lg bg-sky-950 text-white p-4 pt-0 relative"
          >
            <div
              score={item.score}
              className="after:content-[attr(score)] absolute top-4 left-4 flex items-center text-lg"
            >
              <FaStar className="text-yellow-400 mr-1 text-[21px]" />
            </div>
            <FaHeart
              className="absolute top-5 right-4 text-[21px] hover:text-red-600 cursor-pointer"
              onClick={() => favoriteHandler(item.id)}
            />
            <img src={item.image} alt={item.name} className="h-64 mx-auto" />
            <p className="font-bold text-2xl">{item.name}</p>
            <p className="font-bold text-xl my-1 dollor">${item.price}</p>
            <div className="flex justify-between items-center">
              <ColorList color={item.color} />
              <div className="bg-sky-800 border border-blue-500 p-2 flex justify-between items-center rounded-md cursor-pointer">
                <IoBagHandle
                  className="text-2xl mr-2"
                />
                Add to cart
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};