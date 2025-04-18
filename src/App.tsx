import AuthForm from "./components/Auth/AuthForm";
import LogOut from "./components/Auth/LogOut";
import TheVault from "./components/TheVault";
import AuthProvider from "./contexts/AuthContext/AuthProvider";
import SecretProvider from "./contexts/SecretContext/SecretProvider";

function App() {
  return (
    <AuthProvider>
      <SecretProvider>
        <main className="flex flex-col gap-10 w-full">
          <div className="flex flex-col gap-10">
            <AuthForm />
            <LogOut />
          </div>
          <TheVault />
        </main>
      </SecretProvider>
    </AuthProvider>
  );
}

export default App;
