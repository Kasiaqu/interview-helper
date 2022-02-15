import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjrWuN8L0egMG4y2qhzMi4TAxuSbRCD14",
  authDomain: "interview-helper-ih.firebaseapp.com",
  projectId: "interview-helper-ih",
  storageBucket: "interview-helper-ih.appspot.com",
  messagingSenderId: "248331208419",
  appId: "1:248331208419:web:f1d9ddf23aed7ed56ea7d6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };