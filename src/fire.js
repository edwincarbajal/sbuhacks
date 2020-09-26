import firebase from 'firebase-auth';

var firebaseConfig = {
   apiKey: "AIzaSyBVn7aTQL_6nUqSLoCtLkRcQqP5MNl0HWQ",
   authDomain: "sbuhack20.firebaseapp.com",
   databaseURL: "https://sbuhack20.firebaseio.com",
   projectId: "sbuhack20",
   storageBucket: "sbuhack20.appspot.com",
   messagingSenderId: "842977275757",
   appId: "1:842977275757:web:3ec0e1c6804b042e3f3464",
   measurementId: "G-H8NVPZ6DDY"
 };

 const fire = firebase.initializeApp(firebaseConfig);

export default fire;
