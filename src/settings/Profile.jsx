import React from "react";
import { Box, Grid, Typography, Avatar } from "@mui/material";

function Profile() {
  // Dummy data
  const profileData = {
    avatar: "https://i.pravatar.cc/150?img=12",
    name: "John Doe",
    username: "john_doe",
    email: "john.doe@example.com",
    location: "New York, USA",
    bio: "Frontend Developer passionate about React and Material-UI",
    userType: "Admin",
    website: "https://example.com",
    contact: "+1 234 567 890",
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3} textAlign="center">
          <Avatar
            src={profileData.avatar}
            alt={profileData.name}
            sx={{ width: 120, height: 120, margin: "0 auto" }}
          />
          <Typography variant="h6" sx={{ mt: 1 }}>
            {profileData.name}
          </Typography>
          <Typography color="text.secondary">@{profileData.username}</Typography>
        </Grid>

        <Grid item xs={12} sm={9}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="subtitle2">Email</Typography>
              <Typography>{profileData.email}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle2">Location</Typography>
              <Typography>{profileData.location}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle2">User Type</Typography>
              <Typography>{profileData.userType}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle2">Website</Typography>
              <Typography>{profileData.website}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle2">Contact</Typography>
              <Typography>{profileData.contact}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2">Bio</Typography>
              <Typography>{profileData.bio}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Profile;
