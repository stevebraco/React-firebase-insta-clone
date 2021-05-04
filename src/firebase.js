import firebase from 'firebase/app';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB6leF4lMFnWkje7G8vymMq-5KgBZi4X00",
  authDomain: "instagram-clone-react-732e9.firebaseapp.com",
  projectId: "instagram-clone-react-732e9",
  storageBucket: "instagram-clone-react-732e9.appspot.com",
  messagingSenderId: "613301754349",
  appId: "1:613301754349:web:c9babcefb62ae08651afe4",
  measurementId: "G-M505CHRYT8"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };