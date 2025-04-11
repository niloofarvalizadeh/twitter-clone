import React from 'react';
import { Box, CircularProgress } from "@mui/material";

const BackgroundImage = React.memo(({ imageUrl, loading }) => (
  <Box
    sx={{
      height: 200,
      width: "100%",
      backgroundColor: "#EBEEF0",
      backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    }}
    aria-label="Profile background image"
  >
    {loading && (
      <CircularProgress
        sx={{
          position: "absolute",
          color: "primary.main",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />
    )}
  </Box>
));

export default BackgroundImage;