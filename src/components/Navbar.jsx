import { NavItems } from "./NavItems";

export const Navbar = ({ show, setShow, setSearch }) => {
  const sideBarHandler = () => {
    const firstBar = document.querySelector('.bars :nth-child(1)').classList;
    const secondBar = document.querySelector('.bars :nth-child(2)').classList;
    const thirdBar = document.querySelector('.bars :nth-child(3)').classList;
    const sideBar = document.querySelector('#sideBar').classList;
    const inputs = document.querySelectorAll('input');

    firstBar.toggle('-rotate-45');
    firstBar.toggle('translate-y-[5px]');
    secondBar.toggle('hidden');
    thirdBar.toggle('rotate-45');
    thirdBar.toggle('-translate-y-[5px]');
    sideBar.toggle('-translate-x-full')

    inputs.forEach(item => item.value = '');
  };

  return (
    <nav className="fixed z-50 bg-gray-800 w-full lg:flex lg:items-center lg:px-4 lg:py-7 lg:rounded-b-3xl">
      <div>
        <div className="flex items-center justify-between w-full px-4 py-8 lg:p-0 bg-gray-800 fixed lg:relative z-40">
          <h1 className="text-3xl font-semibold text-nowrap">Shoes Shop</h1>
          <div className="bars flex lg:hidden flex-col gap-y-1.5 cursor-pointer *:w-8 *:h-1 *:bg-white *:rounded-md *:duration-300" onClick={sideBarHandler}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <NavItems show={show} setShow={setShow} setSearch={setSearch} sideBarHandler={sideBarHandler}/>
    </nav>
  );
};