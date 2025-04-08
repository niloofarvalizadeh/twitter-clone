import { Typography, Stack } from "@mui/material";
import CustomInput from "./CustomInput";

const FormField = ({ id, label, error, ...rest }) => {
  return (
    <Stack spacing={0.5}>
      <Typography
        variant="subtitle1"
        component="label"
        htmlFor={id}
        sx={{ mt: 1 }}
      >
        {label}
      </Typography>
      <CustomInput id={id} label={label} {...rest} />
      {error && (
        <Typography variant="caption" color="red">
          {error.message}
        </Typography>
      )}
    </Stack>
  );
};

export default FormField;
