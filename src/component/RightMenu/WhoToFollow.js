import React from "react";
import { Avatar, Button, Typography, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const profiles = [
  { name: "Bessie Cooper", username: "@alessandroveronezi" },
  { name: "Jenny Wilson", username: "@gabrielcantarin" },
];

const WhoToFollow = () => {
  const buttonStyles = {
    color: "#1DA1F2",
    borderColor: "#1DA1F2",
    fontSize: "15px",
    borderRadius: "20px",
    textTransform: "none",
    height: "30px",
  };

  return (
    <Box
      sx={{
        width:'100%',
        height: "fit-content",
        borderRadius: 2,
        backgroundColor: "#F7F9FA",
        marginbottom: "200px",
      }}
    >
      <Box
        sx={{
          height: "50px",
          display: "flex",
          alignItems: "center",
          borderBottom: "2px solid #EBEEF0",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "black", fontSize: "20px" }}
        >
          Who to follow
        </Typography>
      </Box>

      {profiles.map((profile, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "69px",
            borderBottom: "2px solid #EBEEF0",
            paddingY: 2,
          }}
        >
          <Avatar alt={profile.name} src="" sx={{ width: 48, height: 48 }} />
          <Box sx={{ flexGrow: 1, marginLeft: 2 }}>
            <a href="" className="text-black font-bold">
              {profile.name}
            </a>
            <Typography variant="body2" sx={{ color: "#8899A6" }}>
              {profile.username}
            </Typography>
          </Box>
          <Button variant="outlined" sx={buttonStyles}>
            Follow
          </Button>
        </Box>
      ))}

      <Box
        sx={{
          height: "48px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          endIcon={<ExpandMoreIcon />}
          sx={{
            color: "#1DA1F2",
            fontWeight: 600,
            textTransform: "none",
            backgroundColor: "transparent",
            transition: "all 0.3s ease",
            borderRadius: "30px",
            px: 2,
            "&:hover": {
              transform: "scale(1.07)",
            },
          }}
        >
          Show more
        </Button>
      </Box>
    </Box>
  );
};

export default WhoToFollow;
