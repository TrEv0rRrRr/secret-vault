import { useEffect, useState } from "react";
import { PLACEHOLDERS } from "../consts/Placeholder";
import getErrorMessage from "../helpers/getErrorMessage";

export default function useSecret() {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [secret, setSecret] = useState("");
  const [secrets, setSecrets] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

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

    setSecrets((prev) => [...prev, secret]);

    setSecret("");

    localStorage.setItem("secrets", JSON.stringify([...secrets, secret]));
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSecret(e.target.value);
    if (error) setError(null);
  };

  return {
    placeholderIndex,
    secret,
    secrets,
    error,
    handleSubmit,
    handleChange,
  };
}
