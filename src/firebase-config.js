// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxBrot-9xwpc2dJksgHzQhnYXbqImUwRo",
  authDomain: "grassroots-football.firebaseapp.com",
  projectId: "grassroots-football",
  storageBucket: "grassroots-football.appspot.com",
  messagingSenderId: "507833218168",
  appId: "1:507833218168:web:a5bde5f454eda6ca24698d",
  measurementId: "G-PY74N5R9KH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
