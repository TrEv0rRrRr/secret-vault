import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";

export default function useAuthContext() {
  return useContext(AuthContext);
}
