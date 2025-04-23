import { Navigate, Outlet } from "react-router-dom";
import Login from "../Login";

const ProtectedRoute = () => {
    const isLoggedIn = sessionStorage.getItem("loggedInToken");
  return (
  <>
            {isLoggedIn ? <Outlet/> : <Navigate to="/" />}
  </>
  )
}

export default ProtectedRoute;
