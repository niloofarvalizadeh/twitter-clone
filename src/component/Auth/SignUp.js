import React from "react";
import { Box, Typography, Stack, FormLabel, Icon } from "@mui/material";
import { motion } from "framer-motion";
import { MdOutlineHowToReg } from "react-icons/md";
import CustomInput from "../CustomComponents/CustomInput";
import CustomButton from "../CustomComponents/CustomButton";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useForm } from "react-hook-form";

export default function SignUp({ openLoginModal }) {
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
            <FormLabel className="text-[16px] text-slate-600 font-normal whitespace-nowrap">
              Email
            </FormLabel>
            <CustomInput
              {...register("email", { required: "Please enter email." })}
              sx={{ input: { backgroundColor: "white" } }}
            />
            {errors.email && (
              <Typography color="red">{errors.email.message}</Typography>
            )}

            <FormLabel className="text-[16px] text-slate-600 font-normal whitespace-nowrap">
              Password
            </FormLabel>
            <CustomInput
              type="password"
              {...register("password", { required: "Please enter password." })}
              sx={{ input: { backgroundColor: "white" } }}
            />
            {errors.password && (
              <Typography color="red">{errors.password.message}</Typography>
            )}
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1} mt={3}>
            <input
              type="checkbox"
              id="terms"
              {...register("terms", {
                required: "You must agree to the terms.",
              })}
              style={{
                width: "20px",
                height: "20px",
                appearance: "none",
                backgroundColor: "#fff",
                border: "2px solid #1DA1F2",
                borderRadius: "6px",
                display: "inline-block",
                position: "relative",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onChange={(e) => {
                e.target.style.backgroundColor = e.target.checked
                  ? "#1DA1F2"
                  : "#fff";
                e.target.style.borderColor = e.target.checked
                  ? "#1DA1F2"
                  : "#1DA1F2";
              }}
            />

            <FormLabel
              htmlFor="terms"
              sx={{
                fontSize: "0.85rem",
                fontStyle: "italic",
                color: "rgb(55 65 81)",
                userSelect: "none",
                cursor: "pointer",
              }}
            >
              I agree with&nbsp;
              <a
                href="https://x.com/en/tos/previous/version_13"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#1DA1F2",
                  fontWeight: 600,
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
              bgColor="#E0E7FF"
              textColor="#1DA1F2"
              hoverColor="#1DA1F2"
            />

            <div className="flex items-center gap-2">
              <p className="text-[16px] text-slate-600 italic font-normal whitespace-nowrap">
                Already have an account?
              </p>
              <CustomButton
                onClick={openLoginModal}
                text={"Login"}
                bgColor="#E0E7FF"
                textColor="gray"
                fullwidth
              />
            </div>
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
}
