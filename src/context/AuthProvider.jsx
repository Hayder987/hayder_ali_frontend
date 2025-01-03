import { createContext, useState } from "react";

export const authContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    
     
    const authInfo ={
      user
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;