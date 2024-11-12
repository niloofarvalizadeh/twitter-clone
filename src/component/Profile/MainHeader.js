import React, { useState, useRef } from "react";
import { CameraAltOutlined, LocationCityOutlined, CalendarMonthOutlined } from "@mui/icons-material";
import { Avatar, Box, Typography } from "@mui/material";
import CustomButton from "../CustomComponents/CustomButton";
import { supabase } from "../../supabaseClient";


const MainHeader = () => {

    // storing header state and profile state
    const [backgroundImage, setBackgroundImage] = useState(null);
    const [profileImage, setProfileImage] = useState(null);

    // ref 
    const fileInputRef = useRef(null);
    const profileInputRef = useRef(null);

    // Upload image to Supabase Storage
    const uploadImageToStorage = async (file, path) => {
        const { data, error } = await supabase.storage
            .from('profiles')
            .upload(path, file);

        if (error) {
            console.log('Error uploading file:', error);
            return null;
        }
        return data?.path;
    };

    // Save profile image data to database
    const saveProfileImage = async (userId, backgroundImagePath, profileImagePath) => {
        const { data, error } = await supabase
            .from('profile')
            .upsert({
                user_id: userId,
                background_image: backgroundImagePath,
                profile_image: profileImagePath
            });

        if (error) {
            console.log('Error saving profile data:', error);
        } else {
            console.log('Profile data saved successfully:', data);
        }
    };

    // Get profile data from database
    const getProfileData = async (userId) => {
        const { data, error } = await supabase
            .from('profile')
            .select('background_image, profile_image')
            .eq('user_id', userId)
            .single();

        if (error) {
            console.log('Error fetching profile data:', error);
            return null;
        }

        return data;
    };


    // Handle header image upload
   

    const handleImage = async (e) => {
        const file = e.target.files[0];

        if (file) {
            const path = `backgrounds/${Date.now()}-${file.name}`;
            console.log('Upload Path:', path); 
            const filePath = await uploadImageToStorage(file, path);
            if (filePath) {
                const { data } = supabase.storage.from('profiles').getPublicUrl(filePath);
                setBackgroundImage(data?.publicUrl);
            }
        }
    };
    
    const handleProfileImage = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = async (event) => {
                const path = `profiles/${Date.now()}-${file.name}`;
                const filePath = await uploadImageToStorage(file, path);
                if (filePath) {
                    setProfileImage(filePath);
                }
            };
            reader.readAsDataURL(file);
        }
    };
    

        // Handle profile image click
        const handleDivClick = () => {
            fileInputRef.current.click();
        };

        // Handle profile click
        const handleProfileImageClick = () => {
            profileInputRef.current.click();
        };


        return (

            <Box sx={{ position: 'relative', width: "full", height: 420 }}>

                {/* Header Background */}
                <Box
                    onClick={handleDivClick}
                    sx={{
                        height: 200,
                        width: '100%',
                        backgroundColor: '#EBEEF0',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer'
                    }}
                >
                    {backgroundImage ? (
                        <Box
                            component="img"
                            src={backgroundImage}
                            alt="Background"
                            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    ) : (

                        <CustomButton
                            variant="outlined"
                            text={'Choose a pic'}
                            bgColor='#1DA1F2'
                            textColor='white'
                            hoverColor='#005792'
                            Icon={<CameraAltOutlined />}
                            width="180px"
                        />
                    )}
                </Box>

                {/* input header */}
                <input
                    type="file"
                    ref={fileInputRef} // Use reference to access file input
                    style={{ display: "none" }}
                    accept="image/*" // Only images can be selected
                    onChange={handleImage}
                />

                {/* Profile Picture */}
                <Avatar
                    onClick={handleProfileImageClick}
                    src={profileImage || undefined}
                    alt="Profile"
                    sx={{
                        position: 'absolute',
                        top: 120,
                        left: 20,
                        width: 140,
                        height: 140,
                        backgroundColor: profileImage ? 'transparent' : '#f3f4f6',
                        border: '2px solid #ddd',
                        zIndex: 2,
                        cursor: 'pointer',
                        '&:hover': {
                            boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',
                            backgroundColor: profileImage ? 'rgba(0, 0, 0, 0.1)' : '#e0e7ff',
                            borderColor: '#1DA1F2',
                        },
                    }}
                >
                    {!profileImage && (
                        <CameraAltOutlined sx={{ width: '50%', height: '50%', color: '#1DA1F2' }} />
                    )}
                </Avatar>

                <input
                    type="file"
                    ref={profileInputRef}
                    style={{ display: "none" }}
                    accept="image/*"
                    onChange={handleProfileImage}
                />

                {/* Profile Information */}
                <Box sx={{ backgroundColor: '#f7f9fa', height: 220, padding: 2, position: 'relative' }}>

                    <Box sx={{ position: 'absolute', bottom: 20, left: 20 }}>
                        <Typography variant="h6" fontWeight="bold">Davide Biscuso</Typography>
                        <Typography variant="body2" color="text.secondary">@biscuttu</Typography>
                        <Typography variant="body2">Product Designer</Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary', gap: 1, mt: 1 }}>
                            <LocationCityOutlined fontSize="small" />
                            <Typography variant="body2">London</Typography>
                            <CalendarMonthOutlined fontSize="small" />
                            <Typography variant="body2">Joined September 2011</Typography>
                        </Box>

                        <Box sx={{ mt: 1 }}>
                            <Typography
                                component="a"
                                href="/following"
                                sx={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold', mr: 1 }}
                            >
                                569 Following
                            </Typography>
                            <Typography
                                component="a"
                                href="/followers"
                                sx={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold', ml: 1 }}
                            >
                                72 Followers
                            </Typography>
                        </Box>
                    </Box>

                    <CustomButton
                        variant="outlined"
                        text='Edit profile'
                        textColor='white'
                        hoverColor='#233142'
                        width='110px'
                        height='40px'
                        fontSize='15px'
                        bgColor='#1DA1F2'
                        sx={{
                            position: 'absolute',
                            bottom: 20,
                            right: 20,
                        }}
                    />
                </Box>
            </Box>
        );
    };


    export default MainHeader;
