import React, { useState, useEffect, useCallback } from "react";
import { Box, Avatar, CircularProgress, Snackbar, Alert } from "@mui/material";
import BackgroundImage from "./BackgroundImage";
import EditDialog from "./EditDialog";
import ProfileInfo from "./ProfileInfo";
import { supabase } from "../../supabaseClient";
import {AuthContext} from '../../context/AuthContext';
import { useContext } from "react";

const initialProfileState = {
  profile_image: "",
  background_image: "",
  name: "",
  bio: "",
  location: "",
  website: "",
  id: "",
  birth_year: "",
};

export default function MainHeader() {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState(initialProfileState);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState({
    profile: false,
    background: false,
    submit: false,
    fetch: false,
  });
  const [message, setMessage] = useState("");
  const [alertType, setAlertType] = useState("error");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // * Fetch user profile data

  const fetchProfile = useCallback(async () => {
    if (!user?.id) return;

    setLoading((prev) => ({ ...prev, fetch: true }));

    try {
      const { data, error: fetchError } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle();

      if (fetchError || !data)
        throw fetchError || new Error("No profile data found");

      setProfile({ ...initialProfileState, ...data, id: user.id });
    } catch (err) {
      showError("Failed to load profile data");
    } finally {
      setLoading((prev) => ({ ...prev, fetch: false }));
    }
  }, [user]);

  //* Handle file upload to Supabase storage

  const handleFileUpload = async (e, field) => {
    console.log("Uploading file for field:", field);
    const file = e.target.files[0];
    if (!file) return;

    // Check if user is defined
    if (!user?.id) {
      showError("User is not logged in.");
      return;
    }

    //* Validate file type
    if (!file.type.startsWith("image/")) {
      showError("Please upload an image file");
      return;
    }

    setLoading((prev) => ({ ...prev, [field]: true }));

    try {
      const bucketName =
        field === "profile_image" ? "profile_images" : "background_images";
      const filePath = `${user.id}/${field}-${Date.now()}-${file.name}`;

      //* Upload file
      const { error } = await supabase.storage
        .from(bucketName)
        .upload(filePath, file, { upsert: true });
      if (error) throw error;

      //* Get public URL
      // const { data } = supabase.storage.from(bucketName).getPublicUrl(filePath);
      const { data, error: urlError } = supabase.storage
        .from(bucketName)
        .getPublicUrl(filePath);

      if (urlError || !data?.publicUrl) {
        throw urlError || new Error("No public URL returned");
      }

      console.log("Public URL:", data.publicUrl);

      setProfile((prev) => ({ ...prev, [field]: data.publicUrl }));
    } catch (err) {
      console.error("Upload error:", err);
      showError(`Failed to upload ${field.replace("_", " ")}`);
    } finally {
      setLoading((prev) => ({ ...prev, [field]: false }));
    }
  };

  //  * Save profile changes
  const handleSubmit = async () => {
    if (!user?.id) return showError("User not found");
    if (!profile.name.trim()) return showError("Name is required");

    setLoading((prev) => ({ ...prev, submit: true }));

    try {
      const { error } = await supabase
        .from("profiles")
        .update({
          profile_image: profile.profile_image,
          background_image: profile.background_image,
          name: profile.name.trim(),
          bio: profile.bio.trim(),
          location: profile.location.trim(),
          website: validateWebsite(profile.website),
          birth_year: profile.birth_year,
        })
        .eq("user_id", user.id);

      if (error) throw error;

      setOpen(false);
      fetchProfile();
      showSuccess("Profile updated successfully!");
    } catch (err) {
      showError("Failed to update profile");
    } finally {
      setLoading((prev) => ({ ...prev, submit: false }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const validateWebsite = (url) => {
    if (!url) return "";
    return url.startsWith("http") ? url : `https://${url}`;
  };

  //* Snackbar helpers
  const showError = (msg) => {
    setMessage(msg);
    setAlertType("error");
    setSnackbarOpen(true);
  };

  const showSuccess = (msg) => {
    setMessage(msg);
    setAlertType("success");
    setSnackbarOpen(true);
  };

  //* Effects

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return (
    <Box sx={{ position: "relative", width: "100%", height: "200px" }}>
      {/* Background Image Section */}
      <BackgroundImage
        imageUrl={profile.background_image}
        loading={loading.background}
      />

      {/* Profile Avatar */}

      <Avatar
        alt="Profile"
        src={profile.profile_image || "/default-avatar.png"}
        sx={{
          position: "absolute",
          bottom: "-70px",
          left: 20,
          width: 140,
          height: 140,
          backgroundColor: "#f3f4f6",
          border: "2px solid #ddd",
          zIndex: 2,
          cursor: "pointer",
          "&:hover": {
            boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)",
            backgroundColor: "#e0e7ff",
            borderColor: "#1DA1F2",
          },
        }}
      >
        {loading.profile && <CircularProgress />}
      </Avatar>

      {/* Profile Info Section */}
      <ProfileInfo
        profile={profile}
        loading={loading.fetch}
        onEditClick={() => setOpen(true)}
      />

      {/* Edit Profile Dialog */}
      <EditDialog
        open={open}
        onClose={() => setOpen(false)}
        profile={profile}
        loading={loading}
        onChange={handleChange}
        onFileUpload={handleFileUpload}
        onSubmit={handleSubmit}
      />

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity={alertType}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
