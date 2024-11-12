import React from 'react';
import { Button, Typography} from '@mui/material';

const CustomButton = ({ sx={} , opacity, variant="contained", Icon, text, onClick, bgColor, textColor, width="fullWidth", borderRadius = "20px", hoverColor, fontSize="18px", height = "50px", boxShadow = "none", fontWeight }) => {
 
    const darkwhite = '#d1d1d1';

    return (
        <Button
            type="submit"
            startIcon={Icon}
            onClick={onClick}
            variant={variant}
            
            sx={{
                backgroundColor: bgColor || '#ececec',
                color: textColor || 'black',
                borderRadius: borderRadius,
                fontWeight: fontWeight,
                width: width,
                opacity: opacity,
                height: height,
                fontSize: fontSize,
                textTransform: 'none',
                boxShadow: boxShadow,
                transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                    boxShadow: 'none',
                    backgroundColor: hoverColor || bgColor
                    
                },
                ...sx
            }}
        >
   <Typography sx={{fontSize: fontSize, letterSpacing: '0.5px' }}>{text}</Typography>
        </Button>
    );
};

export default CustomButton;
