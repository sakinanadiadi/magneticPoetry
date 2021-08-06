import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBMfTxZyYMSwMZ5BUBlDI7xd87qBrFlnb8",
  authDomain: "poem-7a3e7.firebaseapp.com",
  projectId: "poem-7a3e7",
  storageBucket: "poem-7a3e7.appspot.com",
  messagingSenderId: "668698243568",
  appId: "1:668698243568:web:3045283b2df1cb2dc9ed35",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
