import React, { useState } from "react";
import BasicInfo from "../components/user/BasicInfo";
import ShippingInfo from "../components/user/ShippingInfo";

const UserScreen = () => {
  const [userData, setUserData] = useState({
    name: "Navya",
    email: "navyamente@gmail.com",
    shippingAddress: {
      address: "KrPuram",
      pinNumber: "560036",
      phoneNumber: "1234567890",
    },
  });
  const [show, setShow] = useState(false);

  return (
    <div className="w-full h-full items-center justify-center flex flex-col max-w-xl px-3 py-10 mx-auto">
      <h1 className="mx-auto items-center justify-center font-semibold text-xl uppercase">
        My Account
      </h1>

      <button
        className="bg-blue-500 text-white p-2"
        onClick={(e) => {
          setShow((prev) => !prev);
        }}
      >
        {show ? "Hide" : "Show"}
      </button>
      <div className="mt-8 w-full flex flex-col sm:flex-row sm:justify-between px-4">
        <BasicInfo userData={userData} />
        {show && <ShippingInfo userData={userData} initialCount={0} />}
      </div>
    </div>
  );
};

export default UserScreen;
