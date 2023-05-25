import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import CheckoutSteps from "../components/CheckoutSteps";

const PlaceOrderScreen = () => {
  const cart = useSelector((state) => state.cart);

  const placeOrderHandler = () => {
    console.log("order");
  };

  return (
    // <div className="flex flex-col w-full bg-blue-800 p-6 space-x-4">
    //   <CheckoutSteps step1 step2 step3 step4 />
    //   <div className="flex w-full items-center justify-around space-x-10 bg-slate-500 mx-auto px-8">
    //     <div className="flex w-1/2 flex-col p-8 space-y-4">
    //       <div className="space-y-2">
    //         <h2 className="uppercase font-semibold text-xl">Shipping</h2>
    //         <p className="flex">
    //           <h3>Address:</h3>
    //           {cart.shippingAddress.address}
    //           {cart.shippingAddress.city}, {cart.shippingAddress.postalCode},{" "}
    //           {cart.shippingAddress.country}
    //         </p>
    //       </div>
    //       <div className="w-full h-0.5 bg-red-500"></div>
    //       <div className="space-y-2">
    //         <h2 className="uppercase font-semibold text-xl">Payment Method</h2>
    //         <p className="flex">
    //           <h3>Method:</h3>
    //           {cart.paymentMethod}
    //         </p>
    //       </div>
    //       <hr></hr>
    //       <div className="space-x-3 ">
    //         <h2 className="uppercase font-semibold text-lg">Order Items</h2>
    //         {cart.cartItems.length === 0 ? (
    //           <Message>Your cart is empty</Message>
    //         ) : (
    //           <div className="space-y-2 p-4 divide-y-2">
    //             {cart.cartItems.map((item, index) => (
    //               <div className="flex space-x-4" key={index}>
    //                 <div className="grid md:grid-cols-2 rounded">
    //                   <img className="w-8" src={item.image} alt={item.name} />
    //                 </div>
    //                 <div>
    //                   <Link to={`/product/${item.product}`}>{item.name}</Link>
    //                 </div>
    //                 <div className="grid md:grid-cols-4 px-12">
    //                   {item.qty} * ${item.price} = ${item.qty * item.price}
    //                 </div>
    //               </div>
    //             ))}
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //     <div className="grid w-1/2 md:grid-col-4">
    //       <h2 className="uppercase text-lg">Order Summary</h2>
    //       <div className="flex space-x-9">
    //         <h1>Items</h1>
    //         <p>${cart.itemsPrice}</p>
    //       </div>
    //       <div className="flex space-x-9">
    //         <h1>Shipping</h1>
    //         <p>${cart.shippingPrice}</p>
    //       </div>
    //       <div className="flex space-x-9">
    //         <h1>Tax</h1>
    //         <p>${cart.taxPrice}</p>
    //       </div>
    //       <div className="flex space-x-9">
    //         <h1>Total</h1>
    //         <p>${cart.totalPrice}</p>
    //         <div className="">
    //           <button
    //             type="button"
    //             className="btn-block"
    //             disabled={cart.cartItems === 0}
    //             onClick={placeOrderHandler}
    //           >
    //             Place Order
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex h-screen w-full flex-col p-6 space-x-8">
      <CheckoutSteps step1 step2 step3 step4 />

      <div className="mt-10 flex">
        <div className="space-y-2">
          <h2 className="uppercase font-semibold text-xl">Shipping</h2>
          <p className="flex">
            <h3>Address:</h3>
            {cart.shippingAddress.address}
            {cart.shippingAddress.city}, {cart.shippingAddress.postalCode},{" "}
            {cart.shippingAddress.country}
          </p>

          <div className="space-y-2">
            <h2 className="uppercase font-semibold text-xl">Payment Method</h2>
            <p className="flex">
              <h3>Method:</h3>
              {cart.paymentMethod}
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-3/4 space-x-10">
        <div className="flex w-3/6/5 ">
          <div className="space-x-3">
            <h2 className="uppercase font-semibold text-lg">Order Items</h2>
            {cart.cartItems.length === 0 ? (
              <Message>Your cart is empty</Message>
            ) : (
              <div className="space-y-2 p-4 divide-y-2">
                {cart.cartItems.map((item, index) => (
                  <div className="flex space-x-4" key={index}>
                    <div className="grid md:grid-cols-2 rounded">
                      <img className="w-8" src={item.image} alt={item.name} />
                    </div>
                    <div>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </div>
                    <div className="grid md:grid-cols-4 px-12">
                      {item.qty} * ${item.price} = ${item.qty * item.price}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="grid-col-4 grid w-1/2">
          <h2 className="uppercase text-lg">Order Summary</h2>
          <div className="flex space-x-9">
            <h1>Items</h1>
            <p>${cart.itemsPrice}</p>
          </div>
          <div className="flex space-x-9">
            <h1>Shipping</h1>
            <p>${cart.shippingPrice}</p>
          </div>
          <div className="flex space-x-9">
            <h1>Tax</h1>
            <p>${cart.taxPrice}</p>
          </div>
          <div className="flex space-x-9">
            <h1>Total</h1>
            <p>${cart.totalPrice}</p>
            <div className="">
              <button
                type="button"
                className="btn-block"
                disabled={cart.cartItems === 0}
                onClick={placeOrderHandler}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderScreen;
