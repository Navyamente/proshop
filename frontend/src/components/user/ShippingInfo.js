import React, { useState, useEffect } from "react";

const ShippingInfo = (props) => {
  const userData = props.userData;
  const initialCount = props.initialCount || 0;

  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log("I am mounting");

    return () => {
      console.log("I am unmounting");
    };
  }, []);

  console.log("I am rendering");

  console.log(count);

  return (
    <div className="flex flex-col space-y-4  w-full sm:w-1/2">
      <h1 className="font-semibold text-sm text-gray-700 uppercase">
        Shipping Address : {count}
      </h1>
      <button
        className="bg-blue-500 text-white p-2"
        onClick={() => setCount((count) => count + 1)}
      >
        Increment
      </button>
      <div className="flex flex-col">
        <p>Address</p>
        <span className="flex flex-col rounded font-semibold">
          {userData?.shippingAddress?.address}
        </span>
      </div>
      <div className="flex flex-col">
        <p>Pin Number</p>
        <span className="flex flex-col rounded font-semibold">
          {userData?.shippingAddress?.pinNumber}
        </span>
      </div>
      <div className="flex flex-col">
        <p>PhoneNumber</p>
        <span className="flex flex-col rounded font-semibold">
          {userData?.shippingAddress?.phoneNumber}
        </span>
      </div>
    </div>
  );
};

export default ShippingInfo;
