import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";

const PrivaRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation;
  if (loading) {
    return  <div className="flex justify-center items-center h-[100vh]">
      <span className="loading loading-ball loading-lg"></span>;
      </div>
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivaRouter;
