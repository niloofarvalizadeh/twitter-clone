import { supabase } from './supabaseClient';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, Box } from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

function Signin() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });

    if (error) {
      console.error('Error during sign-in:', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
     
        navigate('/home');
      }
    });

    
    return () => {
      authListener?.unsubscribe();
    };
  }, [navigate]);

  return (
    <div className="bg-slate-600 w-full h-screen">
      <div className="bg-black w-full h-full flex">
        <div id="logo" className="bg-red-800 w-1/2 h-[600px] ">
          <img src="/images/X-home.png" className="h-full w-full" alt="twitter logo" />
        </div>
        <div id="signin" className="w-1/2 h-full min-h-[100vh] pl-10 flex flex-col items-center justify-center">
          <div className="text-center mb-4">
            <Typography variant="h1" className="font-chirp" sx={{ letterSpacing: '2px', lineHeight: '1.2', fontSize: '70px', fontWeight: 700, color: 'white' }}>
              Happening now
            </Typography>
            <Typography variant="h2" className="font-chirp" sx={{ letterSpacing: '2px', lineHeight: '1.2', fontSize: '31px', fontWeight: 'bold', color: 'white', marginTop: '30px' }}>
              Join today.
            </Typography>
          </div>

          <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '24px' }}>
            <CustomButton text="Sign up with Google" bgColor="white" textColor="black" icon={<FcGoogle size={24} />} onClick={handleGoogleSignIn} />
            <CustomButton text="Sign up with Apple" bgColor="white" textColor="black" icon={<FaApple size={24} />} />
            <Box className="bg-black" sx={{ height: '5px', width: '350px', marginBottom: '24px' }} />
            <CustomButton text="Create account" textColor="white" bgColor={'#1DA1F2'} />
            <Box sx={{ marginTop: 'auto', paddingBottom: '24px' }}>
              <Typography sx={{ fontSize: '20px', color: 'white', fontWeight: 'bold', marginBottom: '16px', marginTop: '40px' }}>
                Already have an account?
              </Typography>
              <CustomButton text="Sign in" bgColor="transparent" textColor="#1DA1F2" border="2px solid white" />
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
}

const CustomButton = ({ text, bgColor, textColor, border, icon, onClick }) => (
  <Button
    variant="contained"
    sx={{
      backgroundColor: bgColor,
      color: textColor,
      width: '310px',
      borderRadius: '20px',
      padding: '7px',
      fontSize: '15px',
      textTransform: 'none',
      marginBottom: '12px',
      border: border || 'none',
    }}
    fullWidth
    startIcon={icon}
    onClick={onClick}
  >
    {text}
  </Button>
);

export default Signin;
