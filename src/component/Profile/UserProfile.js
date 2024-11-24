import React from "react";
import TopHeader from "./TopHeader";
import MainHeader from "./MainHeader";
import { Box } from "@mui/material";



const UserProfile = () => {

        return (
                <Box className="h-fit w-full" >
                        <TopHeader />
                        <MainHeader />
                </Box>
        );

};

export default UserProfile;