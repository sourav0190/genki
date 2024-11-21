import React from "react";
import { Box, Typography, Link, IconButton, Grid } from "@mui/material";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1b1b1b",
        color: "#fff",
        py: 3,
        px: 3,
      }}
    >
      <Grid container spacing={4} justifyContent="space-between">
        {/* Left Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            The Genki Grub
          </Typography>
          <Typography variant="body2" paragraph>
            Handmade and sustainably sourced nutrition bars to provide energy and promote overall wellness.
          </Typography>
          <Typography variant="body2" gutterBottom>
            GOVINDPURI,OHKLA
          </Typography>
          <Link href="https://thegenkigrub.com" color="inherit" underline="hover">
            thegenkigrub.com
          </Link>
          <Box mt={2}>
            <IconButton color="inherit" href="#">
              <FaInstagram />
            </IconButton>
            <IconButton color="inherit" href="#">
              <FaTwitter />
            </IconButton>
            <IconButton color="inherit" href="#">
              <FaFacebook />
            </IconButton>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={4} textAlign="right">
          <Box
            component="nav"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 1,
            }}
          >
            <Link href="#" color="inherit" underline="hover">
              HOME
            </Link>
            <Link href="#" color="inherit" underline="hover">
              About us
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Meal planner
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Calorie counter
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Smart pantry
            </Link>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Links and Copyright */}
      <Box mt={3} textAlign="center">
        <Typography variant="body2" sx={{ color: "whitesmoke" }}>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Link href="#" color="inherit" underline="hover">
              Terms & Conditions
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Disclaimer
            </Link>
          </Box>
          <span> © 2024 Genki, Inc. All rights reserved.</span>
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;