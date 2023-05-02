import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex py-6 text-white bg-gray-700">
        <a href="/">
          <i className="flex ml-60">PROSHOP</i>
        </a>
        <ul className="flex ml-auto  px-6 space-x-4 text-xs items-center justify-center text-gray-400">
          <li className="hover:text-gray-200">
            <a href="/cart">
              <i className="fas fa-shopping-cart"></i> CART
            </a>
          </li>
          <li className="hover:text-gray-200">
            <a href="/sign in">
              <i className="fas fa-user"></i> SIGN IN
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
