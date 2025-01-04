import { Navigate } from "react-router";
import LoaderSpinner from "../components/shared/LoaderSpinner";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()

    if(loading){
        return <LoaderSpinner></LoaderSpinner>
    }

    if(user){
        return children
    }

    return (
        <div>
         <Navigate to="/login"></Navigate> 
        </div>
    );
};

export default PrivateRoute;