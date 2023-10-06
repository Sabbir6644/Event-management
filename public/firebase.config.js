// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-PfG73Pwoxy05WWqcJV5goCgsa9qt3Sw",
  authDomain: "hospital-project-839cc.firebaseapp.com",
  projectId: "hospital-project-839cc",
  storageBucket: "hospital-project-839cc.appspot.com",
  messagingSenderId: "591261779419",
  appId: "1:591261779419:web:6b96b397b76411b48413fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;