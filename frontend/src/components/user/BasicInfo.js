import React from "react";

const BasicInfo = ({ userData }) => {
  return (
    <div className="flex flex-col mb-8 space-y-3 w-full sm:w-1/2">
      <h1 className="font-semibold text-sm text-gray-700 uppercase">
        Basic Info
      </h1>
      <div className="flex flex-col">
        <p>Name</p>
        <span className="flex flex-col rounded font-semibold">
          {userData?.name}
        </span>
      </div>
      <div className="flex flex-col">
        <p>Email</p>
        <span className="flex flex-col rounded font-semibold">
          {userData?.email}
        </span>
      </div>
    </div>
  );
};

export default BasicInfo;
