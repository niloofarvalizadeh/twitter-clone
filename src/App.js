import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';
import Home from './component/Home';
import Splash from './component/Splash';
import Auth from './component/Auth/Auth';
import './style/main.css';
import UserProfilePage from './pages/UserProfilePage';

function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data?.session || null);

      if (!data?.session) {
        navigate('/');
      }
    };

    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        setSession(session);
        localStorage.setItem("user", JSON.stringify(session.user));
        navigate('/home');
      } else if (event === 'SIGNED_OUT') {
        setSession(null);
        localStorage.removeItem("user");
        navigate('/');
      }
    });

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, [navigate]);

  return (
    <div>
      {isSplashVisible ? (
        <Splash />
      ) : (
        <Routes>
          {session ? (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/userprofilepage" element={<UserProfilePage />} />
            </>
          ) : (
            <Route path="/" element={<Auth />} />
          )}
         {/* Redirect to the Auth page if the path is wrong */}
          <Route path="*" element={<Auth />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
