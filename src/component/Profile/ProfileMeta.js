import React from "react";
import { Box, Typography } from "@mui/material";
import LocationCityOutlined from "@mui/icons-material/LocationCityOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const ProfileMeta = React.memo(({ location, website }) => {
  const metaItems = [];

  if (location) {
    metaItems.push({
      icon: <LocationCityOutlined fontSize="small" />,
      text: location,
    });
  }

  if (website) {
    metaItems.push({
      icon: <AttachFileIcon fontSize="small" />,
      text: (
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          {website.replace(/^https?:\/\//, "")}
        </a>
      ),
    });
  }
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        color: "text.secondary",
        gap: 2,
        flexWrap: "wrap",
        mt: 1,
      }}
    >
      {metaItems.map((item, index) => (
        <Box
          key={index}
          sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
        >
          {item.icon}
          <Typography variant="body2">{item.text}</Typography>
        </Box>
      ))}
    </Box>
  );
});

export default ProfileMeta;
