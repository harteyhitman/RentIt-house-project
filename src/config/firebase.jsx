import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { GoogleAuthProvider} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDUwjjXBMic4GuYHKcl_XJlswdCa4qhRxM",
  authDomain: "rent-it-554be.firebaseapp.com",
  projectId: "rent-it-554be",
  storageBucket: "rent-it-554be.appspot.com",
  messagingSenderId: "52007563921",
  appId: "1:52007563921:web:582fbcc5e9c9e0c8140530",
  measurementId: "G-3FRZBLPGQN"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()