// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtSfsYuydRXKVuqQK3lPL8TeVaQIqWro4",
  authDomain: "login-auth-e9319.firebaseapp.com",
  projectId: "login-auth-e9319",
  storageBucket: "login-auth-e9319.appspot.com",
  messagingSenderId: "172312634381",
  appId: "1:172312634381:web:e60bb76445898def6da144"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;