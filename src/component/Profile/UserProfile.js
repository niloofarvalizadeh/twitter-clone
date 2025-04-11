import React from "react";
import TopHeader from "./TopHeader";
import MainHeader from "./MainHeader";
import { Box } from "@mui/material";

const UserProfile = React.memo(() => {
  return (
    <Box sx={{ width: "100%", height: "fit-content" }}>
      <TopHeader />
      <MainHeader />
    </Box>
  );
});

export default UserProfile;
