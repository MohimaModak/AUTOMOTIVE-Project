import React from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
  const handleCar = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const brand = e.target.brand.value;
    const type = e.target.type.value;
    const price = e.target.price.value;
    const photoUrl = e.target.photoUrl.value;
    const description = e.target.description.value;
    const newCar = {
      name,
      brand,
      type,
      price,
      photoUrl,
      description,
    };
    console.log(newCar);

    fetch("http://localhost:1000/cars", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCar),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Successfully added product");
        }
      });
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="relative flex justify-center items-center h-[100vh]">
          <div className="object-cover w-full">
            <img
              src="https://images.pexels.com/photos/11194874/pexels-photo-11194874.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="h-[500px]"
            />
          </div>

          <form
            onSubmit={handleCar}
            className="font-semibold absolute backdrop-blur-3xl p-5 border-accent "
          >
            <div className="md:grid grid-cols-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Car Name</span>
                </label>
                <label className="input-group">
                  <span>Car</span>
                  <input
                    type="text"
                    placeholder="Car Name"
                    className="p-1"
                    name="name"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Brand Name</span>
                </label>
                <label className="input-group">
                  <span>Brand</span>
                  <input
                    type="text"
                    placeholder="brand Name"
                    className="p-1"
                    name="brand"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Type</span>
                </label>
                <label className="input-group">
                  <span>Type</span>
                  <input
                    type="text"
                    placeholder="type"
                    name="type"
                    className="p-1"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Price</span>
                </label>
                <label className="input-group">
                  <span>Price</span>
                  <input
                    type="text"
                    placeholder="price"
                    name="price"
                    className="p-1"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Image</span>
                </label>
                <label className="input-group">
                  <span>Image</span>
                  <input
                    type="text"
                    placeholder="Image"
                    id="photoUrl"
                    name="photoUrl"
                    className="p-1"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">
                    Short Description
                  </span>
                </label>
                <label className="input-group">
                  <span>Details</span>
                  <input
                    type="text"
                    placeholder="description"
                    id="description"
                    name="description"
                    className="p-1"
                  />
                </label>
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-white">Rating</span>
                </label>
                <label className="input-group">
                  <span>Rating</span>
                  <input
                    type="text"
                    placeholder="rating"
                    id="rating"
                    name="rating"
                    className="p-1 w-full"
                  />
                </label>
              </div>
          

            </div>
            <div className="bg-white w-full mt-5 py-1 rounded-full text-center">
              <input type="submit" value="Add Product" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
