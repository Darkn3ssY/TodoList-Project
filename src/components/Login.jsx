import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'
import { Component } from 'react'
import logo from '../assets/pool.png'
import loginImg from '../assets/share.mp4'
import  {useState,setState} from 'react';
import { getDatabase } from "firebase/database"
import {ref, push,child,update} from "firebase/database"
import { initializeApp } from "firebase/app";
import {database} from '../fire'
import {useNavigate} from 'react-router-dom'
import { AnimatePresence,motion } from 'framer-motion' 
 /* import { signInWithGoogle } from '../fire' */
import { useUserAuth, useUserContext } from '../UserAuthContext'
import { Alert } from 'react-bootstrap';
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { useRef } from 'react'


export default function Login() {
 
    const {logIn,googleSignIn} = useUserAuth(); 
    const navigate = useNavigate();
    const handleClick  = () => {
        navigate("/Register")
    }
    const [error,setError] = useState(""); 
    
    const [password,setPassword] = useState("");
    const [email, setEmail] = useState("");  
    
    const signInWithGoogle = async (e) => {
        e.preventDefault(); 
        try { 
            await googleSignIn(); 
            navigate("Home");
        }catch (err){
            setError(err.message); 
        }
    }

    const {signInUser } = useUserContext(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
          await logIn(email, password);
          navigate("Home");
        } catch (err) {
          setError(err.message);
        }
      };


  return (
    
    <div className='absolute w-full h-screen bg-zinc-900/90'>
       <video  className=' blur-sm rounded absolute w-full h-full object-cover mix-blend-overlay autoplay loop muted' autoPlay loop muted>
            <source src={loginImg} type="video/mp4" />
       </video>
      
     
    
    <div className='  flex justify-center items-center h-full '>
       
        <form  className='shadow-lg rounded-lg max-w-[400px] w-full mx-auto bg-gray-200	 p-8'>
        {error && <p  className=' text-red-700 text-lg flex justify-center items-center animate-bounce error'>{error}</p>}
        <h2 className='text-3xl flex  justify-center	 font-bold text-center   font-extrabold  bg-clip-text text-pink-500 '> SIGN IN TO  </h2>
        <h2 className='text-5xl flex  justify-center	 font-bold text-center   font-extrabold bg-clip-text text-blue-400 '> YOUR TODOLIST. </h2>

        

            <div className='flex justify-between py-8'>
           
            <button type='button' onClick={signInWithGoogle} className='rounded-md shadow-lg font-bold hover:shadow-x3 px-32 py-2 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 relative flex items-center'><FcGoogle className='mr-2' /> Google</button>
            </div>
            <div className='font-bold flex flex-col mb-4 '>
                <label className="form_label" htmlFor="Username">Email</label>
                <input id="email" value={email} onChange = {(e) => setEmail(e.target.value)} placeholder="Email" className='rounded-lg border relative bg-gray-400 p-2' type="email" />
            </div>
            <div className='font-bold flex flex-col '>
                <label className="form_label" htmlFor="Password">Password</label>
                <input id="password" value={password} onChange = {(e) => setPassword(e.target.value)} placeholder="Password"  className='rounded-lg border relative bg-gray-400 p-2' type="password" />
            </div>
            <button  onClick={handleSubmit}  type="submit" className= 'shadow-lg shadow-indigo-500/40 font-bold rounded-md w-full py-3 mt-8 transition ease-in-out delay-150 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 relative text-white   '>Sign In</button>
            
            <p className='flex items-center mt-2'><input className='mr-2' type="checkbox"  />Remember Me</p>
            <p className='animate-bounce font-bold text-center mt-8'>Not a member? </p>
            <button onClick={()=>handleClick()} className='shadow-lg shadow-indigo-500/40 font-bold rounded-md w-full py-3 mt-8 transition ease-in-out delay-150 bg-gradient-to-r from-cyan-500 to-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 relative text-white  '>Sign up</button>
        </form>
    </div>
    </div>

   
  )
}

