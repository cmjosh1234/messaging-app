import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB9A3ghpd82fzEfbjIMlnsojk_ji1njVX8",
    authDomain: "messaging-application-7de65.firebaseapp.com",
    projectId: "messaging-application-7de65",
    storageBucket: "messaging-application-7de65.appspot.com",
    messagingSenderId: "995888314151",
    appId: "1:995888314151:web:287a584ba6b9cca4001b02",
    measurementId: "G-VVDSNRYSRB"
  };

// code to initialise app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// invoking our database
const db =firebaseApp.firestore();

// invoking our authentication service

const auth =firebase.auth();

// google auth provider setup
const provider = new firebase.auth.GoogleAuthProvider()

//exporting our instances so that we can use them any where in our project
  export {auth,provider};
  export default db;