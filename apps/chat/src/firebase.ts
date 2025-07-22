import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDKgjAedSsdF048MwM5cnSqYigSkNQKsT0",
  authDomain: "oliochat.firebaseapp.com",
  databaseURL: "https://oliochat-default-rtdb.firebaseio.com/",
  projectId: "oliochat",
  storageBucket: "oliochat.firebasestorage.app",
  messagingSenderId: "910910758173",
  appId: "1:910910758173:web:53297dac4809cd5b6155f4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const googleProvider = new GoogleAuthProvider();