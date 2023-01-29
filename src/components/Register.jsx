import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'
import { Component } from 'react'
import loginImg from '../assets/watchme.mp4'
import  {useState,setState} from 'react';
import { getDatabase } from "firebase/database"
import {ref, push,child,update} from "firebase/database"
import { initializeApp } from "firebase/app";
import {database} from '../fire'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence,motion } from 'framer-motion'
import logo from '../assets/pool.png'
import { useUserAuth } from '../UserAuthContext'

import { Alert } from 'react-bootstrap';


export default function Register() {

    const navigate = useNavigate(); 
    const {signUp} = useUserAuth(); 
    
    const handleClick  = () => {
        navigate("/")
    }
    const [error,setError] = useState(""); 
    const [Username, setUsername] = useState("");
    const [Password,setPassword] = useState("");
    const [Email, setEmail] = useState("");
    const [PhoneNumber,setPhoneNumber] = useState("");


    const handleSubmit  = async (event) => {    
       event.preventDefault(); 
       setError("") ;
       try {
            await signUp(Email,Password)
            navigate("/")
       }catch(err){
        setError(err.message);
    
    }
    }

        

  return (

    
   

    <motion.div
    initial={{scaleY:1}} 
    animate={{scaleY:1}}
    exit={{scaleY:0}}
    transition={{duration:0.5} }
    
    
    
    className='relative w-full h-screen bg-zinc-900/90'>
       <video  className=' blur-sm rounded absolute w-full h-full object-cover mix-blend-overlay ' autoPlay loop muted>
            <source src={loginImg} type="video/mp4" />
       </video>
    
        
    <div className='  flex justify-center items-center h-full'>
        <form   className='rounded-lg max-w-[400px] w-full mx-auto bg-gray-200 p-8'>
        {error && <p className=' flex justify-center items-center text-lg text-red-600 animate-bounce error'>{error}</p>}

        <h2 className='text-3xl flex  justify-center	 font-bold text-center   font-extrabold  bg-clip-text text-pink-500 '> JOIN   </h2>
        <h2 className='text-5xl flex  justify-center	 font-bold text-center   font-extrabold bg-clip-text text-blue-400 '> TODOLIST. </h2>
        <h2 className='text-3xl flex  justify-center	 font-bold text-center   font-extrabold  bg-clip-text text-pink-500 '> TODAY   </h2>


            <div className='flex justify-between py-4'>
                <button className='rounded-md shadow-lg font-bold hover:shadow-x3 px-32 py-2 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 relative flex items-center'><FcGoogle className='mr-2' /> Google</button>
            </div>
            <div className='font-bold flex flex-col mb-4 '>
                <label className="form_label" htmlFor="Username">Username</label>
                <input id="Username" value={Username} onChange = {(e) => setUsername(e.target.value)} placeholder="Username" className='rounded-lg border relative bg-gray-400 p-2' type="text" />
            </div>
            <div className='font-bold flex flex-col '>
                <label className="form_label" htmlFor="Password">Password</label>
                <input id="Password" value={Password} onChange = {(e) => setPassword(e.target.value)} placeholder="Password"  className='rounded-lg border relative bg-gray-400 p-2' type="password" />
            </div>
            <div className=' font-bold flex flex-col '>
                <label className="form_label" htmlFor="Email" >Email</label>
                <input id="Email" value={Email} onChange = {(e) => setEmail(e.target.value)} placeholder="Email" className='rounded-lg border relative bg-gray-400 p-2' type="text" />
            </div>
            <div className='font-bold flex flex-col '>
                <label className="form_label" htmlFor="PhoneNumber">Phone Number</label>
                <input id="PhoneNumber" value={PhoneNumber} onChange = {(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" className='rounded-lg border relative bg-gray-400 p-2' type="text" />
            </div>
            <button  onClick={(event)=>handleSubmit(event)} type="submit" className= 'shadow-lg shadow-indigo-500/40 font-bold rounded-md w-full py-3 mt-8 transition ease-in-out delay-150 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 relative text-white '>Sign Up</button>
            <p className='flex items-center mt-2'><input className='mr-2' type="checkbox"  />Remember Me</p>
            <p className='font-bold text-center mt-8 animate-pulse '>Already have an account? </p>
            <button  onClick={(event)=>handleClick(event)}  className='shadow-lg shadow-indigo-500/40 font-bold rounded-md w-full py-3 mt-8 transition ease-in-out delay-150 bg-gradient-to-r from-cyan-500 to-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 relative text-white'>Sign In</button>
        </form>
    </div>
    </motion.div>
    
 )
}
