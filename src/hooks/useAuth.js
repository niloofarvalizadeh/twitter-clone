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
          localStorage.setItem("user", JSON.stringify(session.user));
        } else if (event === "SIGNED_OUT") {
          setUser(null);
          localStorage.removeItem("user");
          navigate("/auth");
        }
        setLoading(false);
      }
    );

    return () => authListener?.subscription?.unsubscribe();
  }, [navigate]);

  const signUp = useCallback(async (email, password) => {
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      console.log("Signing up user:", email);
      const { data, error } = await supabase.auth.signUp({ email, password });

      if (error) throw error;
      if (!data.user)
        throw new Error("User creation failed, no user returned.");

      // adding user to Users Table
      const { error: userInsertError } = await supabase
        .from("users")
        .insert([{ user_id: data.user.id, email }]);

      if (userInsertError) {
        console.error(
          "Error inserting user into users table:",
          userInsertError.message
        );
      }

      // adding user to Profiles Table

      const { error: profileInsertError } = await supabase
        .from("profiles")
        .insert([
          {
            user_id: data.user.id,
            profile_image: "",
            background_image: "",
            name: "",
            bio: "",
            location: "",
            website: "",
            birth_year: "",
          },
        ]);

      if (profileInsertError) {
        console.error(
          "Error inserting user into profiles table:",
          profileInsertError.message
        );
      }

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
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        setUser(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/home");
      } catch (err) {
        setError(err.message);
        console.error("Login error:", err.message);
      } finally {
        setLoading(false);
      }
    },
    [navigate]
  );

  // try {
  //   const { error } = await supabase.auth.signInWithPassword({
  //     email,
  //     password,
  //   });

  const logout = useCallback(async () => {
    try {
      setSuccess(null);
      await supabase.auth.signOut();
      setUser(null);
      localStorage.removeItem("user");
      navigate("/auth");
    } catch (err) {
      setError(err.message);
    }
  }, [navigate]);

  return { user, loading, error, success, signUp, login, logout };
};

export default useAuth;
