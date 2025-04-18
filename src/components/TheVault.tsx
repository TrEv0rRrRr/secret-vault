import useAuthContext from "../hooks/useAuthContext";
import LoginReminder from "./Vault/LoginReminder";
import SecretForm from "./Vault/SecretForm";
import Vault from "./Vault/Vault";

const TheVault = () => {
  const { user, loading } = useAuthContext();

  if (loading)
    return <p className="text-white">Checking your credentials...</p>;

  return (
    <>
      {!user ? (
        <LoginReminder />
      ) : (
        <div className="flex flex-col gap-10">
          <SecretForm />
          <Vault />
        </div>
      )}
    </>
  );
};

export default TheVault;
