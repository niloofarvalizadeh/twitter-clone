import React, { useContext, useEffect } from "react";
import Sidebar from "../component/Sidebar";
import Rightmenu from "../component/RightMenu/Rightmenu";
import UserProfile from "../component/Profile/UserProfile";
import { Box } from "@mui/material";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const UserProfilePage = () => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <Box className="body">
      <Box className="section-1">
        <Sidebar />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <UserProfile />
      </Box>

      <Box>
        <Rightmenu />
      </Box>
    </Box>
  );
};

export default UserProfilePage;
