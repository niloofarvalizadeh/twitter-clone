import React, { useState } from "react";
import Tweet from "./Tweet";
import Tweetbox from "./Tweetbox";
import TweetActions from "./TweetActions";





const Feed = () => {
  
  const [tweets, setTweets] = useState([ // Each tweet should be displayed separately.
    { id: 1, text: "this is my first tweet!" },
    ]);



  return (
    <div>
      
      <Tweetbox/>
      {/* //rendering a list of tweets using map. */}
      {tweets.map(tweet => (   

      <Tweet key={tweet.id} text={tweet.text} />
      ))}

     
 
    </div>
   );
};
export default Feed;
