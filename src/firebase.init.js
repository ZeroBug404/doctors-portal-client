// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmonuxM5aBO3UNkDeSsa7gaaP52d_ebsk",
  authDomain: "doctors-portal-f8f00.firebaseapp.com",
  projectId: "doctors-portal-f8f00",
  storageBucket: "doctors-portal-f8f00.appspot.com",
  messagingSenderId: "791599721609",
  appId: "1:791599721609:web:e89d975f0eb70e27786a58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;