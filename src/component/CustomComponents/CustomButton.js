import React from "react";
import { Button, Typography } from "@mui/material";

const CustomButton = ({
  sx={
  position: "relative",
  overflow: "hidden",
  transition: "all 0.4s ease",
  transform: "scale(1)",
  "&:hover": {
    backgroundColor: "#1DA1F2",
    transform: "scale(1.07)",
    boxShadow: "0 8px 24px rgba(29, 161, 242, 0.4)",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-75%",
    width: "50%",
    height: "100%",
    background:
      "linear-gradient(120deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.5) 100%)",
    transform: "skewX(-20deg)",
  },
  "&:hover::before": {
    animation: "shine 0.8s forwards",
  },
  "@keyframes shine": {
    "0%": { left: "-75%" },
    "100%": { left: "125%" },
  },
},

  opacity,
  variant = "contained",
  Icon,
  text,
  onClick,
  bgColor,
  textColor,
  width = "fullWidth",
  borderRadius = "20px",
  hoverColor,
  fontSize = "18px",
  height = "50px",
  boxShadow = "none",
  fontWeight,
}) => {
  return (
    <Button
      type="submit"
      startIcon={Icon}
      onClick={onClick}
      variant={variant}
      sx={{
        backgroundColor: bgColor || "#ececec",
        color: textColor || "black",
        borderRadius: borderRadius,
        fontWeight: fontWeight,
        width: width,
        opacity: opacity,
        height: height,
        fontSize: fontSize,
        textTransform: "none",
        boxShadow: boxShadow,
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          boxShadow: "none",
          backgroundColor: hoverColor || bgColor,
        },
        ...sx,
      }}
    >
      <Typography sx={{ fontSize: fontSize, letterSpacing: "0.5px" }}>
        {text}
      </Typography>
    </Button>
  );
};

export default CustomButton;
