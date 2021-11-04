// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGH043WE5EkWf7yUg2Ey_JxeMuDqfPHvI",
  authDomain: "todo-app-57ff0.firebaseapp.com",
  projectId: "todo-app-57ff0",
  storageBucket: "todo-app-57ff0.appspot.com",
  messagingSenderId: "352978967835",
  appId: "1:352978967835:web:da8196107acc9d11d987be",
  measurementId: "G-SMPE3Y9K2C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db