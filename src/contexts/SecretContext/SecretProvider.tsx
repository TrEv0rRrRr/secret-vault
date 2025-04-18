import { useState } from "react";
import { type Id, type Secret, SecretContext } from "./SecretContext";

export default function SecretProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [secrets, setSecrets] = useState<Secret[]>([]);

  const addSecret = (secret: string) => {
    const newSecret = { id: crypto.randomUUID(), secret };
    setSecrets((prev) => [...prev, newSecret]);
  };

  const deleteSecret = (id: Id) =>
    setSecrets((prev) => prev.filter((secret) => secret.id !== id));

  return (
    <SecretContext.Provider value={{ secrets, addSecret, deleteSecret }}>
      {children}
    </SecretContext.Provider>
  );
}
