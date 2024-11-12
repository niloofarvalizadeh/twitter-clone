import React from 'react';
import { Box, Typography } from '@mui/material';
import { BsStars } from "react-icons/bs";




const HomeHeader = () => {
    return (

        <Box className="flex items-center justify-between h-[53px] w-full bg-white border-Dark7 border-[1px]">

            <Box className=" w-16 h-full flex justify-center items-center pl-[15px]">
           
                <Typography
                    style={{fontWeight: 'bold' }}
                    variant="h6">
                        Home
                        </Typography>
            </Box>
            <Box className=" w-11 h-full flex justify-center items-center pr-[15px]">
                <BsStars
                    className="text-Primary-Blue"
                    style={{ width: '40px', height: '25px',}} />
            </Box>

        </Box>
    );

};
export default HomeHeader;