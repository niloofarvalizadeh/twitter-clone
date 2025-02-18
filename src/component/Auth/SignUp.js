import React, { useState } from "react";
import { Box, Button, Stack, Typography, Divider } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import CustomButton from "../CustomComponents/CustomButton";
import CustomInput from "../CustomComponents/CustomInput";
import CustomCheckbox from "../CustomComponents/CustomCheckbox";

const SignUp = ({ openLoginModal }) => {
  const { signUp, error, success } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");


  // Email Validation
  const emailValidation = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return emailRegex.test(email);
  };

  const handleSignUp = async (event) => {
    event.preventDefault();

    if(!emailValidation(email)){
      setEmailError("Please enter the email format correctly!");
    return;

    }
    setEmailError("");
    await signUp(email, password);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="50%"
      my={3}
    >
      <form onSubmit={handleSignUp}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {emailError && <Typography color="red">{emailError}</Typography>}

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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
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
