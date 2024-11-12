// AuthProvider.js

import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
            if (session) {
                setUser(session.user);
                localStorage.setItem("user", JSON.stringify(session.user));
                navigate('/home');
            } else {
                setUser(null);
                localStorage.removeItem("user");
            }
        });

        return () => {
            authListener?.unsubscribe();
        };
    }, [navigate]);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
};

// استفاده از Context برای دسترسی به اطلاعات کاربر
export const useAuth = () => useContext(AuthContext);
