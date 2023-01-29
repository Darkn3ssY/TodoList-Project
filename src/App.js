import Login from "./components/Login";
import Register from "./components/Register";
import React from 'react'
import { BrowserRouter as Router ,Route, Routes ,Link} from "react-router-dom"
import { getDatabase } from "firebase/database"
import  ReactDOM from "react-dom/client";
import  {AnimatePresence} from 'framer-motion'
import { UserAuthContextProvider } from "./UserAuthContext";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import error from './components/Register'
import { Alert } from 'react-bootstrap';
import { useEffect } from "react";
import { auth } from "./fire";
import { useState } from "react";
import Mytodo from "./components/Mytodo";


function App() {
       
        const [user,setUser] = useState(); 

        useEffect(() => {
           auth.onAuthStateChanged((authUser) => {
              if(authUser){
                 setUser(authUser)
              }else {
                setUser(false); 
              }
           })
        })

       // const Index = () =>( 
        //  <iframe src="http://127.0.0.1:5500/my-project/src/components/index1.html"></iframe>
       // )

  return (

    
  <Router>
<UserAuthContextProvider>
<Routes>
      <Route path="" element={<Login />}/>
      <Route path="Register" element={<Register/>}/>
      <Route path="Home" element={<Mytodo/>}/>
    </Routes>
    
  </UserAuthContextProvider>
  </Router>
  

  );
}

export default App;
