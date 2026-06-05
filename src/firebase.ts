import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBl_-j5GSy_EoF69bgMKBGGsMrW-bLGuVU",
  authDomain: "cronos-diver-historia.firebaseapp.com",
  projectId: "cronos-diver-historia",
  storageBucket: "cronos-diver-historia.firebasestorage.app",
  messagingSenderId: "817153355228",
  appId: "1:817153355228:web:0a68055ab09b80c6c63319"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);