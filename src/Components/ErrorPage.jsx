import React from "react";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-[100vh] text-center bg-gray-200">
        <div className="bg-gray-50 p-10 rounded-sm">
          <h1 className="text-6xl text-red-700 font-bold">404</h1>
          <p className="text-red-700 font-semibold text-3xl mt-3">
            This page is not found
          </p>
          <button className="bg-red-700 text-white py-2 px-2 text-base rounded-full mt-6 font-semibold">
            <Link to={"/"}>Back To Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
