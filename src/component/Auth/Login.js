
import React, { useState } from 'react';
import { Box, Button, Typography, Stack, FormLabel, Modal, TextField, IconButton, Icon } from '@mui/material';
import { motion } from 'framer-motion';
import { supabase } from '../../supabaseClient';
import { AiOutlineLogin } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import CustomInput from '../CustomInput';

const Login = ({ isOpen, onClose }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });
    
            if (error) {
                throw error;
            } else if (data?.user) {
                console.log('User logged in:', data.user);
    
                const { data: profileData, error: profileError } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('id', data.user.id)
                    .single();
    
                if (profileError) {
                    console.error('Error fetching profile:', profileError.message);
                } else {
                    console.log('User profile:', profileData);
                }
    
                navigate('/home'); 
            }
        } catch (error) {
            setError(error.message || 'Unfortunately, you have not created an account yet.');
            console.error('Error logging in:', error.message);
        }
    };
    


    return (
        <Modal open={isOpen} onClose={onClose} >

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                style={{
                    position: 'absolute',
                    top: '20%',
                    left: '35%',
                    background: 'linear-gradient(to bottom right, #D1C4E9, #BBDEFB)',
                    color: 'black',
                    borderRadius: '20px',
                    boxShadow: 24,
                    padding: '16px',
                    maxWidth: '400px',
                    width: '90%',
                }}
            >
                <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
                    <Typography variant="h6" fontWeight="bold" display="flex" alignItems="center">
                        <Icon component={AiOutlineLogin} sx={{ mr: 1 }} /> Login
                    </Typography>

                    <IconButton
                        onClick={onClose}
                        sx={{ position: "absolute", top: 8, right: 8 }}
                    >
                        <CloseIcon sx={{ color: 'gray.600' }} />
                    </IconButton>
                </Box>

                <Stack spacing={2}>
                    <FormLabel htmlFor="login-email" sx={{ color: 'black' }}>Email</FormLabel>
                    <CustomInput
                        id="login-email"
                        value={email}
                        // store the data
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        sx={{
                            input: { backgroundColor: 'white' },
                        }}
                    />


                    <FormLabel htmlFor="login-password" sx={{ color: 'black' }}>Password</FormLabel>

                    <CustomInput
                        id="login-password"
                        value={password}
                        type="password"
                        // store the data
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        sx={{
                            input: { backgroundColor: 'white' },
                        }}
                    />

                </Stack>

                <Stack direction="row" justifyContent="center" alignItems="center" mt={3} spacing={2}>
                    <Button onClick={handleLogin} sx={{ bgcolor: "#1DA1F2", color: "white", borderRadius: "10px" }}>
                        Log in
                    </Button>

                    <Button onClick={onClose} variant="text" sx={{ color: "gray.500" }}>
                        Close
                    </Button>
                </Stack>

                {error && (
                    <Typography color="red" textAlign="center" mt={2}>
                        {error}
                    </Typography>
                )}
            </motion.div>
        </Modal>
    );
};

export default Login;





