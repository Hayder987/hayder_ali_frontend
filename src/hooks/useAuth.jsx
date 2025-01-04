import { useContext } from "react";
import { authContext } from "../context/AuthProvider";

const useAuth = () => {
    const getAuth = useContext(authContext)
    return getAuth
};

export default useAuth;