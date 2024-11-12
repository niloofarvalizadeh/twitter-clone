import React, { useState } from "react";
import { TextField, Avatar, Box, } from "@mui/material";
import { IoImageOutline } from "react-icons/io5";
import { AiOutlineGif } from "react-icons/ai";
import { LiaPollHSolid } from "react-icons/lia";
import { BsEmojiSmile } from "react-icons/bs";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { IconButton } from '@mui/material';
import CustomButton from '../CustomComponents/CustomButton';


function Tweetbox({ onPost }) {

  const [content, setContent] = useState("");

  const handlePost = () => {
    if (content.trim()) {
      onPost(content);
      setContent("");
    }
  };

  return (

    <Box sx={{ width: "100%", paddingTop: 2, paddingLeft: 2, paddingRight: 2, display: "flex"}}>

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
              <IoImageOutline className="text-[#1DA1F2] text-[25px]" />
            </IconButton>

            <IconButton>
              <AiOutlineGif className="text-[#1DA1F2] text-[25px]" />
            </IconButton>

            <IconButton>
              <LiaPollHSolid className="text-[#1DA1F2] text-[25px]" />
            </IconButton>

            <IconButton>
              <BsEmojiSmile className="text-[#1DA1F2] text-[25px]" />
            </IconButton>

            <IconButton >
              <RiCalendarScheduleLine className="text-[#1DA1F2] text-[25px]" />
            </IconButton>

          </Box>

          <CustomButton
           onClick={handlePost}
           bgColor= '#1DA1F2'
           text='Post'
           textColor='white'
           fontSize="16px"
           height="40px"
           width="80px"
          fontWeight='bold'
          hoverColor='#1664b3'
           />
        </Box>

      </Box>
    </Box>

  );
}


export default Tweetbox;
