import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import SecondSection from "./SecondSection/SecondSection";
import ThirdSection from "./ThirdSection/ThirdSection";
import { useState } from "react";
import { BsLightbulb, BsLightbulbOff } from "react-icons/bs";

const Home = () => {
  const categoryLoader = useLoaderData();
  const [darkTheme, setdarkTheme] = useState(false);

  const toggleBackground = () => {
    setdarkTheme((prevTheme) => !prevTheme);
  };

  const backgroundColor = darkTheme ? "black" : "white";
  const textColor = darkTheme ? "white" : "black";

  return (
    <div style={{ backgroundColor, color: textColor }}>
      <button onClick={toggleBackground}>
        {darkTheme ? (
          <BsLightbulb></BsLightbulb>
        ) : (
          <BsLightbulbOff></BsLightbulbOff>
        )}
      </button>
      <Banner></Banner>
      <div className="text-center m-20 font-bold text-2xl  text-red-700 md:text-3xl lg:text-6xl">
        <h1>categorization</h1>
      </div>
      <div className="md:grid grid-cols-3 gap-5 m-10">
        {categoryLoader.map((category) => (
          <Link to={`/category/${category.name}`}>
            <div className="card  bg-base-100 shadow-xl image-full mb-5">
              <figure>
                <img src={category.img} className="rounded-sm " />
              </figure>
              <div className="card-body font-semibold text-xl uppercase">
                <p>{category.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
    </div>
  );
};

export default Home;
