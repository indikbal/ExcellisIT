// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

var firebaseApp = firebase.initializeApp({
  // Your firebase credentials
  apiKey: "AIzaSyA9RWgjkFIPMBAk6gicxbx5ZtncoadCSx8",
  authDomain: "excellisit2022.firebaseapp.com",
  projectId: "excellisit2022",
  storageBucket: "excellisit2022.appspot.com",
  messagingSenderId: "198881932848",
  appId: "1:198881932848:web:86caab2d2f275e0fbc1ff5",
  measurementId: "G-7GLQTY7X9J",
});

var db = firebaseApp.firestore();

export { db };
