import Tweetbox from "./Tweet/Tweetbox";
import HomeHeader from "./HomeHeader";
import {Box} from "@mui/material";
// import TimeLine from "./Tweet/TimeLine";

const Feed = () => {

  return (
    <div>
        <Box>
       <HomeHeader/>
       <Tweetbox/>
       {/* <TimeLine/> */}
        </Box>
    </div>
  );
};

export default Feed;
