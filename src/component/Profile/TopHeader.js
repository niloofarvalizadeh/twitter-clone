import React from "react";
import { IconButton, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const TopHeader = React.memo(({ name = "Name", tweetCount = 9 }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/home");
  };

  return (
    <Box className="h-[53px] w-full bg-Dark8 flex items-center border-b border-Dark7">
      <Box className="w-[59px] flex justify-center items-center">
        <IconButton onClick={handleBackClick}>
          <KeyboardBackspaceIcon
            className="text-Primary-Blue"
            sx={{ width: 40, height: 30 }}
          />
        </IconButton>
      </Box>

      <Box className="flex flex-col justify-center pl-2">
        <Typography sx={{ fontSize: 19, fontWeight: "bold", lineHeight: 1.2 }}>
          {name}
        </Typography>
        <Typography sx={{ fontSize: 13, color: "#5b7083", lineHeight: 1.2 }}>
          {tweetCount} Tweets
        </Typography>
      </Box>
    </Box>
  );
});
export default TopHeader;
