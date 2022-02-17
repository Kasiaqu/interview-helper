import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
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
const auth = getAuth(app);

const registerUserWithEmail = async (name, lastName, email, password) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);
  const user = response.user;

  await setDoc(doc(db, "users", user.uid), {
    name,
    lastName,
    authProvider: "local",
    email,
  });
};

const loginUserWithEmail = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};

const logoutUser = () => {
  signOut(auth);
};

const getCandidates = async (callback) => {
  const candidatesCollection = collection(db, "candidates");
  const candidatesDocuments = await getDocs(candidatesCollection);
  const candidatesList = candidatesDocuments.docs.map((doc) => ({
    id: doc.id,
    name: doc.data().name,
    lastName: doc.data()["last name"],
    dateOfBirth: doc.data()["date of birth"],
    bio: doc.data().bio,
    skills: doc.data().skills,
  }));
  callback(candidatesList);
};

export {
  db,
  auth,
  registerUserWithEmail,
  loginUserWithEmail,
  logoutUser,
  getCandidates,
};
