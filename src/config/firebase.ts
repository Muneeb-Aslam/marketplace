// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQvtOvoo4_PQar6YSK0mWFM9syAlwFNis",
  authDomain: "house-mern.firebaseapp.com",
  projectId: "house-mern",
  storageBucket: "house-mern.appspot.com",
  messagingSenderId: "167397608400",
  appId: "1:167397608400:web:94b3c834c6f33be21187d5",
  measurementId: "G-PQ3J0V3HZJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
 
export default db;