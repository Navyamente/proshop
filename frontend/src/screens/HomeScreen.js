import React, { useState, useEffect } from "react";
import Product from "../components/Product";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");

      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 space-x-8">
      <h1 className="grid items-center justify-center  py-4 text-lg">
        Latest Products
      </h1>
      {products.map((product, index) => (
        <div
          className="grid lg:grid-col-1 w-full mx-auto items-center justify-center py-4"
          key={index}
        >
          <div className="grid w-full sm:w-2/12 md:w-2/6 lg:w-2/3 ">
            <Product product={product} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeScreen;
