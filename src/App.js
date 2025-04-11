import React, { useEffect, useState } from "react";
import { Route, Routes} from "react-router-dom";
import Home from "./component/Home";
import Splash from "./component/Splash";
import Auth from "./component/Auth/Auth";
import { LoginModalProvider } from "./context/LoginModalContext";
import "./style/main.css";
import UserProfilePage from "./pages/UserProfilePage";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import { useContext } from "react";

export default function AppWrapper() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const { session, loading } = useContext(AuthContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LoginModalProvider>
      {isSplashVisible || loading ? (
        <Splash />
      ) : (
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<Home />} />
          <Route path="/userprofilepage" element={<UserProfilePage />} />
          <Route path="*" element={<Auth />} />
        </Routes>
      )}
    </LoginModalProvider>
  );
}