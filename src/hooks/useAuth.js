import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN") {
          setUser(session.user);
        } else if (event === "SIGNED_OUT") {
          setUser(null);
        }
        setLoading(false);
      }
    );

    return () => authListener?.subscription?.unsubscribe();
  }, []);

  const signUp = useCallback(async (email, password) => {
    setError(null);
    setSuccess(null);
    setLoading(true);
    try {
      console.log("Signing up user:", email);
      const { data, error } = await supabase.auth.signUp({ email, password });

      console.log("Supabase Response:", data, error);

      if (error) throw error;
      if (!data.user)
        throw new Error("User creation failed, no user returned.");
      setSuccess("Sign-up successful! Check your email.");
      return data;
    } catch (err) {
      setError(err.message);
      console.error("Sign-up error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const login = useCallback(
    async (email, password) => {
      setError(null);
      setSuccess(null);
      setLoading(true);
      try {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        navigate("/home");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [navigate]
  );

  const logout = useCallback(async () => {
    try {
      setSuccess(null);
      await supabase.auth.signOut();
      navigate("/auth");
    } catch (err) {
      setError(err.message);
    }
  }, [navigate]);

  return { user, loading, error, signUp, login, logout };
};

export default useAuth;
