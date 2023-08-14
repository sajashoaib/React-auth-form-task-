import { Suspense, useState } from "react";
import Router from "./router";
import AuthProvider from "./components/contexts/AuthContext";
import ThemeProvider from "./components/contexts/ThemeContext";
import Preload from "./components/Preload";

function App() {
  const [setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <div className="buttonlogin">
      <AuthProvider>
        <ThemeProvider>
          <Suspense fallback={<Preload />}>
            <Router />
          </Suspense>
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
