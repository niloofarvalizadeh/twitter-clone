import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import {
  Box,
  Typography,
  Stack,
  FormLabel,
  Modal,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { AiOutlineLogin } from "react-icons/ai";
import CloseIcon from "@mui/icons-material/Close";
import CustomInput from "../CustomComponents/CustomInput";
import CustomButton from "../CustomComponents/CustomButton";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";

const shakeVariant = {
  initial: { x: 0 },
  shake: {
    x: [0, -10, 10, -10, 10, 0],
    transition: { duration: 0.4 },
  },
};

const Login = ({ isOpen, onClose }) => {
  const { login, error } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [shouldShake, setShouldShake] = useState(false);

  useEffect(() => {
    if (error) {
      setShouldShake(true);
      setTimeout(() => setShouldShake(false), 500); 

    }
  }, [error]);

   const onSubmit = async (data) => {
     setIsLoading(true);
     await login(data.email, data.password);
     setIsLoading(false);
   };


  return (
    <Modal open={isOpen} onClose={onClose}>
      <motion.div
        variants={shakeVariant}
        initial="initial"
        animate={shouldShake ? "shake" : "initial"}
        style={{
          position: "absolute",
          top: "20%",
          left: "35%",
          background: "white",
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
            <AiOutlineLogin style={{ marginRight: "8px" }} /> Login
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
            <CustomButton
              type="submit"
              text={
                isLoading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  "Log in"
                )
              }
              bgColor="#1DA1F2"
              hoverColor="#005792"
              textColor="white"
              disabled={isLoading}
              fullWidth
            />

            <CustomButton
              onClick={onClose}
              text={"Close"}
              bgColor="transparent"
              hoverColor="#d1d1d1"
              textColor="gray"
              width="auto"
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
      </motion.div>
    </Modal>
  );
};

export default Login;
