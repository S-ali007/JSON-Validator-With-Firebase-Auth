// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrev2une9tBf2UyfzZDMKdzIDw4NHUBO4",
  authDomain: "json-validator-fdc6b.firebaseapp.com",
  projectId: "json-validator-fdc6b",
  storageBucket: "json-validator-fdc6b.appspot.com",
  messagingSenderId: "459848946027",
  appId: "1:459848946027:web:525d91658408acfe0bfc2e",
  measurementId: "G-95PZR9QT0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;