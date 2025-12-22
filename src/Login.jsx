import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Avatar,
  Snackbar,
  Alert,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const LOGIN_API = "http://127.0.0.1:8000/api/login";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const { login } = useAuth();
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      LOGIN_API,
      { email, password },
      { headers: { Accept: "application/json" } }
    );

    // 🔴 IMPORTANT CHECK
    if (!res.data.success) {
      throw new Error("Invalid email or password");
    }

    // ✅ Only valid login reaches here
    const token = res.data.result.token;

    document.cookie = `token=${token}; path=/; max-age=86400`;

    login({ email, token }); // React state update
    navigate("/");

  } catch (error) {
    setMessage({
      type: "error",
      text:
        error.response?.data?.msg ||
        error.message ||  
        "Invalid email or password",
    });
    setOpen(true);
  }
};
  return (
    <Box
      sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Paper elevation={6} sx={{ width: 380, p: 4, borderRadius: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Avatar sx={{ bgcolor: "#1976d2", width: 56, height: 56 }}>
            <LockOutlinedIcon />
          </Avatar>
        </Box>

        <Typography variant="h5" align="center" fontWeight="bold">
          SmartSchool Login
        </Typography>
        <Typography variant="body2" align="center" color="text.secondary" mb={3}>
          Login to access your dashboard
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            margin="normal"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, py: 1.2 }}>
            Login
          </Button>
        </Box>
      </Paper>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity={message.type} sx={{ width: "100%" }}>
          {message.text}
        </Alert>
      </Snackbar>
    </Box>
  );
}
