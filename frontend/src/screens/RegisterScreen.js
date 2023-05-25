import React, { useState, useEffect } from "react";
import { Link, redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { register } from "../actions/userActions";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <FormContainer>
      <h1 className="uppercase font-semibold text-lg">Sign Up</h1>
      {message && <Message>{message}</Message>}
      {error && <Message>{error}</Message>}
      {loading && <Loader />}
      <form onSubmit={submitHandler}>
        <div className="py-2 flex flex-col">
          <label>Name </label>
          <input
            className="bg-gray-100 w-80 h-8 px-3"
            type="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>

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

        <div className="py-2 flex flex-col">
          <label>Confirm Password</label>
          <input
            className="bg-gray-100 w-80 h-8 px-3"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>

        <button
          className="uppercase text-xs bg-black text-white py-3 px-4"
          type="submit"
        >
          Register
        </button>
      </form>
      <div className="flex py-3">
        <div className="felx flex-col">
          Have an Account?{" "}
          <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
            Login
          </Link>
        </div>
      </div>
    </FormContainer>
  );
};

export default RegisterScreen;
