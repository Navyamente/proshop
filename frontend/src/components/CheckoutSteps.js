import React from "react";
import { Link } from "react-router-dom";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <div className="flex items-center justify-center mb-4 space-x-6">
      <div>
        {step1 ? (
          <Link to="/login">
            <p>Sign In</p>
          </Link>
        ) : (
          <Link disabled>Sign In</Link>
        )}
      </div>

      <div>
        {step2 ? (
          <Link to="/shipping">Shipping</Link>
        ) : (
          <Link disabled>Shipping</Link>
        )}
      </div>

      <div>
        {step3 ? (
          <Link to="/payment">Payment</Link>
        ) : (
          <Link disabled>Payment</Link>
        )}
      </div>

      <div>
        {step4 ? (
          <Link to="/placeorder">Place Order</Link>
        ) : (
          <Link disabled>Place Order</Link>
        )}
      </div>
    </div>
  );
};

export default CheckoutSteps;
