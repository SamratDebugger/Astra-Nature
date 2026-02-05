// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_fwXl2hKJr_PkwAI6OeESG7auUMoKCuA",
  authDomain: "astra-nature.firebaseapp.com",
  projectId: "astra-nature",
  storageBucket: "astra-nature.firebasestorage.app",
  messagingSenderId: "232893687332",
  appId: "1:232893687332:web:5696873a339d2df42f5ab1",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
