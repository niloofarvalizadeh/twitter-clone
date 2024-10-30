import React from "react";
import { ImageSearchOutlined } from "@mui/icons-material";
import { GifBoxOutlined } from "@mui/icons-material";
import { PollOutlined } from "@mui/icons-material";
import { EmojiEmotionsOutlined } from "@mui/icons-material";
import { ScheduleSendOutlined } from "@mui/icons-material";
import { TextField } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import PostBtn from "./Post-btn";

function Tweetbox() {
  const icons = [
    ImageSearchOutlined,
    GifBoxOutlined,
    PollOutlined,
    EmojiEmotionsOutlined,
  ];

  return (
    <div className=" w-full h-[118px] p-4 mr-0 flex items-start  border-b-2 bg-white">
      <Avatar alt="User Avatar" src="/static/images/avatar/1.jpg" className="mr-4" />

      <div className="w-full">
        <TextField
          variant="standard"
          placeholder="What's happening?"
          InputProps={{
            disableUnderline: true,
            className: "text-xl",
          }}
        />

        <div className="h-[70px] flex items-center justify-between">
          <div id="Actions" className="flex items-center space-x-4">

            {icons.map((Icon, index) => (
              <Icon key={index} sx={{ color: '#1DA1F2' }}>
              </Icon>
            ))}

          </div>

          <PostBtn/>
          
        </div></div></div>
  );
}

export default Tweetbox;
