import React, { useContext, useEffect,useState} from 'react'
import { createContext } from 'react'
import {
     createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
     signOut,
     onAuthStateChanged
     
} from "firebase/auth"
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

import { auth } from './fire';


const userAuthContext = createContext(); 
const UserContext = createContext({}); 

export  const useUserContext = () => useContext(UserContext)

export function UserAuthContextProvider({children}){ 
        const [user,setUser] = useState(""); 
        function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, googleSignIn }}
    >
      {children}
    </userAuthContext.Provider>
         
    );
}


export function useUserAuth(){
    return useContext(userAuthContext); 
}