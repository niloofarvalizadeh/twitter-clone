import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Stack,
  FormLabel,
  Modal,
  IconButton,
  Icon,
} from "@mui/material";
import { motion } from "framer-motion";
import { AiOutlineLogin } from "react-icons/ai";
import CloseIcon from "@mui/icons-material/Close";
import CustomInput from "../CustomComponents/CustomInput";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";

const Login = ({ isOpen, onClose }) => {
  const { login, error } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Login Attempt - Email:", data.email);
    console.log("Login Attempt - Password:", data.password);

    await login(data.email, data.password);
    onClose();
  };
  return (
    <Modal open={isOpen} onClose={onClose}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        style={{
          position: "absolute",
          top: "20%",
          left: "35%",
          background: "linear-gradient(to bottom right, #D1C4E9, #BBDEFB)",
          color: "black",
          borderRadius: "20px",
          boxShadow: 24,
          padding: "16px",
          maxWidth: "400px",
          width: "90%",
        }}
      >
        <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
          <Typography
            variant="h6"
            fontWeight="bold"
            display="flex"
            alignItems="center"
          >
            <Icon component={AiOutlineLogin} sx={{ mr: 1 }} /> Login
          </Typography>
          <IconButton
            onClick={onClose}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <CloseIcon sx={{ color: "gray.600" }} />
          </IconButton>
        </Box>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <FormLabel htmlFor="login-email" sx={{ color: "black" }}>
              Email
            </FormLabel>
            <CustomInput
              id="login-email"
              {...register("email", { required: "Please enter email." })}
              fullWidth
              sx={{
                input: { backgroundColor: "white" },
              }}
            />
            {errors.email && (
              <Typography color="red">{errors.email.message}</Typography>
            )}

            <FormLabel htmlFor="login-password" sx={{ color: "black" }}>
              Password
            </FormLabel>
            <CustomInput
              id="login-password"
              type="password"
              {...register("password", { required: "Please enter password." })}
              fullWidth
              sx={{
                input: { backgroundColor: "white" },
              }}
            />
            {errors.password && (
              <Typography color="red">{errors.password.message}</Typography>
            )}
          </Stack>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            mt={3}
            spacing={2}
          >
            <Button
              type="submit"
              sx={{ bgcolor: "#1DA1F2", color: "white", borderRadius: "10px" }}
            >
              Log in
            </Button>

            <Button onClick={onClose} variant="text" sx={{ color: "gray.500" }}>
              Close
            </Button>
          </Stack>
        </form>

        {error && (
          <Typography color="red" textAlign="center" mt={2}>
            {error}
          </Typography>
        )}
      </motion.div>
    </Modal>
  );
};

export default Login;
