import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root";
import Home from "./Components/Home";
import AddProduct from "./Components/AddProduct";
import MyCart from "./Components/MyCart";
import Login from "./Components/Login";
import Register from "./Components/Register/Register";
import Category from "./Components/Category/Category";
import AuthProvider from "./Components/Provider/AuthProvider";
import CategoryDetails from "./Components/CategoryDetails/CategoryDetails";
import ErrorPage from "./Components/ErrorPage";
import CategoryUpdate from "./Components/CategoryUpdate/CategoryUpdate";
import PrivaRouter from "./Components/PrivaRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:1000/category"),
      },
      {
        path: "/addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/mycart/cart",
        element: (
            <MyCart></MyCart>
        ),
        loader: () => fetch("http://localhost:1000/cart"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details/:id",
        element: <CategoryDetails></CategoryDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:1000/details/${params.id}`),
      },
      {
        path: "/category/:name",
        element: (
          <PrivaRouter>
            <Category></Category>
          </PrivaRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:1000/category/${params.name}`),
      },
      {
        path: "/update/:id",
        element: <CategoryUpdate></CategoryUpdate>,
        loader: ({ params }) =>
          fetch(`http://localhost:1000/update/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
