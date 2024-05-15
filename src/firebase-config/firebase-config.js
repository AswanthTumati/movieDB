import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAP1kNKSsD6W62T1EmZjvweDRtopwCisQw",
  authDomain: "moviebasket-b880d.firebaseapp.com",
  projectId: "moviebasket-b880d",
  storageBucket: "moviebasket-b880d.appspot.com",
  messagingSenderId: "670066382370",
  appId: "1:670066382370:web:95f1aea449f97e54a65c7b"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()