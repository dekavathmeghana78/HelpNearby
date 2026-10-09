import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
 
  apiKey: "AIzaSyDRYWxAzPDoKUty_7K0eVclNTrLMihyPN0",
  authDomain: "helpnearby-demo.firebaseapp.com",
  projectId: "helpnearby-demo",
  storageBucket: "helpnearby-demo.firebasestorage.app",
  messagingSenderId: "992120914310",
  appId: "1:992120914310:web:c20032c0fd84773d6f2c07"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
