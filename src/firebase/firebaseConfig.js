import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjNUaowrFsMAlfoTiOZhnVMASyXHjUjh8",
  authDomain: "my-kitchen-726d9.firebaseapp.com",
  projectId: "my-kitchen-726d9",
  storageBucket: "my-kitchen-726d9.appspot.com",
  messagingSenderId: "633749117357",
  appId: "1:633749117357:web:bc64d526564387d21de924"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth =getAuth()

export const db =getFirestore(app)