import React from "react";

const Banner = () => {
  return (
    <div>
      <div className=" md:flex justify-center items-center m-10 ">
        <div className="md:w-2/3">
          <h1 className="text-5xl text-red-700 font-bold mb-10">Automotive</h1>
          <div className="mb-3">
            <h1 className="font-semibold">
              I cannot wait to drive and flex my new ride!
            </h1>
            <h1 className="font-semibold">
              A new car might not change your own life, but it can <br /> change
              your attitude.
              A car is a vehicle that has wheels, carries a small number of passengers, and is moved by an engine or a motor. Cars are also called automobiles or motor vehicles.
            </h1>
          </div>

          <button className="btn bg-red-700 text-white w-48 mb-3">Book Now</button>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/7101497/pexels-photo-7101497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
