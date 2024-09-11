import { IoSearch } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { navData } from "./../navData";
import { useState } from "react";

export const NavItems = ({ show, setShow, setSearch, sideBarHandler }) => {
  const [title, setTitle] = useState('');

  const subMenuHandler = (item) => {
    item.link == 'All' ? setSearch('') : setSearch(item.link);
    sideBarHandler();
  };
  return (
    <>
      <div id="sideBar" className="fixed bottom-0 h-screen z-30 bg-gray-800 w-full p-4 pt-24 overflow-y-auto transition-transform duration-1000 -translate-x-full lg:hidden">
        {navData.map((item, index) => (
          <div key={index} className="my-6">
            <div className="flex items-center gap-x-2" onClick={() => title !== item.name ? setTitle(item.name) : setTitle('')}>
              {<item.icon className="text-[21px]" />}
              <h2>{item.name}</h2>
              {item.subMenu && (<IoIosArrowForward className={`ml-auto text-[21px] ${title == item.name ? "rotate-90" : "rotate-0"}`} />)}
            </div>
            {item.subMenu && (
              <ul className={`pl-10 *:my-3 ${title == item.name ? "block" : "hidden"}`}>
                {item.subLinks.map((item, index) => (
                  <li key={index} onClick={() => subMenuHandler(item)}>{item.link}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
        <div className="flex items-center gap-x-2 mb-6" onClick={() => setShow(!show)}>
          <FaBookmark className="text-[21px] cursor-pointer" />
          <h2>Bookmark</h2>
        </div>
        <div className="flex items-stretch bg-gray-700 rounded-full overflow-hidden">
          <div className="w-12 flex items-center justify-center cursor-pointer" onClick={sideBarHandler}>
            <IoSearch className="text-[21px]" />
          </div>
          <input type="text" className="bg-transparent w-full py-3 pr-4" placeholder="What do you want?" onChange={(e) => setSearch(e.target.value)} />
        </div>
      </div>

      <div className="hidden lg:flex lg:items-center lg:gap-x-5 lg:w-full lg:ml-4">
        {navData.map((item, index) => (
          <div key={index} className="group">
            <div className="flex items-center gap-x-2 cursor-pointer py-2">
              {<item.icon className="text-[21px]" />}
              <h2>{item.name}</h2>
              {item.subMenu && <IoIosArrowForward className="text-[21px] rotate-90 group-hover:-rotate-90"/>}
            </div>
            {item.subMenu && (
              <div className="absolute top-[4.5rem] bg-black/90 rounded-md hidden group-hover:block">
                <ul className="px-4 divide-y divide-dotted">
                  {item.subLinks.map((item, index) => (
                    <li key={index} className="py-2 pr-8">
                      <a href="#" onClick={() => item.link == 'All' ? setSearch('') : setSearch(item.link)}>{item.link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
        <div className="flex items-stretch bg-gray-700 rounded-full overflow-hidden ml-auto">
          <div className="w-12 flex items-center justify-center cursor-pointer" onClick={sideBarHandler}>
            <IoSearch className="text-[21px]" />
          </div>
          <input type="text" className="bg-transparent w-full py-3 pr-4" placeholder="What do you want?" onChange={(e) => setSearch(e.target.value)} />
        </div>
        <FaBookmark className="text-[21px] cursor-pointer" onClick={() => setShow(!show)} />
      </div>
    </>
  );
};