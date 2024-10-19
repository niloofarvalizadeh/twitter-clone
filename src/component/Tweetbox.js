import React from "react";
import { ImageSearchOutlined } from "@mui/icons-material";
import { GifBoxOutlined } from "@mui/icons-material";
import { PollOutlined } from "@mui/icons-material";
import { EmojiEmotionsOutlined } from "@mui/icons-material";
import { ScheduleSendOutlined } from "@mui/icons-material";
import { TextField } from "@mui/material";
import Avatar from '@mui/material/Avatar';

function Tweetbox() {
  const icons = [
    ImageSearchOutlined,
    GifBoxOutlined,
    PollOutlined,
    EmojiEmotionsOutlined,
  ];

  return (
    <div className=" w-[500px] h-[118px] p-4 flex items-start border border-Dark7">
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

          <button className="tweet-btn post-btn flex items-center justify-center ml-auto">
            Post
          </button>
        </div></div></div>
  );
}

export default Tweetbox;
