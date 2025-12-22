import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useAppStore } from "../AppStore";
import { useAuth } from "../AuthContext";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  background: "linear-gradient(90deg, #1565c0, #1976d2)",
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const updateOpen = useAppStore((state) => state.updateOpen);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      if (user?.token) {
        await axios.post(
          "http://127.0.0.1:8000/api/logout",
          {},
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
              Accept: "application/json",
            },
          }
        );
      }
    } catch (error) {
      console.error("Logout API failed");
    } finally {
      // ✅ SINGLE SOURCE OF TRUTH
      logout();
      navigate("/login", { replace: true });
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="fixed" elevation={4}>
        <Toolbar>
          {/* Sidebar Toggle */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={updateOpen}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* Title */}
          <Typography
            variant="h6"
            noWrap
            sx={{ flexGrow: 1, fontWeight: "bold", letterSpacing: 1 }}
          >
            SmartSchool Portal
          </Typography>

          {/* Profile */}
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            onClick={handleProfileMenuOpen}
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </StyledAppBar>

      {/* Profile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={handleMenuClose}>
          {user?.email || "My Profile"}
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleMenuClose();
            handleLogout();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}
