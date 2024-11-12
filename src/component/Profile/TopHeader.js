import { IconButton, Typography, Box } from "@mui/material";
import React from "react";
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


const TopHeader = () => {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/home');
    };

    return (

        <Box className="h-[53px] w-full bg-Dark8 flex flex-row border-Dark7 border-[1px]" >

            <Box className=" w-[59px] flex justify-center items-center" >
                <IconButton onClick={handleBackClick}>
                    <KeyboardBackspaceIcon className="text-Primary-Blue" style={{ width: '40px', height: '30px' }} />
                </IconButton>
            </Box>

            <Box className="flex-col w-[70px] flex items-center justify-center pl-2">
                <Box className="h-6">
                    <Typography
                      
                        style={{ fontSize: '19px', fontWeight: 'bold' }} > Name </Typography>
                        </Box>
                <Box className="h-7">
                     <Typography
                       style={{ fontSize: '13px', color: '#5b7083' }} > 9 Tweets </Typography>
                       </Box>

            </Box>

        </Box>
    );
};
export default TopHeader;