import { initializeApp } from "firebase/app";
import {
  addDoc,
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
  await signInWithEmailAndPassword(auth, email, password);
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
    projects: doc.data().projects,
    hobbies: doc.data().hobbies,
  }));
  callback(candidatesList);
};

const getQuestions = async (callback) => {
  const questionsCollection = collection(db, "skills");
  const questionsDocuments = await getDocs(questionsCollection);
  const questionsList = questionsDocuments.docs.map((doc) => ({
    id: doc.id,
    questions: doc.data().questions,
  }));
  callback(questionsList);
};

const addCandidate = async (
  name,
  lastName,
  dateOfBirth,
  bio,
  skills,
  projects,
  hobbies
) => {
  await addDoc(collection(db, "candidates"), {
    name,
    ["last name"]: lastName,
    ["date of birth"]: dateOfBirth,
    bio,
    skills,
    projects,
    hobbies,
  });
};

export {
  db,
  auth,
  registerUserWithEmail,
  loginUserWithEmail,
  logoutUser,
  getCandidates,
  getQuestions,
  addCandidate,
};
