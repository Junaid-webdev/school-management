import React from "react";
import { Box, Grid, Typography, Avatar } from "@mui/material";

function Persnol() {
  // Dummy personal data
  const personalData = {
    avatar: "https://i.pravatar.cc/150?img=12",
    fullName: "John Doe",
    gender: "Male",
    dob: "12 Aug 1998",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
    address: "221B Baker Street, New York",
    city: "New York",
    country: "USA",
    userType: "Admin",
    emergencyContact: "+1 999 888 777",
    bio: "Passionate learner and tech enthusiast.",
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Grid container spacing={2}>
        {/* Left side avatar */}
        <Grid item xs={12} sm={3} textAlign="center">
          <Avatar
            src={personalData.avatar}
            alt={personalData.fullName}
            sx={{ width: 120, height: 120, margin: "0 auto" }}
          />
          <Typography variant="h6" sx={{ mt: 1 }}>
            {personalData.fullName}
          </Typography>
          <Typography color="text.secondary">
            {personalData.userType}
          </Typography>
        </Grid>

        {/* Right side details */}
        <Grid item xs={12} sm={9}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="subtitle2">Gender</Typography>
              <Typography>{personalData.gender}</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="subtitle2">Date of Birth</Typography>
              <Typography>{personalData.dob}</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="subtitle2">Email</Typography>
              <Typography>{personalData.email}</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="subtitle2">Phone</Typography>
              <Typography>{personalData.phone}</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="subtitle2">City</Typography>
              <Typography>{personalData.city}</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="subtitle2">Country</Typography>
              <Typography>{personalData.country}</Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="subtitle2">Address</Typography>
              <Typography>{personalData.address}</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="subtitle2">Emergency Contact</Typography>
              <Typography>{personalData.emergencyContact}</Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="subtitle2">Bio</Typography>
              <Typography>{personalData.bio}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Persnol;
