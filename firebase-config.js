// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2aVZrxK8awnwYAZhT6FVOX66qAz7sQB0",
    authDomain: "riwayyat-de230.firebaseapp.com",
    projectId: "riwayyat-de230",
    storageBucket: "riwayyat-de230.firebasestorage.app",
    messagingSenderId: "780677680452",
    appId: "1:780677680452:web:585a5bb8370479d3281b11",
    measurementId: "G-LS5EQRGJFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, analytics };