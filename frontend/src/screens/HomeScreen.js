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

  return (
    <div className="mx-auto px-10">
      <h1 className="items-center justify-center px-8 py-10 text-xl font-semibold uppercase">
        Latest Products
      </h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-10">
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
