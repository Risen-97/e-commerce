import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const cartLength = useSelector((state) => state.cart.totalQuantity);

  const menuHandler = () => setShowMenu(false);
  return (
    <header className="h-[68px] py-4 bg-white text-blue-900 ">
      <nav className="flex justify-between items-center z-50 relative">
        <NavLink className="text-3xl z-20 font-medium mx-4 2xl:mx-0 " to="/">
          ShopOn
        </NavLink>
        <ul
          className={`absolute flex flex-col items-center z-0   transition-transform duration-300 md:translate-y-0 w-screen bg-white md:bg-transparent md:w-fit md:mx-4 2xl:mx-0 md:static md:flex-row gap-16 ${
            showMenu ? "translate-y-[11.7rem] shadow-md" : "-translate-y-[63%]"
          }`}
        >
          <li className="w-full">
            <NavLink
              onClick={menuHandler}
              activeClassName="activeLink"
              className="link"
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              onClick={menuHandler}
              activeClassName="activeLink"
              className="link"
              to="/products"
            >
              Products
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              onClick={menuHandler}
              activeClassName="activeLink"
              className=" link"
              to="/about"
            >
              About
            </NavLink>
          </li>

          <button className="hidden relative z-40 md:block">
            <span className="absolute -left-1 -top-4 bg-indigo-700 text-white w-5 h-5 text-[12px] flex items-center justify-center rounded-full">
              {cartLength}
            </span>

            <NavLink activeClassName="activeLink" className="link" to="/cart">
              <BsCart3 />
            </NavLink>
          </button>
        </ul>

        <button
          onClick={() => setShowMenu(!showMenu)}
          className="md:hidden z-20 text-xl mx-4 2xl:mx-0"
        >
          {!showMenu ? <AiOutlineMenu /> : <AiOutlineClose />}
        </button>
      </nav>

      <button className="fixed right-3 z-40 bottom-12 md:hidden ">
        <span className="absolute -left-1 -top-4 bg-indigo-700 text-white w-5 h-5 text-[12px] flex items-center justify-center rounded-full">
          {cartLength}
        </span>
        <NavLink to="/cart">
          <BsCart3 className="text-2xl" />
        </NavLink>
      </button>
    </header>
  );
};

export default Navbar;
