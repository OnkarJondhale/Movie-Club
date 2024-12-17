// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5Ah00YCMxYWj5LV7X0cWacHxnb8nU8sY",
  authDomain: "movie-club-2c3db.firebaseapp.com",
  projectId: "movie-club-2c3db",
  storageBucket: "movie-club-2c3db.firebasestorage.app",
  messagingSenderId: "190603653601",
  appId: "1:190603653601:web:4b75137a38e5ecc516a2a0",
  databaseURL : "https://movie-club-2c3db-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const Firebase = initializeApp(firebaseConfig);