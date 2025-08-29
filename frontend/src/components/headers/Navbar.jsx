import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  useMediaQuery,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Email,
  Phone,
  Close as CloseIcon,
} from "@mui/icons-material";
import { Facebook, YouTube, LinkedIn } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/Blogo.avif";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg")); // Detect screen size
  const [drawerOpen, setDrawerOpen] = useState(false); // Drawer state

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#032C34", width: "100vw", top: 0 }}
    >
      {/* Top Bar with Contact Info */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 3, sm: 4, md: 8 },
          py: "10px",
          backgroundColor: "#042E36",
          color: "#6DB9A0",
          fontSize: { xs: "12px", sm: "14px" },
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", gap: { xs: 1, sm: 3 } }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              transition: "color 0.3s ease",
              "&:hover": { color: "#ffffff" },
            }}
          >
            <Email fontSize="small" />
            <Typography
              component="a"
              href="mailto:info@docride.co.uk"
              sx={{
                fontSize: { xs: "12px", sm: "14px" },
                textDecoration: "none",
                color: "inherit",
                transition: "color 0.3s ease",
                "&:hover": { color: "#ffffff" },
              }}
            >
              info@docride.co.uk
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              transition: "color 0.3s ease",
              "&:hover": { color: "#ffffff" },
            }}
          >
            <Phone fontSize="small" />
            <Typography
              component="a"
              href="tel:+441234567890" // replace with your actual phone number
              sx={{
                fontSize: { xs: "12px", sm: "14px" },
                textDecoration: "none",
                color: "inherit",
                transition: "color 0.3s ease",
                "&:hover": { color: "#ffffff" },
              }}
            >
              Call
            </Typography>
          </Box>
          <Typography variant="inherit">9AM-5PM UK TIME</Typography>
        </Box>

        {/* Hide Social Icons on Mobile */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: "4px" }}>
            <IconButton sx={{ color: "#A0D0C5" }}>
              <Facebook fontSize="medium" />
            </IconButton>
            <IconButton sx={{ color: "#A0D0C5" }}>
              <YouTube fontSize="medium" />
            </IconButton>
            <IconButton sx={{ color: "#A0D0C5" }}>
              <LinkedIn fontSize="medium" />
            </IconButton>
          </Box>
        )}
      </Box>

      {/* Divider Line */}
      <Divider
        sx={{ bgcolor: "#A0D0C5", opacity: 0.5, mx: { xs: 2, sm: 4, md: 8 } }}
      />

      {/* Main Navigation Bar */}
      <Toolbar
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: isMobile ? "space-between" : "space-between",
          px: { xs: 2, sm: 4, md: 10 },
          py: "10px",
        }}
      >
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Link to="/">
            <Box
              component="img"
              src={logo}
              alt="DocRide Logo"
              sx={{
                width: {
                  xs: "180px", // Small screens
                  sm: "180px", // Tablets
                  md: "180px", // Medium screens
                  lg: "250px", // Large screens
                  xl: "280px", // Extra large screens
                },
                height: "auto", // Maintain aspect ratio
              }}
            />
          </Link>
        </Box>

        {/* Mobile Menu Icon */}
        {isMobile ? (
          <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{ color: "#A0D0C5" }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        ) : (
          // Desktop Navigation Links
          <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
            {[
              { name: "Home", path: "/" },
              { name: "Blogs", path: "/blog" },
              { name: "About us", path: "/about" },
              { name: "Modules", path: "/modules" },
              { name: "Pricing", path: "/pricing" },
              { name: "FAQ", path: "/faq" },
              { name: "Contact Us", path: "/contact" },
            ].map((item, index) => (
              <Button
                key={index}
                component={Link}
                to={item.path}
                sx={{
                  color: "#A0D0C5",
                  textTransform: "none",
                  fontSize: { xs: "14px", sm: "15px", md: "20px" }, // ✅ Adjust font size
                  transition: "color 0.3s ease-in-out",
                  "&:hover": { color: "white" },
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        )}

        {/* Hide "30 DAYS TRIAL" Button on Mobile */}
        {!isMobile && (
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #66C2A5, #2C8A7A)",
              borderRadius: "30px",
              padding: "4px 45px",
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "none",
              border: "2px solid #2C8A7A",
              transition: "all 0.9s ease-in-out",
              "&:hover": {
                background: "#032C34",
                border: "2px solid #2C8A7A",
                color: "#ffffff",
              },
            }}
          >
            30 DAYS TRIAL
          </Button>
        )}
      </Toolbar>

      {/* Mobile Drawer (Sliding Menu) */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#F2F8F6", // ✅ Light greenish-white background
            color: "#032C34",
            width: "280px", // ✅ Wider for better readability
            paddingTop: "20px",
          },
        }}
      >
        {/* Drawer Header - Logo & Close Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 3,
            mb: 2,
          }}
        >
          <img src={logo} alt="DocRide Logo" style={{ height: "30px" }} />
          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{ color: "#032C34" }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>
        </Box>

        {/* Menu Items */}
        <List>
          {[
            { name: "Home", path: "/" },
            { name: "Blogs", path: "/blog" },
            { name: "About us", path: "/about" },
            { name: "Modules", path: "/modules" },
            { name: "Pricing", path: "/pricing" },
            { name: "FAQ", path: "/faq" },
            { name: "Contact Us", path: "/contact" },
          ].map((item, index) => (
            <ListItem
              button
              key={index}
              component={Link}
              to={item.path}
              onClick={() => setDrawerOpen(false)}
              sx={{
                display: "flex",
                justifyContent: "center", // ✅ Centering the menu items
                py: 1.5, // ✅ Increased padding for better spacing
              }}
            >
              <ListItemText
                primary={item.name}
                sx={{
                  color: "black",
                  textAlign: "left",
                  fontSize: "20px", // ✅ Bigger font size
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#2C8A7A",
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
