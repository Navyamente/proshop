import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listProducts } from "../actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  console.log("Products" + products);
  return (
    <div className="mx-auto px-10">
      <h1 className="items-center justify-center  py-4 text-lg uppercase">
        Latest Products
      </h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="w-full">
          <div className="grid grid-cols-4 gap-10">
            {products &&
              products.map((product, index) => (
                <div
                  className="w-5/6 mx-auto items-center justify-center shadow-lg rounded-md"
                  key={index}
                >
                  <div className="h-full rounded-md">
                    <Product product={product} />
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
