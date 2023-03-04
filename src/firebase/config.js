import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

// For Authentication we have only took the Email Authentication form Firebase.
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};

firebase.initializeApp(firebaseConfig);

//init services
const db = firebase.firestore();

//init service for auth
const auth = firebase.auth();

// init storage
const storage = firebase.storage();

//timestamp
// to have a time stamp when the user logged in or out from the App and it's form Firebase
const timestamp = firebase.firestore.Timestamp;

export { db, storage, auth, timestamp };
