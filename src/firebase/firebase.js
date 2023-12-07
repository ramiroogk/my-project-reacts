import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEW1R69fuuUt2KfuZk0CtwMBALPHBAwXs",
  authDomain: "forza-ind.firebaseapp.com",
  projectId: "forza-ind",
  storageBucket: "forza-ind.appspot.com",
  messagingSenderId: "911868748472",
  appId: "1:911868748472:web:cd7cf20c47187a2eb54a4d",
  measurementId: "G-C4TX1EGJK0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {analytics, db}