import React, { useState } from "react";
import { Box, colors } from "@mui/material";
import SignUp from "./SignUp";
import Login from "./Login";
import useAuth from "../../hooks/useAuth";


const Auth = () => {
  const { user } = useAuth(); // User login status
  // Managing the opening and closing of the login modal
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <Box display="flex" minHeight="100vh" flexDirection="row" bgcolor="black">
      {/* image section */}
      <Box sx={{ width: "50%", display: "block", p: 2 }}>
        <img
          src="/images/X-home.png"
          alt="X Image"
          style={{
            objectFit: "contain",
            height: "calc(100vh - 20px)",
            width: "100%",
          }}
        />
      </Box>

      {/* form section */}
      {!user ? (
        <SignUp openLoginModal={openLoginModal} />
      ) : (
        <p style={{ color: "white" }}>You are logged in!</p>
      )}

      {/* Login Modal */}
      <Login isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </Box>
  );
};

export default Auth;
