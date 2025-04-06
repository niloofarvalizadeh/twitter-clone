import React from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Stack, Typography, Divider } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import CustomButton from "../CustomComponents/CustomButton";
import CustomInput from "../CustomComponents/CustomInput";
import CustomCheckbox from "../CustomComponents/CustomCheckbox";

const initialState = {
  email: "",
  password: "",
  emailError: "",
};

const SignUp = ({ openLoginModal }) => {
  const { signUp, error, success } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await signUp(data.email, data.password);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="50%"
      my={3}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          width={{ xs: "70%", md: "430px" }}
          p={3}
          bgcolor="white"
          color="black"
          borderRadius={3}
          boxShadow={5}
          mx={2}
        >
          <Stack spacing={"11px"}>
            <CustomButton
              variant="contained"
              Icon={<FcGoogle size={24} />}
              text={"Login with Google"}
              hoverColor="#d1d1d1"
              fullWidth
            />
            <Stack direction="row" alignItems="center" spacing={1}>
              <Divider sx={{ flex: 1 }} />
              <Typography color="gray">or</Typography>
              <Divider sx={{ flex: 1 }} />
            </Stack>

            <Typography
              variant="subtitle1"
              component="label"
              htmlFor="email"
              sx={{ mt: 1 }}
            >
              Email
            </Typography>
            <CustomInput
              id="email"
              variant="outlined"
              label="Enter your email"
              fullWidth
              {...register("email", {
                required: "Please enter your email.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                  message: "Please enter email format correctly",
                },
              })}
            />
            {errors.email && (
              <Typography color="red">{errors.email.message}</Typography>
            )}

            <Typography
              variant="subtitle1"
              component="label"
              htmlFor="password"
              sx={{ mt: 1 }}
            >
              Password
            </Typography>
            <CustomInput
              id="password"
              variant="outlined"
              label="Enter your password"
              fullWidth
              type="password"
              {...register("password", {
                required: "Please enter a password.",
                minLength: {
                  value: 6,
                  message: "The password must be at least 6 characters.",
                },
              })}
            />
            {errors.password && (
              <Typography color="red">{errors.password.message}</Typography>
            )}

            <Box display="flex" alignItems="center">
              <CustomCheckbox />
            </Box>
            <CustomButton
              type="submit"
              variant="contained"
              fullWidth
              bgColor="#1DA1F2"
              hoverColor="#005792"
              textColor="white"
              text={"Sign up"}
            />
            {error && <Typography color="red">{error}</Typography>}
            {success && <Typography color="green">{success}</Typography>}

            <Stack direction="row" justifyContent="center" alignItems="center">
              <Typography
                variant="body2"
                color="textSecondary"
                fontWeight="bold"
              >
                Already have an account?
              </Typography>
              <Button
                onClick={openLoginModal}
                sx={{
                  color: "#1DA1F2",
                  textTransform: "none",
                }}
              >
                Log in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </form>
    </Box>
  );
};

export default SignUp;
