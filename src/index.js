import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase } from "firebase/database";

/* FIREBASE */
// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjfmlpRKj-_n-dQYALSzVYhY6KdgdHptM",
  authDomain: "qwer-hacks-2023-6ffe1.firebaseapp.com",
  databaseURL: "https://qwer-hacks-2023-6ffe1-default-rtdb.firebaseio.com",
  projectId: "qwer-hacks-2023-6ffe1",
  storageBucket: "qwer-hacks-2023-6ffe1.appspot.com",
  messagingSenderId: "664982758746",
  appId: "1:664982758746:web:f5146a738db311cc7f7f63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

// Authentication
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log("signed in", uid);
  } else {
    console.log("signed out");
  }
});

/* React */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
