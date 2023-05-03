import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <div className="py-3 w-5/6">
      <Link to={`/product/${product._id}`} state={{ product: product }}>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
      </Link>
      <Rating value={product.rating} text={`${product.numReviews} reviews`} />
      <h3 className="font-semibold">${product.price}</h3>
    </div>
  );
};

export default Product;
