import React, { useEffect, useState } from "react";
import Tweetbox from "./Tweet/Tweetbox";
import { supabase } from "../supabaseClient";
import HomeHeader from "./HomeHeader";
import {Box} from "@mui/material";
import TimeLine from "./Tweet/TimeLine";

const Feed = () => {
  // const [tweets, setTweets] = useState([]);

  // const fetchTweets = async () => {
  //   const { data, error } = await supabase
  //     .from('tweets')
  //     .select('*')
  //     .order('created_at', { ascending: false });

  //   if (error) {
  //     console.error('Error fetching tweets:', error);
  //   } else {
  //     setTweets(data);
  //   }
  // };

  // const updateLikes = async (tweetId, newLikeCount) => {
  //   const { data, error } = await supabase
  //     .from('tweets')
  //     .update({ likes: newLikeCount })
  //     .eq('id', tweetId);

  //   if (error) {
  //     console.error('Error updating likes:', error);
  //   } else {
  //     console.log('Likes updated:', data);
  //   }
  // };

  // const deleteTweet = async (tweetId) => {
  //   const { data, error } = await supabase
  //     .from('tweets')
  //     .delete()
  //     .eq('id', tweetId);

  //   if (error) {
  //     console.error('Error deleting tweet:', error);
  //   } else {
  //     console.log('Tweet deleted:', data);
  //     setTweets((prevTweets) => prevTweets.filter((tweet) => tweet.id !== tweetId));
  //   }
  // };

  // useEffect(() => {
  //   fetchTweets();
  // }, []);

  // const addTweet = async (content) => {
  //   const { data, error } = await supabase
  //     .from('tweets')
  //     .insert([
  //       { content}
  //     ]);

  //   if (error)
  //     console.error('Error creating tweet:', error);
  //   else  
  //   setTweets(prevTweets => [data[0], ...prevTweets]);
  // };


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
