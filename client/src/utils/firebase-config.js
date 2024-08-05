// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA9DQnqAMQAbgM_oSsVGJr9ad7iHITH7eE",
  authDomain: "react-netflix-clone-4fcc0.firebaseapp.com",
  projectId: "react-netflix-clone-4fcc0",
  storageBucket: "react-netflix-clone-4fcc0.appspot.com",
  messagingSenderId: "216050388344",
  appId: "1:216050388344:web:89f2a440ac14d9192dcc8d",
  measurementId: "G-0S8LD6NLDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
