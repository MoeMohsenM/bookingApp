import logo from "../../public/images/Brand Logo.png";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HomeIcon from "@mui/icons-material/Home";
import EventNoteIcon from "@mui/icons-material/EventNote";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

import styles from "../styles/Sidebar.module.scss";

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => setOpen((prev) => !prev);

  const menuItems = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "My Bookings", icon: <EventNoteIcon /> },
    { text: "Explore", icon: <TravelExploreIcon /> },
    { text: "Support", icon: <SupportAgentIcon /> },
  ];

  return (
    <Box sx={{ display: "flex", alignItems: "flex-start" }}>
      <CssBaseline />
      <MuiDrawer
        variant="permanent"
        open={open}
        className={`${styles.customSidebar} ${open ? styles.expanded : styles.collapsed}`}
        PaperProps={{ className: styles.customSidebarPaper }}
      >
        {/* Logo */}
        <Box className={styles.sidebarLogo}>
          <img
            src={logo}
            alt="Logo"
            className={`${styles.logoImg} ${open ? styles.expandedLogo : styles.collapsedLogo}`}
          />
        </Box>

        {/* Toggle */}
        <Box className={styles.drawerToggle}>
          <IconButton onClick={handleDrawerToggle} className={styles.toggleIcon}>
            {open
              ? theme.direction === "rtl"
                ? <ChevronRightIcon />
                : <ChevronLeftIcon />
              : theme.direction === "rtl"
              ? <ChevronLeftIcon />
              : <ChevronRightIcon />}
          </IconButton>
        </Box>

        <Divider className={styles.sidebarDivider} />

        {/* List */}
        <List className={styles.sidebarList}>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton className={styles.sidebarButton}>
                <ListItemIcon className={styles.sidebarIcon}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  className={`${styles.sidebarText} ${open ? styles.show : styles.hide}`}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </MuiDrawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Main Content */}
      </Box>
    </Box>
  );
}
