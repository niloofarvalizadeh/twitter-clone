import React from 'react';
import { Button, Typography} from '@mui/material';

const CustomButton = ({Icon, text, onClick, bgColor, textColor, borderRadius = "20px", hoverColor, fontSize="18px", height = "50px", boxShadow = "none" }) => {
 
    const darkwhite = '#d1d1d1';

    return (
        <Button
            type="submit"
            variant="contained"
            startIcon={Icon}
            fullWidth
            onClick={onClick}
            sx={{
                backgroundColor: bgColor || '#ececec',
                color: textColor || 'black',
                borderRadius: borderRadius,
                height: height,
                fontSize: fontSize,
                textTransform: 'none',
                boxShadow: boxShadow,
                transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                    boxShadow: 'none',
                    backgroundColor: hoverColor || bgColor
                    
                }
            }}
        >
   <Typography sx={{ letterSpacing: '0.5px' }}>{text}</Typography>
        </Button>
    );
};

export default CustomButton;
