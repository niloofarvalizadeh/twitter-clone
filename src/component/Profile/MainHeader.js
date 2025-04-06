import React, { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
import {
  CircularProgress,
  Box,
  Typography,
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import CustomButton from "../CustomComponents/CustomButton";
import { LocationCityOutlined } from "@mui/icons-material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import useAuth from "../../hooks/useAuth";




const MainHeader = () => {
  const [profile, setProfile] = useState({
    profile_image: "",
    background_image: "",
    name: "",
    bio: "",
    location: "",
    website: "",
    id: "",
    birth_year: "",
  });

  const { user } = useAuth();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);

  // Get profile information from Supabase

  const fetchProfile = async () => {

    if (!user || !user.id) {
      console.error("🚨 User is not logged in or user ID is missing!");
      return;
    }
  
    console.log("✅ Fetching profile for user:", user.id);
  
    const { data, error } = await supabase
    .from("profiles")
    .select("profile_image, background_image, name, bio, location, website, birth_year")
    .eq("user_id", user.id)
    .maybeSingle();

  if (error) {
    console.error("🚨 Error fetching profile:", error.message);
    return;
  }

  if (!data) {
    console.warn("⚠️ No profile found for this user.");
    return;
  }

  setProfile({
    id: user.id,
    profile_image: data.profile_image || "",
    background_image: data.background_image || "",
    name: data.name || "",
    bio: data.bio || "",
    location: data.location || "",
    website: data.website || "",
    birth_year: data.birth_year || "",
  });
};


    
    // const user = await supabase.auth.getUser();

   
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = async (e, field) => {
    const file = e.target.files[0];
    if (!file) {
      alert("No file selected!");
      return;
    }

    setLoading(true);
    try {
      const user = await supabase.auth.getUser();
      const bucketName =
        field === "profile_image" ? "profile_images" : "background_images";
      const filePath = `${user.data.user.id}/${field}-${Date.now()}-${
        file.name
      }`;
      console.log("File Path:", filePath);

      const { data, error } = await supabase.storage
        .from(bucketName)
        .upload(filePath, file, { upsert: true });
      console.log("Bucket Name:", bucketName);

      if (error) {
        throw new Error(`Error uploading ${field}: ${error.message}`);
      }

      const { data: publicData, error: publicError } = supabase.storage
        .from(bucketName)
        .getPublicUrl(filePath);
      console.log("Public URL Error:", publicError);
      console.log("Public URL:", publicData?.publicUrl);

      if (publicError || !publicData?.publicUrl) {
        throw new Error(
          `Failed to retrieve public URL: ${publicError?.message}`
        );
      }

      setProfile((prev) => ({ ...prev, [field]: publicData.publicUrl }));
      alert("File uploaded successfully!");
    } catch (err) {
      console.error("File upload error:", err.message || err);
      alert(`File upload failed: ${err.message || "Unexpected error"}`);
    } finally {
      setLoading(false);
    }
  };

  // Send data to Supabase
  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (!user || !user.id) {
        throw new Error("User not found!");
      }

      // const user = await supabase.auth.getUser();

      const { error } = await supabase
        .from("profiles")
        //   .update(profile)
        //   .eq("user_id", user.data.user.id);
        .update({
          profile_image: profile.profile_image,
          background_image: profile.background_image,
          name: profile.name,
          bio: profile.bio,
          location: profile.location,
          website: profile.website,
          birth_year: profile.birth_year,
        })
        .eq("user_id", user.user.id);

      if (error) {
        throw new Error(error.message);
      }
      //   console.error("Error updating profile:", error);
      // } else {
      alert("Profile updated successfully!");
      setOpen(false);
      fetchProfile();
    } catch (err) {
      console.error("Error updating profile:", err.message);
      alert(`Update failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [user]);

  useEffect(() => {
    if (profile.profile_image || profile.background_image) {
      console.log("Profile image or background updated:", profile);
    }
  }, [profile.profile_image, profile.background_image]);

  return (
    <Box>
      {/* <div>
                <img src={profile.profile_image} alt="Profile" />
                <img src={profile.background_image} alt="Background" />
            </div> */}

      <Box
        sx={{
          position: "relative",
          width: "full",
          height: 420,
          backgroundImage: `url(${profile.background_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Background image Picture */}
        <Box
          sx={{
            height: 200,
            width: "100%",
            backgroundColor: "#EBEEF0",
            backgroundImage: `url(${profile.background_image})`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          {isImageLoading && (
            <CircularProgress
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          )}

          <img
            src={profile.background_image}
            alt="Background"
            style={{
              display: isImageLoading ? "none" : "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            onLoad={() => setIsImageLoading(false)}
          />
        </Box>

        {/* Profile Picture */}
        <Avatar
          alt="Profile"
          src={profile.profile_image || "/default-avatar.png"}
          onLoad={() => setIsImageLoading(false)}
          style={{ display: isImageLoading ? "none" : "block" }}
          sx={{
            position: "absolute",
            top: 120,
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
          {isImageLoading && <CircularProgress />}
        </Avatar>

        {/* Profile Information */}
        <Box
          sx={{
            backgroundColor: "#f7f9fa",
            height: 220,
            padding: 2,
            position: "relative",
          }}
        >
          <Box sx={{ position: "absolute", bottom: 20, left: 20 }}>
            <Typography variant="h6" fontWeight="bold">
              {profile.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              @biscuttu
            </Typography>
            <Typography variant="body2">{profile.bio}</Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "text.secondary",
                gap: 1,
                mt: 1,
              }}
            >
              <LocationCityOutlined fontSize="small" />
              <Typography variant="body2">{profile.location}</Typography>
              <AttachFileIcon fontSize="small" />
              <Typography variant="body2">
                <a href={profile.website}>{profile.website}</a>
              </Typography>
            </Box>

            <Box sx={{ mt: 1 }}>
              <Typography
                component="a"
                href="/following"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  fontWeight: "bold",
                  mr: 1,
                }}
              >
                569 Following
              </Typography>
              <Typography
                component="a"
                href="/followers"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  fontWeight: "bold",
                  ml: 1,
                }}
              >
                72 Followers
              </Typography>
            </Box>
          </Box>

          <CustomButton
            onClick={() => setOpen(true)}
            variant="outlined"
            text="Edit profile"
            textColor="white"
            hoverColor="#233142"
            width="150px"
            height="40px"
            fontSize="15px"
            bgColor="#1DA1F2"
            sx={{
              position: "absolute",
              bottom: 70,
              right: 20,
            }}
          />
        </Box>

        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          disableEnforceFocus
          disableAutoFocus
        >
          <DialogTitle>Edit profile</DialogTitle>

          <DialogContent>
            <Button variant="outlined" component="label" fullWidth>
              Upload Background Image
              <input
                type="file"
                hidden
                onChange={(e) => handleFileUpload(e, "background_image")}
              />
            </Button>
            {profile.background_image && (
              <img
                src={profile.background_image}
                alt="Background Preview"
                style={{ width: "100%", marginTop: 10 }}
              />
            )}

            <Button
              variant="outlined"
              component="label"
              fullWidth
              sx={{ mt: 2 }}
            >
              Upload Profile Image
              <input
                type="file"
                hidden
                onChange={(e) => handleFileUpload(e, "profile_image")}
              />
            </Button>
            {profile.profile_image && (
              <Avatar
                src={profile.profile_image}
                alt="Profile Preview"
                sx={{ width: 100, height: 100, mt: 2 }}
              />
            )}

            <TextField
              autoFocus
              margin="dense"
              name="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleChange}
              value={profile.name || ""}
            />
            <TextField
              margin="dense"
              name="bio"
              label="Bio"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleChange}
              value={profile.bio || ""}
            />
            <TextField
              margin="dense"
              name="location"
              label="Location"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleChange}
              value={profile.location || ""}
            />
            <TextField
              margin="dense"
              name="website"
              label="Website"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleChange}
              value={profile.website || ""}
            />
            <TextField
              margin="dense"
              name="birth_year"
              label="Year of Birth"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleChange}
              value={profile.birth_year || ""}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={handleSubmit} disabled={loading}>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default MainHeader;
