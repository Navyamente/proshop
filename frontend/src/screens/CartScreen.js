import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import { addToCart } from "../actions/cartActions";

const CartScreen = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  //console.log(id);

  const qty = searchParams.qty;
  console.log(qty);

  return <div>Cart</div>;
};

export default CartScreen;
