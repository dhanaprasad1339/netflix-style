// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeq95TOg5cFNEumLAI0GdF02GAYqIlnH4",
  authDomain: "netflix-style-47b79.firebaseapp.com",
  projectId: "netflix-style-47b79",
  storageBucket: "netflix-style-47b79.firebasestorage.app",
  messagingSenderId: "410906383109",
  appId: "1:410906383109:web:dd7cd47f387d6c2cacdd6c",
  measurementId: "G-SB913HNM79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);