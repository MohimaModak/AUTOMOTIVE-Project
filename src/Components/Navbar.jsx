import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("Successfully log out"))
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex justify-between items-center gap-10 font-semibold uppercase text-base bg-black text-white">
      <div className="flex justify-center items-center gap-5">
        <div className="flex justify-center items-center">
          <img src="/src/assets/img/namelogo.png" className="w-32" />
          <h1 className="text-red-700 text-lg">Automotive</h1>
        </div>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "underline" : isActive ? "" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/addproduct"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Add-Product
        </NavLink>
        <NavLink
          to="/mycart/cart"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          My-Cart
        </NavLink>
      </div>
      <div className="flex justify-center items-center">
        {user ? (
          <div className="flex justify-center items-center">
            <h1 className="lowercase">{user.email}</h1>
            <img src={user.photoURL} className="w-16 h-16 rounded-full" />
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
          isPending ? "pending" : isActive ? "active" : ""`}
              >
                Register
              </NavLink>
            </div>
            <div className="px-3 py-1 m-10 text-white bg-red-700">
              <NavLink
                to="/login"
                className={` ({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""`}
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
