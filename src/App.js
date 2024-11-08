import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';
import Home from './component/Home';
import Splash from './component/Splash';
import SignUp from './component/Auth/SignUp';
import Auth from './component/Auth/Auth';
import Login from './component/Auth/Login';
import './style/main.css';
import './App.css';
import ProfileHeader from './component/ProfileHeader';

function App() {

  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);


  return (

      <div>
        {isSplashVisible ? (
          <Splash />
        ) : (
          <Routes>
            {/* <Route path="/" element={<Auth />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login/>} /> */}
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<ProfileHeader />} />
          </Routes>
        )}
      </div>

  );
}

export default App;