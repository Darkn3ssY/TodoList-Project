import navigate from './components/Login.jsx'
import { getDatabase } from "firebase/database"
import {useNavigate} from 'react-router-dom'
import {getFirestore} from 'firebase/firestore/lite'
import {getStorage} from 'firebase/storage'
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgUnIoJkiL5AYRcvWsPhEAl-Yq7xVeYmM",
  authDomain: "registration-sw.firebaseapp.com",
  databaseURL: "https://registration-sw-default-rtdb.firebaseio.com",
  projectId: "registration-sw",
  storageBucket: "registration-sw.appspot.com",
  messagingSenderId: "747934345722",
  appId: "1:747934345722:web:8e3e31b51e34189b5c9c43"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) 
export const storage = getStorage(app)


export const auth = getAuth(app)
export const database = getDatabase(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
       console.log(result)

    }).catch((error) => {
        console.log(error)
    }) 
};

  