import React, { useState } from "react";  // اضافه کردن useState
import {
  ImageSearchOutlined,
  GifBoxOutlined,
  PollOutlined,
  EmojiEmotionsOutlined,
} from "@mui/icons-material";
import { TextField, Avatar, Box, IconButton } from "@mui/material";
import PostBtn from "./Post-btn";

function Tweetbox({ onPost }) {
  const icons = [
    ImageSearchOutlined,
    GifBoxOutlined,
    PollOutlined,
    EmojiEmotionsOutlined,
  ];

  const [content, setContent] = useState("");

  const handlePost = () => {
    if (content.trim()) {
      onPost(content);
      setContent("");
    }
  };

  return (
    <Box sx={{ width: "100%", padding: 2, display: "flex", bgcolor: "white" }}>
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
            sx: { fontSize: "1.25rem" },
          }}
        />
       <button onClick={handlePost}>Post</button>
      </Box>
    </Box>
  );
}


export default Tweetbox;
