import { AuthContext } from "../../../context/AuthenticationContext";
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";


const PrivateRoute = () => {
    const { isAuthenticated } = useContext(AuthContext);
    if (!isAuthenticated) {
        return <Navigate to="/login" replace/>
    }

    return <Outlet/>
}

export default PrivateRoute;