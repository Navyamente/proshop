import React from "react";

const FormContainer = ({ children }) => {
  return (
    <div className="container">
      <div className="flex justify-center items-center">
        <div className="flex flex-col md:w-6/12">{children}</div>
      </div>
    </div>
  );
};

export default FormContainer;
