import clsx from "clsx";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAuthContext from "../../hooks/useAuthContext";
import Button from "../Button";

const AuthForm = () => {
  const [isRegister, setIsRegister] = useState(true);
  const { user } = useAuthContext();

  const {
    email,
    error,
    handleSubmit,
    password,
    success,
    setEmail,
    setPassword,
  } = useAuth(isRegister);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-xs mx-auto mt-10"
    >
      <h2 className="text-xl font-bold text-center text-white">
        {!isRegister || user ? "Login" : "Register"}
      </h2>

      <input
        type="email"
        autoComplete="email"
        placeholder="Email"
        className="border rounded p-2 bg-white"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        autoComplete="current-password"
        placeholder="Password"
        className="border rounded p-2 bg-white"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        type="submit"
        className={clsx("text-white", {
          "bg-blue-600 hover:bg-blue-700": isRegister || !user,
          "bg-green-600 hover:bg-green-700": !isRegister || user,
        })}
        text={!isRegister || user ? "Log In" : "Sign Up"}
      />

      <Button
        className="bg-yellow-400 hover:bg-yellow-500"
        onClick={() => setIsRegister(!isRegister)}
        type="button"
        text={isRegister || !user ? "Go to Login" : "Go to Register"}
      />
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-600">{success}</p>}
    </form>
  );
};

export default AuthForm;
