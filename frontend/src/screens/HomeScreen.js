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

  console.log(products);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 space-x-8">
      <h1 className="grid items-center justify-center  py-4 text-lg uppercase">
        Latest Products
      </h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          {products &&
            products.map((product, index) => (
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
      )}
    </div>
  );
};

export default HomeScreen;
