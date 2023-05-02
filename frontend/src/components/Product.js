import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  console.log(product);
  return (
    <div className="py-3 w-5/6">
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt="img" />
      </Link>
      <Link to={`/product/${product._id}`}>
        <h1>{product.name}</h1>
      </Link>
      <Rating value={product.rating} text={`${product.numReviews} reviews`} />
      <h3 className="font-semibold">${product.price}</h3>
    </div>
  );
};

export default Product;
