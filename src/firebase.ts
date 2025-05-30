// src/firebase.ts
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwmXp9CRexTgCR9VLGv-JjMaFU0yvoAcQ",
  authDomain: "omnibio-59a98.firebaseapp.com",
  projectId: "omnibio-59a98",
  storageBucket: "omnibio-59a98.firebasestorage.app",
  messagingSenderId: "662439021633",
  appId: "1:662439021633:web:c267f96064bf18dfb0cac0",
  measurementId: "G-8CN3PSLHT4"
};
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const db = getFirestore(app);
