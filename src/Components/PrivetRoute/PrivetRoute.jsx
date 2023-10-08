/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../ContextApi/ContextApi";
import { Navigate, useLocation } from "react-router-dom";



const PrivetRoutes = ({ children }) => {

    let { user } = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname)
    console.log(user)
    if (user.email) {
        return children;
    }

    return <Navigate to={`/signIn?${location.pathname}`} replace={true} />
};

export default PrivetRoutes;