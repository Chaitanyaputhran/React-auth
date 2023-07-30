// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyD3IgBF2z1nG4A2o8YD-bAHa3uN2kJsqhg",
  authDomain: "react-auth-b3897.firebaseapp.com",
  projectId: "react-auth-b3897",
  storageBucket: "react-auth-b3897.appspot.com",
  messagingSenderId: "496174373141",
  appId: "1:496174373141:web:6a1d0cfc263ee08b92b11c",
  measurementId: "G-8H74NY94K6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth();
export {app,auth};
