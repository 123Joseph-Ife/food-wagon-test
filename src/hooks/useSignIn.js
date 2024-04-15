import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../config/firebase.";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";

export const useSignIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const nav = useNavigate()

  const signInWithGoogle = () => {
    return signInFirst();
  };

  const signInFirst = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      localStorage.setItem(
        "auth",
        JSON.stringify({
          isAuth: true,
          email: auth?.currentUser?.email,
          profilePhoto: auth?.currentUser?.photoURL,
        })
      );
      nav("/")
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };

  const signInWithEmail = async () => {
    try {
      if (pass.length > 6) {
        await createUserWithEmailAndPassword(auth, email, pass);
      }
      localStorage.setItem(
        "auth",
        JSON.stringify({ isAuth: true, email: auth?.currentUser?.email })
      );
      nav("/")
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };
  return { signInWithEmail, signInWithGoogle, setEmail, setPass, email, pass }
}