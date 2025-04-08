import React, { useState } from "react";
import { Box } from "@mui/material";
import SignUp from "./SignUp";
import Login from "./Login";
import useAuth from "../../hooks/useAuth";

const Auth = () => {
  const { user } = useAuth();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  
  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const renderContent = () =>
    user ? (
      <Box sx={{ color: "white" }}>You are logged in!</Box>
    ) : (
      <SignUp openLoginModal={openLoginModal} />
    );

  return (
    <Box display="flex" minHeight="100vh" flexDirection="row" bgcolor="black">
      {/* image section */}
      <Box sx={{ width: "50%", display: "block", p: 2 }}>
        <img
          component="img"
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
      {renderContent()}

      {/* Login Modal */}
      <Login isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </Box>
  );
};

export default Auth;
