import { useState } from "react";
import SignupPage from "./pages/SignupPage";
import FormLogin from "./components/Login/FormLogin";
import LoginPage from "./pages/LoginPage";
import Router from "./router";
import AuthProvider from "./components/contexts/AuthContext";
import SideBar from "./components/Games/SideBar";
import Games from "./components/Games";
import UsersPage from "./pages/UsersPage";
import ThemeProvider from "./components/contexts/ThemeContext";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <div className='buttonlogin'>
    
      <AuthProvider> 
         <ThemeProvider>
           <Router/>
      {/* <SideBar/> */}
      {/* <Games/> */}
      </ThemeProvider>
      </AuthProvider>
    </div>


  );
}

export default App;