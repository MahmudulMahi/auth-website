import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/fairbase.config";
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext =createContext(null)
const AuthProvider = ({children}) => {

   const [user,setUser]=useState(null)
   const [loading,setLoading]=useState(true)

   const createUser =(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
   };

   const singInUser =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
   }

   const logOut=()=>{
    setLoading(true)
    return signOut(auth)
   }

   useEffect(() =>{
    const unSubscribe=onAuthStateChanged(auth,currentUser =>{
      setUser(currentUser)
      console.log('observing ',currentUser)
      setLoading(false)
    })
    return ()=>{
      unSubscribe
    }
   },[])
  const authInfo={user,createUser,singInUser,logOut,loading} 

  
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes={
  children:PropTypes.node
}