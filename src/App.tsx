import AuthForm from "./components/Auth/AuthForm";
import LogOut from "./components/Auth/LogOut";
import SecretForm from "./components/Vault/SecretForm";
import AuthProvider from "./contexts/AuthContext/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <main className="flex flex-col gap-10 w-full">
        <div className="flex flex-col gap-10">
          <AuthForm />
          <LogOut />
        </div>
        <SecretForm />
      </main>
    </AuthProvider>
  );
}

export default App;
