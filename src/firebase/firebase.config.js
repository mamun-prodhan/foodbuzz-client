// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyssCEAS5KrAbib0rQ1iwiDclu9k_HAOc",
  authDomain: "blog-b8a11.firebaseapp.com",
  projectId: "blog-b8a11",
  storageBucket: "blog-b8a11.appspot.com",
  messagingSenderId: "799352378700",
  appId: "1:799352378700:web:9cbc742ec51059feafebe9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
