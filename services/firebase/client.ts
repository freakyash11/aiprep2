import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyC-ufLJypVHtJ_IWd0VdeK8qCHtKD956aQ",
  authDomain: "prepwise-286c9.firebaseapp.com",
  projectId: "prepwise-286c9",
  storageBucket: "prepwise-286c9.firebasestorage.app",
  messagingSenderId: "1096214464499",
  appId: "1:1096214464499:web:b00d8c2d76b5c5e3b17486",
  measurementId: "G-J0THYH0XEW",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
