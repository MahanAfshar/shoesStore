import { IoClose } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";

export const Favorite = ({ favoriteHandler, favorite, show, setShow }) => {
  return (
    <>
      {show && (
        <div className="min-h-full w-full bg-sky-950 fixed top-0 left-0 bottom-0 pt-14 z-50 text-white overflow-y-auto">
          <IoClose
            className="absolute top-4 right-4 bg-gray-800 border rounded-full w-6 h-6 cursor-pointer"
            onClick={() => setShow((show) => !show)}
          />
          <table className="w-full text-center">
            <thead>
              <tr>
                <td>Image</td>
                <td>name</td>
                <td>price</td>
                <td>score</td>
                <td>delete</td>
              </tr>
            </thead>
            <tbody>
              {favorite.map((item) => (
                <tr key={item.id} className="*:text-center *:w-1/5">
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-36 mx-auto"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.score}</td>
                  <td>
                    <FaTrash
                      className="cursor-pointer mx-auto"
                      onClick={() => favoriteHandler(item.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};