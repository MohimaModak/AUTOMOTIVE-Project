import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";

const PrivaRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <span className="loading loading-ball loading-lg"></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"}></Navigate>;
};

export default PrivaRouter;
