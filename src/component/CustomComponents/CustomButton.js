import React from "react";
import { Button, Typography } from "@mui/material";

const CustomButton = ({
  sx = {},
  opacity,
  variant = "contained",
  Icon,
  text,
  onClick,
  bgColor = "#1DA1F2",
  textColor = "white",
  width = "100%",
  borderRadius = "12px",
  hoverColor = "#1DA1F2",
  fontSize = "16px",
  height = "48px",
  boxShadow = "none",
  fontWeight = "600",
}) => {
  return (
    <Button
      type="submit"
      startIcon={Icon}
      onClick={onClick}
      variant={variant}
      disableRipple
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: bgColor,
        color: textColor,
        borderRadius,
        fontWeight,
        width,
        opacity,
        height,
        fontSize,
        textTransform: "none",
        boxShadow: "none",
        transition: "all 0.4s ease",
        "&:hover": {
          color: "#fff",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "-100%",
          width: "100%",
          height: "100%",
          backgroundColor: hoverColor,
          transition: "all 0.4s ease-in-out",
          zIndex: 0,
        },
        "&:hover::before": {
          left: 0,
        },
        "& .MuiTypography-root": {
          position: "relative",
          zIndex: 1,
          transition: "color 0.4s ease",
        },
        ...sx,
      }}
    >
      <Typography
        sx={{
          fontSize,
          fontWeight,
          letterSpacing: "0.5px",
        }}
      >
        {text}
      </Typography>
    </Button>
  );
};

export default CustomButton;
