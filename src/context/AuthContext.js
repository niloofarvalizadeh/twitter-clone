import React, { createContext, useState, useEffect, useContext } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        setError(error.message);
        throw error;
      }
      setSession(data.session);
      setUser(data.user);
      navigate("/home");
      return true;
    } catch (error) {
      console.error("Login error:", error.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email, password, username) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        throw error;
      }

      await supabase.from("users").insert([
        {
          user_id: data.user.id,
          email,
          username,
        },
      ]);

      setSession(data.session);
      setUser(data.user);
      navigate("/home");
      return true;
    } catch (err) {
      console.error("Sign-up error:", err.message);
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        setSession(data?.session || null);
        setUser(data?.session?.user || null);
      } catch (error) {
        console.error("Error fetching session:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      setUser(session?.user || null);

      if (event === "SIGNED_IN") {
        const currentPath = window.location.pathname;
        if (!["/home", "/userprofilepage"].includes(currentPath)) {
          navigate("/home");
        }
      }

      if (event === "SIGNED_OUT") {
        navigate("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);


  return (
    <AuthContext.Provider
      value={{ user, session, loading, login, signUp, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthContext };
