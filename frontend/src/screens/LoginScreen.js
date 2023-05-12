import React, { useState, useEffect } from "react";
import { Link, redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { login } from "../actions/userActions";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <FormContainer>
      <h1 className="uppercase font-semibold text-lg">Sign In</h1>
      {error && <Message>{error}</Message>}
      {loading && <Loader />}
      <form onSubmit={submitHandler}>
        <div className="py-2 flex flex-col">
          <label>Email Address</label>
          <input
            className="bg-gray-100 w-80 h-8 px-3"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div className="py-2 flex flex-col">
          <label>Password</label>
          <input
            className="bg-gray-100 w-80 h-8 px-3"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <button
          className="uppercase text-xs bg-black text-white py-3 px-4"
          type="submit"
        >
          Sign In
        </button>
      </form>
      <div className="flex py-3">
        <div className="felx flex-col">
          New Customer?{" "}
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            Register
          </Link>
        </div>
      </div>
    </FormContainer>
  );
};

export default LoginScreen;
