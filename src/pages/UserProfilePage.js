import React from 'react';
import Sidebar from '../component/Sidebar';
import News from '../component/RightMenu/News';
import WhoToFollow from '../component/RightMenu/WhoToFollow';
import UserProfile from '../component/Profile/UserProfile';
import { Box } from '@mui/material';
import SearchBar from '../component/RightMenu/SearchBar';
import Rightmenu from '../component/RightMenu/Rightmenu';

const UserProfilePage = () => {
  return (
    <Box className="body">

      <Box className="section-1"><Sidebar /></Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <UserProfile />
      </Box>

      <Box>
       <Rightmenu/>
      </Box>
    </Box>
  );
};


export default UserProfilePage;
