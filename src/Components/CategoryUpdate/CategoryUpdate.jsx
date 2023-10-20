import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const CategoryUpdate = () => {
  const updateCoffee = useLoaderData();
  const { _id, name, brand, type, price, photoUrl, description } = updateCoffee;

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const brand = e.target.brand.value;
    const type = e.target.type.value;
    const price = e.target.price.value;
    const photoUrl = e.target.photoUrl.value;
    const description = e.target.description.value;
    const updateCategory = {
      name,
      brand,
      type,
      price,
      photoUrl,
      description,
    };
    console.log(updateCategory);
    fetch(`https://server-assignment-kyyoqpfu4-mohimamodak.vercel.app/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCategory),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Wow",
            text: "Successfully updated",
            confirmButtonText: "Okay",
          });
        }
      });
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="bg-gray-300 max-w-min p-5 ">
        <form onSubmit={handleUpdate}>
            
          <input
            type="text"
            placeholder="Car Name"
            name="name"
            className="border mb-3 pl-2 font-semibold w-72"
            defaultValue={name}
          />
          <br />
          <input
            type="text"
            placeholder="brand"
            className="border mb-3 pl-2 font-semibold w-72"
            name="brand"
            defaultValue={brand}
          />
          <br />
          <input
            type="text"
            placeholder="price"
            name="price"
            className="border mb-3 pl-2 font-semibold w-72"
            defaultValue={price}
          />
          <br />
          <input
            type="text"
            placeholder="type"
            className="border mb-3 pl-2 font-semibold w-72"
            name="type"
            defaultValue={type}
          />
          <br />
          <input
            type="text"
            placeholder="description"
            className="border mb-3 pl-2 font-semibold w-72"
            name="description"
            defaultValue={description}
          />
          <br />
          <input
            type="text"
            placeholder="Image"
            className="border mb-3 pl-2 font-semibold w-72"
            id="photoUrl"
            name="photoUrl"
            defaultValue={photoUrl}
          />
          <div className="bg-white font-semibold text-center">
            <input type="submit" value="Update" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryUpdate;
