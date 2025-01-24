import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrBJ_i1vbOFHG_X-hJxUpKY8FcTH-1Bnc",
  authDomain: "contentdo-738fd.firebaseapp.com",
  projectId: "contentdo-738fd",
  storageBucket: "contentdo-738fd.firebasestorage.app",
  messagingSenderId: "971303862574",
  appId: "1:971303862574:web:3ad25bb2bacc6e512cbabf",
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const auth = getAuth(app);

export { app, storage, auth };
