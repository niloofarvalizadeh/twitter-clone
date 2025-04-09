import React from "react";
import SearchBar from "./SearchBar";
import WhoToFollow from "./WhoToFollow";
import News from "./News";
import {Box} from '@mui/material';

export default function Rightmenu () {
    return (
        <Box
            className="section-3">
            <Box className='pl-3' > <SearchBar /> </Box>
            <Box className="h-[570px] px-5 w-fit"><News /></Box>
            <Box className='px-5'><WhoToFollow /></Box>

        </Box>
    );
}

