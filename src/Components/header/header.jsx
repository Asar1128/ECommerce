import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "../../assets/Styles/App.css";
// Images
import profileimg from "../../assets/imgs/profile_close_2.svg";
import Logo from "../../assets/imgs/LogoMain.svg";
import cart from "../../assets/imgs/cart.svg";
import search from  "../../assets/imgs/search-icon.svg"

function Header() {
  const navigate = useNavigate();
  const location = useLocation(); 

  return (
    <>
      <div className="container">
        {/* Top Navigation */}
        <nav className="flex justify-between items-center p-4 bg-white border-b border-gray-300">
      {/* Right Side - Language & Currency */}
      <div className="nav-col_right flex gap-5 text-gray-700 text-sm">
        <Link to="#" className="drop-one cursor-pointer hover:text-black">
          EN
        </Link>
        <Link to="#" className="drop-two cursor-pointer hover:text-black">
          USD
        </Link>
      </div>

      {/* Left Side - Profile, Cart, Items, Search */}
      <div className="nav-col_left flex items-center gap-6">
        {/* Profile */}
        <Link to="/profile" className="profile flex items-center gap-2 cursor-pointer">
          <img src={profileimg} alt="profile" className="w-6 h-6" />
          <p className="uppercase text-gray-700 text-sm hover:text-black">My Profile</p>
        </Link>

        {/* Cart & Items */}
        <div className="flex items-center gap-2">
          <Link to="/cart" className="cart relative cursor-pointer">
            <img src={cart} alt="cart" className="" />
          </Link>
          <Link to="/cart" className="items text-gray-700 text-sm hover:text-black">
            Items
          </Link>
        </div>

        {/* Price & Search */}
        <div className="flex items-center gap-3">
          <p className="text-gray-700 text-sm">$0.00</p>
          <Link to="/search">
            <img src={search} alt="search" className="w-5 h-5 cursor-pointer hover:opacity-75" />
          </Link>
        </div>
      </div>
    </nav>
        <hr />

        {/* Main Navigation */}
        <nav className="flex justify-between pt-3 pb-3">
          <div className="logo flex gap-3">
            <img src={Logo} alt="E-Comm Logo" />
            <p className="uppercase bold">e-comm</p>
          </div>

          <div className="Links">
            <ul className="flex space-x-6">
              {["HOME", "BAGS", "SNEAKERS", "BELT", "CONTACT"].map(
                (item, index) => {
                  const path = item === "HOME" ? "/" : `/${item.toLowerCase()}`;
                  const isActive = location.pathname === path;

                  return (
                    <li key={index}>
                      <Link
                        to={path}
                        className={`text-black no-underline transition duration-300 ${
                          isActive
                            ? "font-bold border-b-2 border-black"
                            : "hover:text-gray-700 hover:border-b-2 hover:border-gray-500"
                        }`}
                      >
                        {item}
                      </Link>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
