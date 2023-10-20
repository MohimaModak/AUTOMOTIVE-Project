import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Slider from "../Slider/Slider";

const Category = () => {
  const [categories, setCategories] = useState([]);

  const brandCategory = useLoaderData();
  console.log(brandCategory);

  useEffect(() => {
    fetch("http://localhost:1000/cars")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  const filterCategories = categories.filter(
    (category) =>
      category?.brand?.toLowerCase() === brandCategory?.name.toLowerCase()
  );
  console.log(filterCategories);

  return (
    <div>
      {filterCategories.length === 0 ? (
        <div>
          <h1>no data found</h1>
        </div>
      ) : (
        <div>
        <Slider></Slider>
        <div className="flex justify-center items-center">
          {
            <h1 className="md:grid grid-cols-3 gap-5 m-10 text-center">
              {filterCategories.map((category) => (
                <div className="border bg-slate-100 p-5 shadow-2xl">
                  <img src={category.photoUrl} />
                  <h1 className="font-bold">{category.name}</h1>
                  <h1 className="font-bold">{category.brand}</h1>
                  <h1 className="font-semibold">{category.type}</h1>
                  <h1 className="font-semibold">{category.price}</h1>
                  <h1 className="font-semibold mb-2">{category.description}</h1>
                  <Link className="m-5" to={`/details/${category._id}`}>
                    <button className=" border px-2 bg-white uppercase font-semibold">
                      Details
                    </button>
                  </Link>
                  <Link to={`/update/${category._id}`}>
                    <button className="border px-2 bg-white uppercase font-semibold">
                      Update
                    </button>
                  </Link>
                </div>
              ))}
            </h1>
          }
        </div>
        </div>
      )}
    </div>
  );
};

export default Category;
