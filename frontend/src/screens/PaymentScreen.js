import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { savePaymentMethod } from "../actions/cartActions";

const PaymentScreen = () => {
  //console.log("I am in the payment Screen");
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    navigate("/shipping");
  }
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <div>
        <h1 className="uppercase font-semibold text-lg">Payment Method</h1>
        <form onSubmit={submitHandler}>
          <div className="flex flex-col py-4">
            <label>Select Method</label>
            <div className="flex space-x-2 py-3">
              <input
                type="radio"
                id="PayPal"
                name="paymentMethod"
                value="PayPal"
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></input>
              <label> PayPal or Credit Card </label>
            </div>
            <div className="flex space-x-2">
              <input
                type="radio"
                id="Stripe"
                name="paymentMethod"
                value="Stripe"
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></input>
              <label>Stripe</label>
            </div>
          </div>
          <button
            className="bg-black text-white items-center p-2"
            type="submit"
          >
            Continue
          </button>
        </form>
      </div>
    </FormContainer>
  );
};

export default PaymentScreen;
