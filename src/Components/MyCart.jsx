import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
  const cartLoader = useLoaderData();
  console.log(cartLoader);
  const [deleteCart, setdeleteCart] = useState(cartLoader);

  const handleDelete = (name) => {
    console.log(name);
    Swal.fire("Delete confirm");

    fetch(`https://server-assignment-kyyoqpfu4-mohimamodak.vercel.app/cart/${name}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaining = deleteCart.filter((cart) => cart.name !== name);
          setdeleteCart(remaining);
        }
      });
  };

  return (
    <div>
      <div className="flex justify-center items-center bg-gray-200">
        <div className="grid md:grid-cols-3 gap-5 m-10">
          {deleteCart.map((cart) => (
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
                        onClick={() => handleDelete(cart.name)}
                        className="bg-white font-bold text-lg text-gray-700 px-2 border text-center"
                      >
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
