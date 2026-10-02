import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { Auth } from "../Context/AuthContext";

const ProtectedRoute = () => {
  const { loggedInUser } = useContext(Auth);

  return loggedInUser ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;