import React from "react";
import { Avatar, CircularProgress } from "@mui/material";


const ProfileImage = React.memo(({ imageUrl, loading }) => (
  <Avatar
    src={imageUrl || "/default-avatar.png"}
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
      transition: "all 0.3s ease",
      "&:hover": {
        boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)",
        backgroundColor: "#e0e7ff",
        borderColor: "#1DA1F2",
      },
    }}
  >
    {loading && (
      <CircularProgress
        size={32}
        thickness={4}
        sx={{ color: "primary.main" }}
      />
    )}
  </Avatar>
));

export default ProfileImage;