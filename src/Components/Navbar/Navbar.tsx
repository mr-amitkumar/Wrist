import { IoCart } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegUser, FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { SiMockserviceworker } from "react-icons/si"; // ✅ Make sure this is installed
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const DropdownLinks = [
  { id: 1, logo: <FaUser />, name: "Profile", link: "/" },
  { id: 2, logo: <IoMdSettings />, name: "Settings", link: "/" },
  { id: 3, logo: <MdFavorite />, name: "Favorites", link: "/" },
  { id: 4, logo: <SiMockserviceworker />, name: "Services", link: "/" },
  { id: 5, logo: <CiLogout />, name: "Logout", link: "/" },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(!menu);
  const CloseToggle = () => setMenu(false);

  return (
    <div className="bg-white shadow-md w-full">
      <div className="bg-gray-700 py-3 px-4">
        <div className="flex items-center justify-between text-white relative">

          <h1 className="text-xl sm:text-2xl font-semibold">Wrist World</h1>

          <nav className="hidden sm:block">
            <ul className="flex gap-6 font-semibold text-[16px]">
              <li className="hover:text-gray-400 cursor-pointer">Home</li>
              <li className="hover:text-gray-400 cursor-pointer">Get Deals</li>
              <li className="hover:text-gray-400 cursor-pointer">Trending Items</li>
              <li className="hover:text-gray-400 cursor-pointer">Gift Deals</li>
            </ul>
          </nav>

          <div className="hidden sm:flex items-center px-3 border-b-2 border-gray-500">
           <span><FaSearch /></span> 
            <input
              type="text"
              placeholder="Search here..."
              id="search"
              name="search"
              className="bg-transparent white text-white px-3 py-2 rounded-md outline-none"
            />
          </div>


          <div className="group flex items-center gap-1 text-xl cursor-pointer hover:text-gray-400">
            <IoCart className="text-2xl" />
            <span className="hidden sm:inline">Order</span>
            <MdKeyboardArrowDown className="group-hover:rotate-180 transition-transform" />
          </div>

          <div className="relative group flex items-center gap-1 text-xl font-semibold cursor-pointer hover:text-gray-400 ml-3">
            <FaRegUser />
            <span className="hidden sm:inline">Account</span>
            <MdKeyboardArrowDown className="group-hover:rotate-180 transition-transform" />
            
            <div className="absolute top-[36px] sm:top-[37px] right-0 bg-gray-700 rounded shadow-lg text-white group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-200 min-w-[160px] z-50">
              <ul className="flex flex-col p-2">
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-700 hover:text-gray-900 transition-all"
                    >
                      {data.logo}
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="sm:hidden flex flex-col gap-1 items-center justify-center cursor-pointer ml-3"
            onClick={toggleMenu}
          >
            <span
              className={`block w-6 h-[3px] bg-white rounded-md transition-all duration-300 ${
                menu ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[3px] bg-white rounded-md transition-all duration-300 ${
                menu ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[3px] bg-white rounded-md transition-all duration-300 ${
                menu ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </div>
        </div>

        {menu && (
          <ul className="sm:hidden bg-gray-700 w-full mt-2 py-2 px-4 flex flex-col gap-3 text-white text-lg font-medium">
            <li 
            onClick={CloseToggle}
            className="hover:text-gray-400">Home</li>
            <li 
            onClick={CloseToggle}
            className="hover:text-gray-400">Great Deals</li>
            <li 
            onClick={CloseToggle}
            className="hover:text-gray-400">Trending Items</li>
            <li 
            onClick={CloseToggle}
            className="hover:text-gray-400">Gift Deals</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
