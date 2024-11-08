
import React, { useState } from 'react';
import { Box, Button, Stack, Typography, Divider, Checkbox, Modal, IconButton, TextField } from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import { supabase } from '../../supabaseClient';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../CustomButton';
import CustomInput from '../CustomInput';
import CustomCheckbox from '../CustomCheckbox';

const SignUp = ({ openLoginModal, closeLoginModal }) => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const handleSignUp = async (e) => {
        e.preventDefault();

        console.log('Email:', email);
        console.log('Password:', password);

        if (!email || !password) {
            setError("Please fill in both email and password fields.");
            return;
        }    

        const { error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            setError('Registration failed: ' + error.message);
            console.error(error.message);
        } else {
            setSuccess('Registration successful! Please check your email to confirm your account.');
            setError('');
        }
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" width="50%" my={3}>
            <form onSubmit={handleSignUp}>
                <Box width={{ xs: "70%", md: "430px" }} p={3} bgcolor="white" color="black" borderRadius={3} boxShadow={5} mx={2}>
                    <Stack spacing={"11px"}>
                        <CustomButton
                            variant="contained"
                            Icon={<FcGoogle size={24} />}
                            text={'Login with Google'}
                            hoverColor="#d1d1d1"
                            fullWidth
                        />
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Divider sx={{ flex: 1 }} />
                            <Typography color="gray">or</Typography>
                            <Divider sx={{ flex: 1 }} />
                        </Stack>
                        
                        <Typography variant="subtitle1" className='required' component="label" htmlFor="email" sx={{ mt: 1 }}>
                            Email
                        </Typography>
                        <CustomInput
                            id="email"
                            variant="outlined"
                            label="Enter your email"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Typography variant="subtitle1" className='required' component="label" htmlFor="password" sx={{ mt: 1 }}>
                            Password
                        </Typography>
                        <CustomInput
                            id="password"
                            variant="outlined"
                            label="Enter your password"
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Box display="flex" alignItems="center">
                            <CustomCheckbox />
                        </Box>
                        <CustomButton
                            type="submit"
                            variant="contained"
                            fullWidth
                            bgColor='#1DA1F2'
                            hoverColor="#005792"
                            textColor="white"
                            text={'Sign up'}
                        />
                        {error && <Typography color="red">{error}</Typography>}
                        {success && <Typography color="green">{success}</Typography>}

                        <Stack direction="row" justifyContent="center" alignItems="center">
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                fontWeight="bold"
                                textAlign="center"
                                sx={{
                                    fontSize: '14px',
                                    color: '#6b6b6b',
                                    letterSpacing: '0.5px',
                                    '&:hover': {
                                        color: '#000',
                                    },
                                    transition: 'color 0.3s ease',
                                }}
                            >
                                Already have an account?
                            </Typography>
                            <Button
                                onClick={openLoginModal}
                                sx={{
                                    color: "#1DA1F2",
                                    position: "relative",
                                    textTransform: "none",
                                    "&::after": {
                                        content: '""',
                                        position: "absolute",
                                        bottom: -2,
                                        left: 0,
                                        width: 0,
                                        height: "2px",
                                        bgcolor: "#1DA1F2",
                                        transition: "width 0.8s ease, opacity 0.3s",
                                        opacity: 0,
                                    },
                                    "&:hover::after": {
                                        width: "100%",
                                        opacity: 1,
                                    },
                                }}
                            >
                                Log in
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </form>
        </Box>

    );
};
export default SignUp;
