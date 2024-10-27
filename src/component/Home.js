import React, {Component } from 'react';
import { Typography, Button, Box } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#000',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <img src="/path-to-your-x-logo.png" alt="X Logo" style={{ width: 150, marginBottom: '20px' }} />
      
      <Typography variant="h3" sx={{ mb: 4 }}>
        Happening now
      </Typography>
      
      <Typography variant="h5" sx={{ mb: 3 }}>
        Join today.
      </Typography>
      
      <Button variant="outlined" sx={{ mb: 2 }} fullWidth>
        Sign up with Google
      </Button>
      
      <Button variant="outlined" sx={{ mb: 2 }} fullWidth>
        Sign up with Apple
      </Button>
      
      <Button variant="contained" color="primary" fullWidth>
        Create account
      </Button>
    </Box>
  );
};

export default Home;
