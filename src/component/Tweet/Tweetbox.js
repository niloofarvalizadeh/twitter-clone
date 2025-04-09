import React, { useState } from "react";
import { TextField, Avatar, Box, IconButton, Snackbar } from "@mui/material";
import { IoImageOutline } from "react-icons/io5";
import { AiOutlineGif } from "react-icons/ai";
import { LiaPollHSolid } from "react-icons/lia";
import { BsEmojiSmile } from "react-icons/bs";
import { RiCalendarScheduleLine } from "react-icons/ri";
import CustomButton from '../CustomComponents/CustomButton';


export default function Tweetbox({ onPost }) {
  const [content, setContent] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handlePost = () => {
    if (content.trim()) {
      onPost(content);
      setContent("");
    } else {
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        paddingTop: 2,
        paddingLeft: 2,
        paddingRight: 2,
        display: "flex",
        borderBottom: "2px solid #EBEEF0",
      }}
    >
      <Avatar sx={{ marginRight: 2 }} />

      <Box sx={{ width: "100%" }}>
        <TextField
          variant="standard"
          placeholder="What's happening?"
          fullWidth
          value={content}
          onChange={(e) => setContent(e.target.value)}
          InputProps={{
            disableUnderline: true,
            sx: {
              fontSize: "1.25rem",
              "& .MuiInputBase-input::placeholder": {
                fontSize: "18px",
                color: "black",
                letterSpacing: "0.5px",
              },
            },
          }}
        />

        <Box className="w-full h-[60px] flex justify-between items-center">
          <Box className="h-fit flex space-x-[2px] w-fit">
            <IconButton>
              <IoImageOutline className="text-[#1DA1F2] text-[25px] hover:text-[#1664b3] transition duration-300" />
            </IconButton>
            <IconButton>
              <AiOutlineGif className="text-[#1DA1F2] text-[25px] hover:text-[#1664b3] transition duration-300" />
            </IconButton>
            <IconButton>
              <LiaPollHSolid className="text-[#1DA1F2] text-[25px] hover:text-[#1664b3] transition duration-300" />
            </IconButton>
            <IconButton>
              <BsEmojiSmile className="text-[#1DA1F2] text-[25px] hover:text-[#1664b3] transition duration-300" />
            </IconButton>
            <IconButton>
              <RiCalendarScheduleLine className="text-[#1DA1F2] text-[25px] hover:text-[#1664b3] transition duration-300" />
            </IconButton>
          </Box>

          <CustomButton
            onClick={handlePost}
            bgColor="#1DA1F2"
            text="Post"
            textColor="white"
            fontSize="16px"
            height="40px"
            width="80px"
            fontWeight="bold"
            hoverColor="#1664b3"
          />
        </Box>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Content cannot be empty!"
        sx={{ bottom: 100 }}
      />
    </Box>
  );
}

