import { User } from "firebase/auth";
import { createContext } from "react";

type AuthContextType = {
  user: User | null;
  loading: boolean;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  logout: () => {},
});
