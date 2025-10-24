import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDG6X1Xf_1nPivuDuYw2oy3MRl11Q6ctDc",
  authDomain: "moodmate-fe172.firebaseapp.com",
  projectId: "moodmate-fe172",
  storageBucket: "moodmate-fe172.firebasestorage.app",
  messagingSenderId: "586245013721",
  appId: "1:586245013721:web:61ad8e2e3f69d8f2abfec8",
  measurementId: "G-25F6HB0YH3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
