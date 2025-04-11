import React from "react";
import { Box, Typography, Stack, FormLabel, Icon } from "@mui/material";
import { motion } from "framer-motion";
import { MdOutlineHowToReg } from "react-icons/md";
import CustomInput from "../CustomComponents/CustomInput";
import CustomButton from "../CustomComponents/CustomButton";
import { useContext } from "react";
import { AuthContext}  from "../../context/AuthContext";
import { useForm } from "react-hook-form";

export default function SignUp ({ openLoginModal }) {
const { user, loading, signUp, error } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Sign Up - Email:", data.email);
    console.log("Sign Up - Password:", data.password);

    await signUp(data.email, data.password, data.username);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        width: "41%",
        padding: "1.5rem",
        color: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          padding: "1.5rem",
          borderRadius: "15px",
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          display="flex"
          alignItems="center"
          mb={2}
        >
          <Icon component={MdOutlineHowToReg} sx={{ mr: 1 }} />
          Sign Up
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={1.5}>
            <FormLabel sx={{ color: "black" }}>Email</FormLabel>
            <CustomInput
              {...register("email", { required: "Please enter email." })}
              sx={{ input: { backgroundColor: "white" } }}
            />
            {errors.email && (
              <Typography color="red">{errors.email.message}</Typography>
            )}

            <FormLabel sx={{ color: "black" }}>Password</FormLabel>
            <CustomInput
              type="password"
              {...register("password", { required: "Please enter password." })}
              sx={{ input: { backgroundColor: "white" } }}
            />
            {errors.password && (
              <Typography color="red">{errors.password.message}</Typography>
            )}
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1} mt={1.5}>
            <input
              type="checkbox"
              id="terms"
              {...register("terms", {
                required: "You must agree to the terms.",
              })}
              style={{
                width: "18px",
                height: "18px",
                cursor: "pointer",
              }}
            />
            <FormLabel
              htmlFor="terms"
              sx={{
                color: "black",
                fontSize: "0.9rem",
                cursor: "pointer",
                userSelect: "none",
              }}
            >
              I agree with&nbsp;
              <a
                href="https://x.com/en/tos/previous/version_13"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#1DA1F2",
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                terms & conditions
              </a>
            </FormLabel>
          </Stack>
          {errors.terms && (
            <Typography color="red" fontSize="0.8rem" mt={0.5}>
              {errors.terms.message}
            </Typography>
          )}

          <Stack mt={3} spacing={1.5}>
            <CustomButton
              type="submit"
              text={"Sign Up"}
              bgColor="#1DA1F2"
              hoverColor="#0d8de1"
              textColor="white"
              fullWidth
              sx={{
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
              }}
            />
            <CustomButton
              onClick={openLoginModal}
              text={"Already have an account? Login"}
              bgColor="transparent"
              textColor="gray"
              fullWidth
              sx={{
                "&:hover": {
                  backgroundColor: "#d1d1d1",
                  boxShadow: "none",
                },
              }}
            />
          </Stack>
        </form>

        {error && (
          <Typography color="red" textAlign="center" mt={2}>
            {error}
          </Typography>
        )}
      </Box>
    </motion.div>
  );
};

