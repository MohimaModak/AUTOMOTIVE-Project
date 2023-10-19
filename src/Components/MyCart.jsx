import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
  const cartLoader = useLoaderData();
  console.log(cartLoader);


 const handleDelete = (id) =>{
  alert(id)
 }


  return (
    <div>
      <div className="flex justify-center items-center bg-gray-200">
        <div className="grid md:grid-cols-3 gap-5 m-10">
          {cartLoader.map((cart) => (
            <div className="flex justify-center">
              <div>
                <div className="bg-gray-100 rounded-md shadow-2xl">
                  <div className="flex justify-center items-center">
                    <img
                      src={cart.photoUrl}
                      className="h-full w-full rounded-sm"
                    />
                  </div>
                  <div className="p-5">
                    <h1 className="font-bold text-lg">{cart.name}</h1>
                    <h1 className="font-semibold">{cart.brand}</h1>
                    <h1 className="font-semibold">{cart.price}</h1>
                    <h1 className="font-medium">{cart.description}</h1>
                    <div className="flex justify-center items-center">
                      <button 
                      onClick={()=> handleDelete(cart._id)}
                       className="bg-white font-bold text-lg text-gray-700 px-2 border text-center">
                        DELETE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCart;
