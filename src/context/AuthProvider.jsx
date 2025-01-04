import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth/cordova";

export const authContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    const registerUser = async(email, password)=>{
        setLoading(true)
      return await createUserWithEmailAndPassword(auth, email, password)
    }
    
    const updateUser = async(name)=>{
       return await updateProfile(auth.currentUser, {displayName:name})
    }

    const loginUser = async(email, password)=>{
        setLoading(true)
       return await signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = async()=>{
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
         setUser(currentUser)
         setLoading(false)
      })
      return ()=> unSubscribe()
    }, [])

    const logOutUser = async()=>{
        setLoading(true)
        return await signOut(auth)
    }

    console.log(user)
    
     
    const authInfo ={
      user,
      loading,
      registerUser,
      loginUser,
      updateUser,
      googleLogin,
      logOutUser
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;