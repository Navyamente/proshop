import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { saveShippingAddress } from "../actions/cartActions";

const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const navigate = useNavigate();

  const [address, setAddress] = useState(shippingAddress.address || "");
  const [city, setCity] = useState(shippingAddress.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ""
  );
  const [country, setCountry] = useState(shippingAddress.country || "");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate("/payment");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1 className="uppercase font-semibold">Shipping</h1>
      <form onSubmit={submitHandler}>
        <div className="py-2 flex flex-col">
          <label>Address </label>
          <input
            className="bg-gray-100 w-80 h-8 px-3"
            type="text"
            placeholder="Enter address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></input>
        </div>

        <div className="py-2 flex flex-col">
          <label> City </label>
          <input
            className="bg-gray-100 w-80 h-8 px-3"
            type="text"
            placeholder="Enter City"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></input>
        </div>

        <div className="py-2 flex flex-col">
          <label>PostalCode </label>
          <input
            className="bg-gray-100 w-80 h-8 px-3"
            type="text"
            placeholder="Enter postal code"
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></input>
        </div>

        <div className="py-2 flex flex-col">
          <label>Country </label>
          <input
            className="bg-gray-100 w-80 h-8 px-3"
            type="text"
            placeholder="Enter country"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></input>
        </div>

        <button
          className="bg-black text-white uppercase text-xs font-semibold p-2"
          type="submit"
        >
          Continue
        </button>
      </form>
    </FormContainer>
  );
};

export default ShippingScreen;
