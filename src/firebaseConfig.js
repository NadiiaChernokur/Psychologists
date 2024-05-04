// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDckWQWECL9IMvRADUlAGifTcrRXWFzCyI",
  authDomain: "psychologists-22f26.firebaseapp.com",
  databaseURL:
    "https://psychologists-22f26-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "psychologists-22f26",
  storageBucket: "psychologists-22f26.appspot.com",
  messagingSenderId: "931627865163",
  appId: "1:931627865163:web:8b3ea51aa3d4b3743969ce",
  measurementId: "G-R9E8GRCFFB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getAnalytics(app);
export default database;
