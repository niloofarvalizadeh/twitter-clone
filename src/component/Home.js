import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

const Home = () => {
    return (
        <Box className="flex bg-black p-2" sx={{ height: '100%', flexDirection: 'row' }}>

            {/* Left Section */}
            <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/images/X-home.png" alt="X Logo" style={{ width: '100%', height: '100%' }} />
            </Box>

            {/* Right Section */}
            <Box sx={{
                width: '50%',
                bgcolor: 'black',
                padding: '70px 24px',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',

            }}>


                <Box>
                    <Typography variant="h1" className="font-chirp" sx={{ letterSpacing: '2px', lineHeight: '1.2', fontSize: '70px', fontWeight: 700, color: 'white' }}>
                        Happening now
                    </Typography>
                    <Typography variant="h2" className="font-chirp" sx={{ letterSpacing: '2px', lineHeight: '1.2', fontSize: '31px', fontWeight: 'bold', color: 'white', marginTop: '30px' }}>
                        Join today.
                    </Typography>
                </Box>

                {/* Buttons */}
                <Box sx={{ marginTop: '24px' }}>

                    {/* Google Icon */}
                    <CustomButton text="Sign up with Google" bgColor="white" textColor="black" icon={<FcGoogle size={24} />} />

                    {/* Apple Icon */}
                    <CustomButton text="Sign up with Apple" bgColor="white" textColor="black" icon={<FaApple size={24} />} />

                    <Box className="bg-black" sx={{ height: '5px', width: '350px', marginBottom: '24px' }}></Box>

                    <CustomButton text="Create account" bgColor="#1DA1F2" textColor="white" />
                </Box>

                {/* Legal Text */}
                <Typography sx={{ color: '#6e767d', fontSize: '12px' }}>
                    <p>By signing up, you agree to the
                        <a href='' style={{ color: '#1DA1F2' }}> Terms of Service </a>&nbsp;and </p>
                    <p><a href='' style={{ color: '#1DA1F2' }}>Privacy Policy</a>, including&nbsp;
                        <a href='' style={{ color: '#1DA1F2' }}>Cookie Use.</a></p>
                </Typography>

                {/* Sign in Section */}
                <Box sx={{ marginTop: 'auto', paddingBottom: '24px' }}>
                    <Typography sx={{ fontSize: '20px', color: 'white', fontWeight: 'bold', marginBottom: '16px', marginTop: '40px' }}>
                        Already have an account?
                    </Typography>
                    <CustomButton text="Sign in" bgColor="transparent" textColor="#1DA1F2" border="2px solid white" />
                </Box>
            </Box>
        </Box>
    );
};


const CustomButton = ({ text, bgColor, textColor, border, icon }) => (
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
        // If an icon is entered as a prop, that icon will be displayed at the beginning of the button.
        startIcon={icon}
    >
        {text}
    </Button>
);

export default Home;
