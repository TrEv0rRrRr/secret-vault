import clsx from "clsx";
import useAuthContext from "../../hooks/useAuthContext";
import Button from "../Button";

const LogOut = () => {
  const { user, logout } = useAuthContext();
  
  return (
    <Button
      className={clsx("text-white bg-red-500 hover:bg-red-600", {
        block: user,
        hidden: !user,
      })}
      onClick={logout}
      text="LogOut"
    />
  );
};

export default LogOut;
