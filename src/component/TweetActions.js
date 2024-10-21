import React from 'react';
import { IconButton, Typography } from '@mui/material';
import { ChatBubbleOutline, Repeat, Favorite, Share } from '@mui/icons-material';
import { CardContent } from '@mui/material';


const ActionButton = ({ icon, count, color }) => (
  <IconButton aria-label={icon} sx={{ display: 'flex', alignItems: 'center' }}>
    {icon}
    <Typography variant="body2" sx={{ marginLeft: '8px', color: color || 'inherit' }}>
      {count}
    </Typography>
  </IconButton>
);

const TweetActions = () => {
  return (
    <CardContent sx={{
      display: 'flex',
      justifyContent: 'center',
      gap: '60px',
      position: 'relative',
      top: '-8px'
    }}>
      <ActionButton icon={<ChatBubbleOutline />} count={61} />
      <ActionButton icon={<Repeat />} count={12} />
      <ActionButton icon={<Favorite sx={{ color: 'red' }} />} count={"6.2K"} />
      <ActionButton icon={<Share />} count={61} />
    </CardContent>




  );
};

export default TweetActions;
