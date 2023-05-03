import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import axios from "axios";

const ProductScreen = ({ match }) => {
  const [product, setProducts] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);

      setProducts(data);
    };

    fetchProduct();
  }, []);
  return (
    <div>
      <Link className="btn bg-gray-600 my-3" to="/">
        Go Back
      </Link>
      <div className="grid md:grid-cols-6  py-3">
        <img src={product.image} alt={product.name} fluid />
      </div>
      <div>
        <h2 className="md:grid-cols-3">{product.name}</h2>
        <div>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
          <h1>Price: ${product.price}</h1>
          <p>Description: {product.description}</p>
        </div>
      </div>
      <div className="flex md:w-1/3 flex-col ">
        <p>Price:</p>
        <h1 className="font-semibold">${product.price}</h1>
      </div>

      <div className="flex md:w-1/3 flex-col ">
        <p>Status:</p>
        <h1 className="font-semibold">
          {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
        </h1>
      </div>
      <div>
        <button
          className="bg-black text-white py-2 "
          type="button"
          disabled={product.countInStock === 0}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductScreen;
