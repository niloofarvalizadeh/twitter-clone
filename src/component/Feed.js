import React, { useState } from "react";
import Tweet from "./Tweet";




const Feed = () => {
  const [tweets, setTweets] = useState([ // Each tweet should be displayed separately.
    { id: 1, text: "this is my first tweet!" },
    { id: 2, text: "Hello twitter!" }]);



  return (
    <div>
      {/* //rendering a list of tweets using map. */}
      {tweets.map(tweet => (         
      <Tweet key={tweet.id} text={tweet.text} />
      ))}

     
      <button className="tweet-btn post-btn">Post</button>
    </div>
   );
};
export default Feed;
