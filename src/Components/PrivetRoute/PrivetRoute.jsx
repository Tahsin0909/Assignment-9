/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../ContextApi/ContextApi";
import { Navigate, useLocation } from "react-router-dom";



const PrivetRoutes = ({ children }) => {

    let { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname)
    console.log(user)
    if (loading) {
        console.log(loading)
        return <Navigate to={`/signIn?${location.pathname}`} replace={true} />
    }
    if (user.email) {
            console.log(loading)
            return children;
    }

    return <Navigate to={`/signIn?${location.pathname}`} replace={true} />
};

// const PrivetRoutes = ({ children }) => {
//     const { user} = useContext(AuthContext);
//     const location = useLocation();

//     // Check if user is defined and has an email property
//     if (user) {
//         return children;
//     }

//     return <Navigate to={`/signIn?${location.pathname}`} replace={true} />;
// };


// const PrivetRoutes = ({ children}) => {
//     const { user } = useContext(AuthContext);
  
//     // Check if the user is authenticated. If not, redirect to the sign-in page.
//     const isExsist = user.email
//     if (!isExsist) {
//       return <Navigate to={`/signIn?${location.pathname}`} replace={true} />;
//     }
  
//     // If the user is authenticated, render the protected route.
//     return children
//   };

export default PrivetRoutes;