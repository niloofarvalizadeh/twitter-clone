import React from 'react';
import { Box, Typography } from '@mui/material';
import { BsStars } from "react-icons/bs";

        // <Box className="flex items-center justify-between h-[53px] w-full bg-white border-Dark7 border-[1px]">

        //     <Box className=" w-16 h-full flex justify-center items-center pl-[15px]">
           
        //         <Typography
        //             style={{fontWeight: 'bold' }}
        //             variant="h6">
        //                 Home
        //                 </Typography>
        //     </Box>
        //     <Box className=" w-11 h-full flex justify-center items-center pr-[15px]">
        //         <BsStars
        //             className="text-Primary-Blue"
        //             style={{ width: '40px', height: '25px',}} />
        //     </Box>

        // </Box>

const HomeHeader = () => {
  return (
    <Box className="flex items-center justify-between h-[53px] w-full border-b border-gray-300 px-4 bg-white shadow-sm">
      
      <Typography variant="h6" className="font-bold text-gray-800 text-lg">
        Home
      </Typography>

      <div className="relative group cursor-pointer transition duration-300 ease-in-out">
        <BsStars className="text-Primary-Blue w-6 h-6 group-hover:scale-125 group-hover:text-blue-700 transition-transform duration-300" />
      </div>
      
    </Box>
  );

};
export default HomeHeader;