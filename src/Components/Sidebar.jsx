import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import InfoIcon from "@mui/icons-material/Info";
import SettingsIcon from "@mui/icons-material/Settings";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AnalyticsIcon from "@mui/icons-material/Analytics";

import { Link } from "react-router-dom";
import { useAppStore } from "../AppStore";

const drawerWidth = 240;

/* ---------- styles ---------- */

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

/* ---------- Component ---------- */

export default function Sidebar({ children }) {
  const theme = useTheme();
  const open = useAppStore((state) => state.dopen);
  const [managementOpen, setManagementOpen] = React.useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <StyledDrawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <Divider />

        <List>
          {/* Dashboard */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              component={Link}
              to="/"
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>

          {/* Management */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => setManagementOpen(!managementOpen)}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <ManageAccountsIcon />
              </ListItemIcon>
              <ListItemText
                primary="Management"
                sx={{ opacity: open ? 1 : 0 }}
              />
              {open && (managementOpen ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
          </ListItem>

          {/* Students */}
          {managementOpen && (
            <ListItem disablePadding sx={{ display: "block", pl: open ? 4 : 0 }}>
              <ListItemButton component={Link} to="/students">
                <ListItemIcon>
                  <SchoolIcon />
                </ListItemIcon>
                <ListItemText primary="Students" />
              </ListItemButton>
            </ListItem>
          )}

          {/* Teachers */}
          {managementOpen && (
            <ListItem disablePadding sx={{ display: "block", pl: open ? 4 : 0 }}>
              <ListItemButton component={Link} to="/teachers">
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Teachers" />
              </ListItemButton>
            </ListItem>
          )}

          <Divider sx={{ my: 1 }} />


          


          {/* Analatics */}

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              component={Link}
              to="/products"
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <ProductionQuantityLimitsIcon />
              </ListItemIcon>

              <ListItemText
                primary="Product"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              component={Link}
              to="/analytics"
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <AnalyticsIcon />
              </ListItemIcon>

              <ListItemText
                primary="Analytics"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>

          {/* About */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              component={Link}
              to="/about"
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <InfoIcon />
              </ListItemIcon>
              <ListItemText
                primary="About"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>

          {/* Setting */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              component={Link}
              to="/setting"
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText
                primary="Setting"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </StyledDrawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
