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


 const AuthContext = React.createContext();

 export const useAuth = () => useContext(AuthContext) ; 

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(true);
  const [loading, setLoading] = useState({});
  const navigate = navigate(); 

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      navigate.push('/chats') ;
    });
  }, [user, navigate]);

  const value = {user } 

  return (
    <AuthContext.Provider value = {value}>
         {!loading && children}
    </AuthContext.Provider>
  )
 
};
