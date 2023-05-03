import React from "react";
import { useLocation } from "react-router-dom";

const ProductScreen = () => {
  const location = useLocation();
  const product = location.state.product;

  return (
    <div>
      <h1>Product {product._id}</h1>
    </div>
  );
};

export default ProductScreen;
