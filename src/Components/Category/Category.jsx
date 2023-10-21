import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Slider from "../Slider/Slider";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";

const Category = () => {
  const [categories, setCategories] = useState([]);

  const brandCategory = useLoaderData();
  console.log(brandCategory);

  useEffect(() => {
    fetch("https://server-assignment-kyyoqpfu4-mohimamodak.vercel.app/cars")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  const filterCategories = categories.filter(
    (category) =>
      category?.brand?.toLowerCase() === brandCategory?.name?.toLowerCase()
  );
  console.log(filterCategories);

  return (
    <div>
      {filterCategories.length === 0 ? (
        <div className="flex justify-center items-center h-[100vh]">
          <h1 className="text-5xl text-center">
            All Product is already booked
          </h1>
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
                    <div>
                      <Rating
                        initialRating={category.rating}
                        emptySymbol={
                          <AiOutlineStar className="text-xl text-yellow-400" />
                        }
                        fullSymbol={
                          <AiFillStar className="text-xl  text-yellow-400" />
                        }
                        readonly
                      ></Rating>
                      <h1 className="font-semibold">{category.rating}</h1>
                    </div>
                    <h1 className="font-semibold mb-2">
                      {category.description}
                    </h1>
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
