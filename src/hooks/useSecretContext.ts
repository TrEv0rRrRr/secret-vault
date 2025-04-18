import { useContext } from "react";
import { SecretContext } from "../contexts/SecretContext/SecretContext";

export default function useSecretContext() {
  return useContext(SecretContext);
}
