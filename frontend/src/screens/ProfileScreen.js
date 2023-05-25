import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserDetails, updateUserProfile } from "../actions/userActions";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  useEffect(() => {
    if (!userInfo) {
      dispatch("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
      } else {
        console.log(user.name);
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, userInfo, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      setMessage("");
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
  };
  console.log(`password is ${password}`);
  console.log(`confirmPassword is ${confirmPassword}`);

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="uppercase font-semibold text-lg">User Profile</h2>
      {message && <Message>{message}</Message>}
      {error && <Message>{error}</Message>}
      {success && <Message>Profile Updated</Message>}
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
          Update
        </button>
      </form>
      <div>
        <h2 className="flex uppercase font-semibold  text-lg">My Orders</h2>
      </div>
    </div>
  );
};

export default ProfileScreen;
