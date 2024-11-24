import React, { useState, useEffect, useCallback } from 'react';
import { Box, Button, Stack, Typography, Divider } from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import { supabase } from '../../supabaseClient';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../CustomComponents/CustomButton';
import CustomInput from '../CustomComponents/CustomInput';
import CustomCheckbox from '../CustomComponents/CustomCheckbox';

const SignUp = ({ openLoginModal }) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    // Handles user sign-up

    const handleSignUp = async (event) => {
        event.preventDefault();
        setError('');
        setSuccess('');

        try {

            const { data, error: signUpError } = await supabase.auth.signUp({ email, password });

            if (signUpError) {
                setError(`Registration error: ${signUpError.message}`);
                return;
            }

            if (data?.user) {
                setSuccess('Confirmation email sent. Please check your inbox.');

                console.log('Sign up successful. Waiting for email confirmation.');

            } else {
                setError('Sign up failed. Please try again.');
            }
        } catch (err) {
            console.error("Sign up error:", err);
            setError("Unexpected error occurred. Please try again.");
        }
    };

    // Inserts user data into custom tables

    const insertUserToCustomTable = useCallback(async (user) => {

        try {
            console.log('Checking if user already exists in profiles:', user.id);

            // بررسی وجود کاربر در جدول
            const { data: existingProfile, error: checkError } = await supabase
                .from('profiles')
                .select('user_id')
                .eq('user_id', user.id)
                .single();

            if (checkError && checkError.code !== 'PGRST116') { // اگر خطا ناشی از عدم وجود ردیف نیست
                throw new Error(`Error checking user existence: ${checkError.message}`);
            }

            // اگر کاربر از قبل وجود دارد
            if (existingProfile) {
                console.log('User already exists in profiles. Skipping insertion.');
                return;
            }

            console.log('User does not exist. Inserting into profiles.');



            // Insert into 'users' table
            const { error: userError } = await supabase
                .from('users')
                .upsert({
                    user_id: user.id,
                    email: user.email,
                    password,
                });

            if (userError) throw new Error(`Error adding user to users table: ${userError.message}`);

            // Insert into 'profiles' table
            const profileData = {
                user_id: user.id,
                profile_image: "",
                background_image: "",
                name: "", // مقدار پیش‌فرض
                bio: "", // مقدار پیش‌فرض
                location: "", // مقدار پیش‌فرض
                website: "",
                birth_year: "", // مقدار پیش‌فرض
            };


            const { error: profileError } = await supabase
                .from("profiles")
                .insert(profileData);

            if (profileError) throw new Error(`Error adding user to profiles table: ${profileError.message}`);

            console.log("User and profile saved successfully!");
        } catch (err) {
            console.error('InsertUserToCustomTable Error:', err.message);
        }
    }, [password]);

    // Listen to auth state changes
    useEffect(() => {

        const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {

            try {
                if (event === 'SIGNED_IN' && session) {
                    console.log('User signed in:', session.user);

                    // درج کاربر در جدول‌های `users` و `profiles`
                    await insertUserToCustomTable(session.user);
                    navigate('/home');
                } else if (event === 'SIGNED_OUT') {
                    navigate('/');
                }
            } catch (error) {
                console.error('onAuthStateChange Error:', error);
            }
        });

        return () => authListener?.subscription?.unsubscribe();
    }, [insertUserToCustomTable, navigate]);


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

                        <Typography variant="subtitle1" component="label" htmlFor="email" sx={{ mt: 1 }}>
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
                        <Typography variant="subtitle1" component="label" htmlFor="password" sx={{ mt: 1 }}>
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
                            hoverColor='#005792'
                            textColor="white"
                            text={'Sign up'}
                        />
                        {error && <Typography color="red">{error}</Typography>}
                        {success && <Typography color="green">{success}</Typography>}

                        <Stack direction="row" justifyContent="center" alignItems="center">
                            <Typography variant="body2" color="textSecondary" fontWeight="bold">
                                Already have an account?
                            </Typography>
                            <Button
                                onClick={openLoginModal}
                                sx={{
                                    color: "#1DA1F2",
                                    textTransform: "none",
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
