import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwmXp9CRexTgCR9VLGv-JjMaFU0yvoAcQ",
  authDomain: "omnibio-59a98.firebaseapp.com",
  projectId: "omnibio-59a98",
  storageBucket: "omnibio-59a98.appspot.com",
  messagingSenderId: "662439021633",
  appId: "1:662439021633:web:c267f96064bf18dfb0cac0",
  measurementId: "G-8CN3PSLHT4",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
