import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAnsPhF1-ZCsAjBQMKPG7RfqzAfZFFcTRY",
  authDomain: "e-learning-platform-f9628.firebaseapp.com",
  projectId: "e-learning-platform-f9628",
  storageBucket: "e-learning-platform-f9628.appspot.com",
  messagingSenderId: "947723163634",
  appId: "1:947723163634:web:8f10c98b60db0721f1fd6b",
  measurementId: "G-D5530129CN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage  = getStorage(app);

export { app, auth, db };
