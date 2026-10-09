import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4yfN8zKKzOrnlxvUWzEktuDFijc8XhoA",
  authDomain: "helpnearby-9971b.firebaseapp.com",
  projectId: "helpnearby-9971b",
  storageBucket: "helpnearby-9971b.firebasestorage.app",
  messagingSenderId: "957080730918",
  appId: "1:957080730918:web:908a8bfd5cc82b09c5d5e7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
