import React, { forwardRef } from "react";
import { TextField } from "@mui/material";

const CustomInput = forwardRef(
  (
    { label, value, onChange, borderRadius = "20px", height = "50px", ...rest },
    ref
  ) => {
    return (
      <TextField
        variant="outlined"
        label={label}
        inputRef={ref}
        sx={{
          letterSpacing: "0.5px",
          "& .MuiOutlinedInput-root": {
            borderRadius: borderRadius,
            height: height,
          },
        }}
        {...rest}
      />
    );
  }
);

export default CustomInput;
