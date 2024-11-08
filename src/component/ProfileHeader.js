import React, { useState, useRef } from "react";
import { CameraAltOutlined, LocationCityOutlined, CalendarMonthOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";


const ProfileHeader = () => {
    
    const [backgroundImage, setBackgroundImage] = useState(null);
    const fileInputRef = useRef(null);
    const profileInputRef = useRef(null);
    const [profileImage, setProfileImage] = useState(null);

    // Upload header
    const handleImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setBackgroundImage(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDivClick = () => {
        fileInputRef.current.click();
    };

    // Upload profile
    const handleProfileImageClick = () => {
        profileInputRef.current.click();
    };

    const handleProfileImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setProfileImage(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (

        <div className="relative h-[410px] w-[598px]">
            <div onClick={handleDivClick} className="h-[200px] w-full bg-Dark7 flex justify-center items-center">
                {backgroundImage ? (
                    <img
                        src={backgroundImage}
                        alt="Background"
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <Button variant="outlined" startIcon={<CameraAltOutlined />} sx={{ borderRadius: '20px', color: '#1DA1F2' }}>
                        Choose a picture
                    </Button>
                )}
            </div>

            {/* input header */}

            <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleImage}
            />

            {/* userpro div */}

            <div className="userPro" onClick={handleProfileImageClick} style={{
                position: "absolute",
                background: "#EBEEF0",
                top: "180px",
                left: "20px",
                borderRadius: "50%",
                overflow: "hidden",
                width: "142px",
                height: "142px",
                border: "2px solid black",
                zIndex: 2,
                cursor: "pointer",
                transform: "translateY(-50%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

            }}>
                {profileImage ? (
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <CameraAltOutlined style={{ height: '80%', width: '80%', color: '#1DA1F2' }} />
                )}
            </div>

            {/* input profile */}

            <input
                type="file"
                ref={profileInputRef}
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleProfileImage}
            />

            <div className="h-[210px] w-full bg-slate-100 relative">
                <div className="profile-info" style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    padding: "20px",
                    zIndex: 1
                }}>
                    <p className="text-[21px] font-bold font-sans ">Davide Biscuso</p>
                    <p className="text-[16px] text-Dark5">@biscuttu</p>
                    <p className="text-[16px]">Product Designer</p>

                    <div className="text-Dark5 text-[16px] flex h-[20px] justify-center items-center pt-2 gap-2">
                        <LocationCityOutlined></LocationCityOutlined>
                        London
                        <CalendarMonthOutlined ></CalendarMonthOutlined>
                        Joined September 2011
                    </div>

                    <div className="followers" style={{ marginTop: '10px' }}>
                        <a href="/following" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <span style={{ fontWeight: "bold", marginRight: "5px" }}>569</span>
                            <span style={{ fontWeight: "bold", color: '#5B7083' }}>Following</span>
                        </a>

                        <a href="/followers" style={{ marginLeft: "10px", textDecoration: 'none', color: 'inherit' }}>
                            <span style={{ fontWeight: "bold", marginRight: "5px" }}>72</span>
                            <span style={{ fontWeight: "bold", color: '#5B7083' }}>Followers</span>
                        </a>
                    </div>
                </div>

                <Button variant="outlined" sx={{
                    width: '112px',
                    height: '39px',
                    borderRadius: '20px',
                    textTransform: 'none',
                    position: 'absolute',
                    bottom: '20px',
                    right: '20px',
                    fontsize: '15px',
                }}>
                    Edit profile
                </Button>
            </div>
        </div>
    );
};

export default ProfileHeader;
