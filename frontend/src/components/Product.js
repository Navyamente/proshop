import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`} state={{ product: product }}>
      <div className="flex flex-col rounded-md bg-gray-800 text-white h-full">
        <img
          className="rounded-t-md border border-gray-400"
          src={product.image}
          alt={product.name}
        />
        <h2 className="bg-gray-800 text-white pl-4 pt-4">{product.name}</h2>
        <div className="pl-4 pb-4 space-y-3 h-full">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
          <h3 className="font-semibold text-lg">${product.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Product;
