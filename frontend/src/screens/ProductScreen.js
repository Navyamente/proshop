import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listProductDetails } from "../actions/productActions";

const ProductScreen = () => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };

  return (
    <div className="flex md:w-auto space-x-2 space-y-2 items-center justify-center">
      <Link className="text-gray-700 bg-slate-300 hover:bg-slate-400 " to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="flex flex-row space-x-2 space-y-4 ">
          <img src={product.image} alt={product.image} />
          <div className="divide-y-2 w-1/2">
            <h3 className="space-x-2 space-y-3 font-semibold">
              {product.name}
            </h3>

            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
            <h1 className="lg:w-1/2">Price: ${product.price}</h1>
            <p className="w-1/2">Description: {product.description}</p>
          </div>
          <div className="divide-y-2 w-1/2">
            <h1 className="font-semibold">Price: ${product.price}</h1>
            <div>
              <h1 className="font-semibold">Status:</h1>
              <p className="flex flex-col">
                {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
              </p>
            </div>
            {product.countInStock > 0 && (
              <div className="rounded-sm bg-slate-200 hover:bg-slate-300">
                <p className="flex flex-col">Qty</p>

                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <button
              onClick={addToCartHandler}
              className="bg-black text-white py-2 "
              type="button"
              disabled={product.countInStock === 0}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductScreen;
