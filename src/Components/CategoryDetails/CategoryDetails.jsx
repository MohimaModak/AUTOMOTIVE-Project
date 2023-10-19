import React from "react";
import { useLoaderData } from "react-router-dom";

const CategoryDetails = () => {
  const detailsCategory = useLoaderData();
  console.log(detailsCategory);

  return (
    <div className="flex justify-center items-center ">
      <div className="flex justify-center items-center h-[100vh] max-w-md ">
        <div className="bg-gray-200 p-5 shadow-2xl rounded-md">
          <div className="flex justify-center">
            <img src={detailsCategory.photoUrl} className="h-[300px] rounded-md" />
          </div>
          <h1 className="font-bold text-center">{detailsCategory.brand}</h1>
          <h1 className="font-bold text-center">{detailsCategory.name}</h1>
          <h1 className="font-bold text-center">{detailsCategory.price}</h1>
          <h1 className="font-bold text-center">{detailsCategory.type}</h1>
          <div className="flex justify-center">
            <h1 className="font-bold text-center w-2/3">
              {detailsCategory.description}
            </h1>
            
          </div>
          <div className="bg-white  px-2 text-center font-bold m-2 py-1 rounded-full">
              <button className="uppercase">Add Cart</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;