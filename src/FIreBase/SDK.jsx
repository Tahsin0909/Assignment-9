// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC39kZzWrG30IFSEwqzlU9RJkYkGBIzbV8",
  authDomain: "assignment-9-3a298.firebaseapp.com",
  projectId: "assignment-9-3a298",
  storageBucket: "assignment-9-3a298.appspot.com",
  messagingSenderId: "252976314314",
  appId: "1:252976314314:web:337c94f6d581e438560133"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;