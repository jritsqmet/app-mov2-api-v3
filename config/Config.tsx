import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyAn-sY9j3F9PF31V_M7wjKmdxCSoGUiQXo",
  authDomain: "rn3-test.firebaseapp.com",
  databaseURL: "https://rn3-test-default-rtdb.firebaseio.com",
  projectId: "rn3-test",
  storageBucket: "rn3-test.appspot.com",
  messagingSenderId: "45799835882",
  appId: "1:45799835882:web:0ac55c51efbb4c22e2ef93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app)