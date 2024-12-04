import React, { useEffect, useState } from "react";
import Tweetbox from "./Tweet/Tweetbox";
import { supabase } from "../supabaseClient";
import HomeHeader from "./HomeHeader";
import {Box} from "@mui/material";
import TimeLine from "./Tweet/TimeLine";

const Feed = () => {

  return (

    <div>
        <Box>
       <HomeHeader/>
       <Tweetbox/>
       <TimeLine/>
        </Box>
    </div>


    // <div>
    //   <Tweetbox onPost={addTweet} />
    //   {tweets.map((tweet) => (
    //     <div key={tweet.id}>
    //       <p>{tweet.content}</p>
    //       <small>{new Date(tweet.created_at).toLocaleString()}</small>
    //     </div>
    //   ))}
    // </div>
  );
};

export default Feed;
