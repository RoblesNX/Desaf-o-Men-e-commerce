// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0f62HDLs4g54LpGP5Wrm8oV064w-BsOE",
  authDomain: "desafio-ecommerce.firebaseapp.com",
  projectId: "desafio-ecommerce",
  storageBucket: "desafio-ecommerce.appspot.com",
  messagingSenderId: "165769577364",
  appId: "1:165769577364:web:165440161e3c0d08da4581"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)