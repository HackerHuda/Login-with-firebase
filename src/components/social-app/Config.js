// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyD9TdybKoMr293pVnT4y4kew23WO5e0ROU",
  authDomain: "loginpage-18c17.firebaseapp.com",
  projectId: "loginpage-18c17",
  storageBucket: "loginpage-18c17.appspot.com",
  messagingSenderId: "767946315765",
  appId: "1:767946315765:web:7cfec6ec6886609e14f2bc",
  measurementId: "G-YPZ3ZDZK26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};
