// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFDxKBQIJelPy8L4JAvrRPuPheL6DWbjk",
  authDomain: "auth-website-8310d.firebaseapp.com",
  projectId: "auth-website-8310d",
  storageBucket: "auth-website-8310d.appspot.com",
  messagingSenderId: "700765618556",
  appId: "1:700765618556:web:d7de72bd6d9f3e52d5a4f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;