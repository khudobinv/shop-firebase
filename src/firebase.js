import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBCnm3VMBjEEWq-3NolR9zCt9cLt0YsPhA",
  authDomain: "shopapp-3888e.firebaseapp.com",
  databaseURL: "https://shopapp-3888e-default-rtdb.firebaseio.com",
  projectId: "shopapp-3888e",
  storageBucket: "shopapp-3888e.appspot.com",
  messagingSenderId: "653603706778",
  appId: "1:653603706778:web:5e4ed3ae125a84f2ee4c23",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
