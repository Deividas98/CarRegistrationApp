import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyA37D33O4kJUWx8lUc6H2i6uyFHQ2HakKM",
    authDomain: "react-crud-35209.firebaseapp.com",
    databaseURL: "https://react-crud-35209.firebaseio.com",
    projectId: "react-crud-35209",
    storageBucket: "react-crud-35209.appspot.com",
    messagingSenderId: "164057363151",
    appId: "1:164057363151:web:65d779acc343b0fbdb3dba"
  };
  // Initialize Firebase
  let fireDB = firebase.initializeApp(firebaseConfig);
  export default fireDB.database().ref();