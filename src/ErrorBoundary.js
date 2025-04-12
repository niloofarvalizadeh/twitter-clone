import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { BiErrorAlt } from "react-icons/bi";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary: ", error, errorInfo);
  }

  handleReload = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            backgroundColor: "#f8f9fa",
            px: 3,
          }}
        >
          <BiErrorAlt
            size={80}
            color="#ff6b6b"
            style={{ marginBottom: "16px" }}
          />
          <Typography variant="h5" gutterBottom fontWeight="bold">
            Something went wrong!
          </Typography>
          <Typography variant="body1" color="textSecondary" mb={3}>
            Please try again later.
          </Typography>
          <Button
            variant="contained"
            onClick={this.handleReload}
            sx={{
              backgroundColor: "#1DA1F2",
              color: "white",
              px: 4,
              py: 1,
              fontWeight: "bold",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#0d8de1",
              },
            }}
          >
            Refresh
          </Button>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
