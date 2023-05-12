import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log(userInfo);

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
            <h2 title={userInfo.name} id="username">
              <Link to="/profile">
                <h1>Profile</h1>
              </Link>
              <select className="" onClick={logoutHandler}>
                Lougout
              </select>
            </h2>
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
