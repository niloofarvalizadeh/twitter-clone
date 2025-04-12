import Tweetbox from "./Tweet/Tweetbox";
import HomeHeader from "./HomeHeader";
import {Box} from "@mui/material";

const Feed = () => {

  return (
    <div>
        <Box>
       <HomeHeader/>
       <Tweetbox/>
        </Box>
    </div>
  );
};

export default Feed;
