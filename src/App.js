import { useState } from "react";
import SignupPage from "./pages/SignupPage";
import FormLogin from "./components/Login/FormLogin";
import LoginPage from "./pages/LoginPage";
import Router from "./router";
import AuthProvider from "./components/contexts/AuthContext";
import ThemeProvider from "./components/contexts/ThemeContext";
function App() {
  const [setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <div className='buttonlogin'>
    
      <AuthProvider> 
         <ThemeProvider>
           <Router/>
         </ThemeProvider>
      </AuthProvider>
    </div>


  );
}

export default App;