import { useEffect, useState } from "react";
import { PLACEHOLDERS } from "../consts/Placeholder";
import getErrorMessage from "../helpers/getErrorMessage";
import useSecretContext from "./useSecretContext";

export default function useSecret() {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [secret, setSecret] = useState("");
  const [error, setError] = useState<string | null>(null);

  const { addSecret } = useSecretContext();

  useEffect(() => {
    const interval = setInterval(
      () => setPlaceholderIndex((prev) => (prev + 1) % PLACEHOLDERS.length),
      10000
    );

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!secret.trim()) {
      setError(getErrorMessage());
      return;
    }

    setSecret("");

    addSecret(secret);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSecret(e.target.value);
    if (error) setError(null);
  };

  return {
    placeholderIndex,
    secret,
    error,
    handleSubmit,
    handleChange,
  };
}
