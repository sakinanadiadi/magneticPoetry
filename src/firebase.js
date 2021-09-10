import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDaGM4KbZGUEnNb8D7OIThFL9Y6psK2mS4",
  authDomain: "magneticpoem.firebaseapp.com",
  projectId: "magneticpoem",
  storageBucket: "magneticpoem.appspot.com",
  messagingSenderId: "1082826137101",
  appId: "1:1082826137101:web:51885f0bc4dd9186077f44",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
