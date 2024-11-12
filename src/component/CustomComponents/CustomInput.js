import React from 'react';
import { TextField } from '@mui/material';

const CustomInput = ({ label, value, onChange, borderRadius = "20px", height = '50px' }) => {
    return (
        <TextField
            variant="outlined"
            label={label}  
            value={value} 
            onChange={onChange}  
            sx={{
                letterSpacing: '0.5px',
                '& .MuiOutlinedInput-root': {
                    borderRadius: borderRadius,
                    height: height
                },
            }}
        />
    );
};

export default CustomInput;

