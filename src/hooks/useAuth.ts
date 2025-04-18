import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../lib/firebase/config";
import useAuthContext from "./useAuthContext";

export default function useAuth(isRegister: boolean) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState("");

  const { user } = useAuthContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess("");

    if (!error) {
      setTimeout(() => {
        setEmail("");
        setPassword("");
      }, 900);
    }

    if (user) {
      setError("User already logged.");
      return;
    }

    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
        setSuccess("User registered successfully 🎉");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        setSuccess("Welcome back! ✅");
      }

      setTimeout(() => setSuccess(""), 900);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return {
    email,
    password,
    error,
    success,
    handleSubmit,
    setEmail,
    setPassword,
  };
}
