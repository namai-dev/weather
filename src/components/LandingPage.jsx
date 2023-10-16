import { Box, Button, TextField, Typography, createTheme } from "@mui/material";
import React from "react";
import Stock from "./landSections/Stocks";
import Weather from "./landSections/Weather";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "linear-gradient(to right, #ffcc00, #ff6600)",
          padding: "50px",
          borderRadius: "10px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          animation: "pulseBackground 5s infinite alternate",
        }}
      >
        <Box>
          <Typography variant="h4" component="h2" gutterBottom>
            About Our Project
          </Typography>
          <Typography variant="body1" paragraph>
            Agriculture Hub is a comprehensive platform that aims to
            revolutionize the agricultural industry. We provide a wide range of
            services and products to support farmers and agricultural
            businesses.
          </Typography>
          <Typography variant="body1" paragraph>
            Our mission is to promote sustainable farming practices, provide
            resources, and connect individuals and organizations in the
            agriculture sector. Whether you're a farmer, researcher, or
            enthusiast, Agriculture Hub is here to serve you.
          </Typography>
          <Typography variant="body1">
            Join us on this exciting journey to cultivate a brighter future for
            agriculture.
          </Typography>
        </Box>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            marginTop: "5%",
            width: "50%",
          }}
        >
          <TextField
            label="Email Address"
            variant="outlined"
            sx={{ width: "100%", marginBottom: "10px" }}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: "100%",
              background: "#ff6600",
              "&:hover": {
                background: "#ffcc00",
              },
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>

      <Weather />
      <Box>
        <Stock />
      </Box>
      <Footer />
    </>
  );
};

export default LandingPage;
