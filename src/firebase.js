import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCLCA00WL1fOVouAu2NHSizx5RWygSRrj8",
  authDomain: "newmagneticpoem.firebaseapp.com",
  projectId: "newmagneticpoem",
  storageBucket: "newmagneticpoem.appspot.com",
  messagingSenderId: "431462705191",
  appId: "1:431462705191:web:c1aac44356ee387a7dc602",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
