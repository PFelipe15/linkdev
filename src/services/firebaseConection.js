import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAS4MnfXIc3RhocER8aZJ29-dBoxSK9aj4",
  authDomain: "platformlinks-89205.firebaseapp.com",
  projectId: "platformlinks-89205",
  storageBucket: "platformlinks-89205.appspot.com",
  messagingSenderId: "903678582821",
  appId: "1:903678582821:web:f14921f883454daa0f1fcc",
  measurementId: "G-QR6CPB8PBW",
};


const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export {db, auth}