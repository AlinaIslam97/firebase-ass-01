import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBfTbVh8PYDPJ0yStSY3Zr5-uNeuEu6BVs",
  authDomain: "fir-form-ab3e3.firebaseapp.com",
  projectId: "fir-form-ab3e3",
  storageBucket: "fir-form-ab3e3.firebasestorage.app",
  messagingSenderId: "715752938937",
  appId: "1:715752938937:web:92372f963ff20f25e72a68",
  measurementId: "G-LFWM9M2XB0"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged, sendEmailVerification } 

