import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const logoutHandler = () => {
    dispatch(logout());
  };
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
          {userInfo ? (
            //
            <div className="relative inline-block">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={toggleDropdown}
              >
                {!isOpen && (
                  <>
                    {" "}
                    <i className="bx bx-user mr-2"></i>{" "}
                    <span>{userInfo.name}</span>
                  </>
                )}
                <i
                  className={`bx ${
                    isOpen ? "bx-chevron-up" : "bx-chevron-down"
                  } ml-2`}
                ></i>
              </button>
              {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      <i className="bx bx-user mr-2"></i> Profile
                    </Link>
                    <button
                      onClick={logoutHandler}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      <i className="bx bx-log-out-circle mr-2"></i> Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <li className="hover:text-gray-200">
              <Link to="/login">
                <i className="fas fa-user"></i> SIGN IN
              </Link>
            </li>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
