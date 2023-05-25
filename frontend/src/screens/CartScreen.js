import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../actions/cartActions";

const CartScreen = () => {
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  const navigate = useNavigate();
  //console.log(searchParams);
  //console.log(id);

  const qty = searchParams.get("qty");
  console.log(qty);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  console.log(cartItems);

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/shipping");
  };
  return (
    <div className="flex flex-col md:w-1/6 items-center justify-center px-12">
      <h1 className="uppercase font-semibold py-2">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <Message>
          Your Cart is empty{" "}
          <Link className="text-gray-700 bg-gray-100 hover:bg-gray-300 " to="/">
            Go Back
          </Link>
        </Message>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div className="flex flex-col md:w-2/6" key={item.product}>
              <img
                className="rounded items-center justify-center"
                src={item.image}
                alt={item.name}
              />

              <Link to={`/product/${item.product}`}>{item.name}</Link>
              <p>${item.price}</p>

              <select
                value={item.qty}
                onChange={(e) =>
                  dispatch(addToCart(item.product, Number(e.target.value)))
                }
              >
                {[...Array(item.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => removeFromCartHandler(item.product)}
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="uppercase rounded shadow-md py-4 px-12 font-semibold">
        <h2>
          Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items{" "}
          $
          {cartItems
            .reduce((acc, item) => acc + item.qty * item.price, 0)
            .toFixed(2)}
        </h2>

        <button
          type="button"
          className="btn-block text-sm font-semibold bg-black text-white uppercase px-10 py-1 mt-3"
          disabled={cartItems.length === 0}
          onClick={checkoutHandler}
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default CartScreen;
