import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "admin-7734f.firebaseapp.com",
  projectId: "admin-7734f",
  storageBucket: "admin-7734f.appspot.com",
  messagingSenderId: "664009448542",
  appId: "1:664009448542:web:f3dd6f9733a4c33a33a8cf"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);