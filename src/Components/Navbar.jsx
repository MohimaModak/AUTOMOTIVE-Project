import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";
import img from "../assets/img/namelogo.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("Successfully log out"))
      .catch((error) => console.error(error));
  };

  return (
    <div className="md:flex justify-between items-center gap-10 font-semibold uppercase text-base bg-black text-white">
      <div className="text-center md:flex justify-center items-center gap-5">
        <div className="flex justify-center items-center">
          <img src={img} className="w-32" />
          <h1 className="text-red-700 text-lg">Automotive</h1>
        </div>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "underline"
              : isActive
              ? "text-black bg-gradient-to-r from-gray-100 to-gray-300 p-2 rounded-md"
              : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/addproduct"
          className={({ isActive, isPending }) =>
            isPending
              ? "underline"
              : isActive
              ? "text-black bg-gradient-to-r from-gray-100 to-gray-300 p-2 rounded-md"
              : ""
          }
        >
          Add-Product
        </NavLink>
        <NavLink
          to="/mycart/cart"
          className={({ isActive, isPending }) =>
            isPending
              ? "underline"
              : isActive
              ? "text-black bg-gradient-to-r from-gray-100 to-gray-300 p-2 rounded-md"
              : ""
          }
        >
          My-Cart
        </NavLink>
      </div>
      <div className="flex justify-center items-center">
        {user ? (
          <div className="flex justify-center items-center">
            <h1 className="lowercase">{user.displayName}</h1>
            <img src={user.photoURL} className="w-10 h-10 p-2 rounded-full" />
            <div
              onClick={handleLogOut}
              className="px-3 py-1 m-10 text-white bg-red-700"
            >
              <button>SignOut</button>
            </div>
          </div>
        ) : (
          <>
            <div className="px-3 py-1  text-white bg-red-700">
              <NavLink
                to="/register"
                className={`({ isActive, isPending }) =>
          isPending ? "underline" : isActive ? "text-black bg-gradient-to-r from-gray-100 to-gray-300 p-2 rounded-md" : ""`}
              >
                Register
              </NavLink>
            </div>
            <div className="px-3 py-1 m-10 text-white bg-red-700">
              <NavLink
                to="/login"
                className={` ({ isActive, isPending }) =>
          isPending ? "underline" : isActive ? "text-black bg-gradient-to-r from-gray-100 to-gray-300 p-2 rounded-md" : ""`}
              >
                Login
              </NavLink>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
