import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4W00hT2WJjvIZbNO-LKcIfO96o1-fn8w",
  authDomain: "food-wagon-5bf75.firebaseapp.com",
  projectId: "food-wagon-5bf75",
  storageBucket: "food-wagon-5bf75.appspot.com",
  messagingSenderId: "469959167190",
  appId: "1:469959167190:web:beb84338203b26b4e58d77"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();