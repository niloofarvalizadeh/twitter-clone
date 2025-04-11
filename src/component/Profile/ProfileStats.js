import React from "react";
import { Box, Typography } from "@mui/material";

const ProfileStats = React.memo(() => {
  const stats = [
    { label: "Following", count: 569, href: "/following" },
    { label: "Followers", count: 72, href: "/followers" },
  ];

  return (
    <Box sx={{ mt: 1 }}>
      {stats.map(({ label, count, href }, index) => (
        <Typography
          key={label}
          component="a"
          href={href}
          sx={{
            textDecoration: "none",
            color: "inherit",
            fontWeight: "bold",
            mx: 1,
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          {count} {label}
        </Typography>
      ))}
    </Box>
  );
});

export default ProfileStats;
