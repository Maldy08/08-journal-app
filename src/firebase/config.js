// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZLODS0Gl7EhCkUOBDp1P1vayTlcL_NbA",
    authDomain: "react-cursos-96854.firebaseapp.com",
    projectId: "react-cursos-96854",
    storageBucket: "react-cursos-96854.appspot.com",
    messagingSenderId: "663568895367",
    appId: "1:663568895367:web:0d3cc6ab2283579d031722"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);