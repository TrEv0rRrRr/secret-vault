import { createContext } from "react";

export type Id = `${string}-${string}-${string}-${string}-${string}`;

export type Secret = {
  id: Id;
  secret: string;
};

type SecretContextType = {
  secrets: Secret[];
  addSecret: (secret: string) => void;
  deleteSecret: (id: Id) => void;
};

export const SecretContext = createContext<SecretContextType>({
  secrets: [],
  addSecret: () => {},
  deleteSecret: () => {},
});
