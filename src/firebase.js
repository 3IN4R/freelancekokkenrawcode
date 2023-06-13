// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBBLFuuKK7MgqI9NrlJ9Mrv1CSEDzblYdM",
  authDomain: "free-lance-kokken.firebaseapp.com",
  projectId: "free-lance-kokken",
  storageBucket: "free-lance-kokken.appspot.com",
  messagingSenderId: "158751840770",
  appId: "1:158751840770:web:67d3c2a67ac4d14ef1a51b",
  measurementId: "G-BHRKYEX71H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);