// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG1Tm7B7pYCfdz5nqVILWrbo9BtDOuZ2s",
  authDomain: "netflix-c8b62.firebaseapp.com",
  projectId: "netflix-c8b62",
  storageBucket: "netflix-c8b62.appspot.com",
  messagingSenderId: "851870282002",
  appId: "1:851870282002:web:f9584bec41f52b7adb83cb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
