import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import ProfileMeta from "./ProfileMeta";
import ProfileStats from "./ProfileStats";
import CustomButton from '../CustomComponents/CustomButton';

const ProfileInfo = React.memo(({ profile, loading, onEditClick }) => {
  if (loading) {
    return (
      <Box
        sx={{
          height: 220,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  const username =
    profile.name?.toLowerCase().replace(/\s+/g, "") || "username";

  return (
    <Box
      sx={{
        backgroundColor: "#f7f9fa",
        height: 220,
        padding: 2,
        position: "relative",
        borderRadius: 2,
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      }}
    >
      <Box sx={{ position: "absolute", bottom: 20, left: 20 }}>
        <Typography variant="h6" fontWeight="bold">
          {profile.name || "Unnamed"}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
          @{username}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          {profile.bio || "No bio available."}
        </Typography>

        <ProfileMeta
          location={profile.location}
          website={profile.website}
        />

        <ProfileStats />
      </Box>

      <CustomButton
        onClick={onEditClick}
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
          transition: "all 0.3s ease",
        }}
      />
    </Box>
  );
});

export default ProfileInfo;