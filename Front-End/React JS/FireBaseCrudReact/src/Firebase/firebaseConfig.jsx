// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBu6xAo_S6_3PQY1RsshHMdd-HYBASMQhQ",
  authDomain: "react-crud-products-14f33.firebaseapp.com",
  projectId: "react-crud-products-14f33",
  storageBucket: "react-crud-products-14f33.firebasestorage.app",
  messagingSenderId: "199958937808",
  appId: "1:199958937808:web:c99e9414a3777080aaded5",
  measurementId: "G-MJNQEWQC7R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseDatabase = getFirestore(app)