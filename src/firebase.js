import firebase from "firebase";
//Authentication
import "firebase/auth";

//realtime database
import "firebase/database";

//Storage can store images , videos , ....
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCs7Utb7CQQFsjHz70iCOTWNK2yyuXkWpk",
  authDomain: "voot-min.firebaseapp.com",
  projectId: "voot-min",
databaseURL : "https://voot-min-default-rtdb.firebaseio.com",
  storageBucket: "voot-min.appspot.com",
  messagingSenderId: "156143733321",
  appId: "1:156143733321:web:e3a77a32908645ffe8cd98"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
