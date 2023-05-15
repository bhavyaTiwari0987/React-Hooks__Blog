import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDDbg5ndQSTUkUmyA5pgGGiwTNtlhYaIf4",
  authDomain: "react-hooks-blog-f048a.firebaseapp.com",
  projectId: "react-hooks-blog-f048a",
  storageBucket: "react-hooks-blog-f048a.appspot.com",
  messagingSenderId: "896804501723",
  appId: "1:896804501723:web:50a62a7e79f3bb83b3b4fe",
  measurementId: "G-NT2GGS5YM7"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore;
