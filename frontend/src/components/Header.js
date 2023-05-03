import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="flex py-6 text-white bg-gray-700">
        <Link to="/">
          <i className="flex ml-60">PROSHOP</i>
        </Link>
        <div className="flex ml-auto  px-6 space-x-4 text-xs items-center justify-center text-gray-400">
          <li className="hover:text-gray-200">
            <Link to="/cart">
              <i className="fas fa-shopping-cart"></i> CART
            </Link>
          </li>

          <li className="hover:text-gray-200">
            <Link to="/login">
              <i className="fas fa-user"></i> SIGN IN
            </Link>
          </li>
        </div>
      </div>
    </header>
  );
};

export default Header;
