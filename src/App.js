import { useState } from "react";
import SignupPage from "./pages/SignupPage";
import FormLogin from "./components/Login/FormLogin";
import LoginPage from "./pages/LoginPage";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <div className='buttonlogin'>
       {isLoggedIn ? (
        <SignupPage/>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
      {/* <SignupPage /> */}
    </div>


  );
}

export default App;