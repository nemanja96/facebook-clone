// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM07VISij7BmqUAHZBpCrFWJ7OQKqxShM",
  authDomain: "facebook-clone-ab37a.firebaseapp.com",
  projectId: "facebook-clone-ab37a",
  storageBucket: "facebook-clone-ab37a.appspot.com",
  messagingSenderId: "198914716254",
  appId: "1:198914716254:web:fef471ca15611a4d487acf"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();

export { auth, db };