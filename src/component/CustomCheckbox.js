import React, { useState } from 'react';
import { Box, Checkbox, Typography, FormControlLabel } from '@mui/material';

const CustomCheckbox = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <Box display="flex" alignItems="center" sx={{ gap: 2 }}>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        sx={{
                            color: isChecked ? 'primary.main' : 'grey.500',
                            '&.Mui-checked': {
                                color: 'green',
                            },
                            '&:hover': {
                                backgroundColor: 'transparent',
                            },
                        }}
                    />
                }
                label={
                    <Typography
                        sx={{
                            fontSize: '16px',
                            color: isChecked ? 'green' : 'black',
                            '&:hover': { color: 'blue' },
                            fontWeight: 'bold',
                            cursor: 'pointer',
                        }}
                    >
                        I agree to the terms and conditions
                    </Typography>
                }
            />
        </Box>
    );
};

export default CustomCheckbox;
