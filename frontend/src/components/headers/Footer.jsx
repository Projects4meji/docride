import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Button,
  Link,
  Divider,
} from "@mui/material";
import {
  Facebook,
  YouTube,
  LinkedIn,
  Phone,
  Email,
  Place,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom"; // ✅ Import from React Router
import bgimage from "../../assets/bgimage.avif";

import Logo from "../../assets/logo/Nlogo.avif";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#3A7B81",
        color: "#A0D0C5",
        pt: 6,
        pb: 1,

        position: "relative",
        overflow: "hidden",
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100%",
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5,
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1, pb: 1 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Contact Us Section */}
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              pr: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6" fontWeight="bold" color="#ffffff">
              Contact Us
            </Typography>

            <Box sx={{ mt: 3 }}>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}
              >
                <Phone fontSize="small" />
                <Button
                  href="tel:+441234567890"
                  variant="outlined"
                  size="small"
                  sx={{
                    color: "#ffffff",
                    padding: "5px 20px",
                    background: "linear-gradient(to right, #66C2A5, #2C8A7A)",
                    borderRadius: "30px",
                    borderColor: "#73C7AD",
                    transition: "all 0.5s ease-in-out",
                    "&:hover": {
                      backgroundImage:
                        "linear-gradient(180deg, #F3151500 0%, #F2295B00 100%)",
                      backgroundColor: "transparent",
                      borderColor: "#73C7AD",
                      color: "#73C7AD",
                    },
                  }}
                >
                  Call Now
                </Button>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    color: "#73C7AD",
                  }}
                >
                  9AM-5PM UK Time
                </Typography>
              </Box>

              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}
              >
                <Email fontSize="small" />
                <Link
                  href="mailto:info@docride.co.uk"
                  underline="none"
                  sx={{
                    color: "#73C7AD",
                    padding: "5px 20px",
                    border: "1px solid #73C7AD",
                    borderRadius: "30px",
                    "&:hover": {
                      color: "#ffffff",
                      backgroundColor: "transparent",
                      backgroundImage:
                        "linear-gradient(87deg, #3A7B81 0%, #3A7B81 100%)",
                      borderColor: "#73C7AD",
                    },
                  }}
                  onMouseOver={(e) => (e.target.style.color = "#73C7AD")}
                  onMouseOut={(e) => (e.target.style.color = "#ffffff")}
                >
                  info@docride.co.uk
                </Link>
              </Box>

              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}
              >
                <Place fontSize="small" />
                <Typography
                  variant="body2"
                  sx={{ fontSize: "14px" }}
                >
                  Office 376 Davidson House, The Forbury, RG1 3EU Reading,
                  England
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Quick Links & Support (With Spacing Fix) */}
          <Grid item xs={12} sm={4.5}>
            <Grid container spacing={2}>
              {/* Quick Links */}
              <Grid item xs={6}>
                <Typography variant="h6" fontWeight="bold" color="#ffffff">
                  Quick Links
                </Typography>
                <Box sx={{ mt: 3 }}>
                  {[
                    { label: "Blogs", link: "/blog" }, // ✅ Add correct path for FAQ page
                    { label: "Modules", link: "/modules" },
                    { label: "Benefits", link: "/benefits" },
                  ].map((item, index) => (
                    <Box key={index}>
                      <Typography variant="body2" sx={{ mb: 2 }}>
                        <Link
                          component={RouterLink}
                          to={item.link} // ✅ Dynamic link for each item
                          underline="none"
                          sx={{
                            color: "#ffffff",
                            "&:hover": { color: "#73C7AD" },
                          }}
                          onMouseOver={(e) =>
                            (e.target.style.color = "#73C7AD")
                          }
                          onMouseOut={(e) => (e.target.style.color = "#ffffff")}
                        >
                          {item.label}
                        </Link>
                      </Typography>
                      {index !== 2 && (
                        <Divider
                          sx={{ bgcolor: "#A0D0C5", width: "100%", mb: 2 }}
                        />
                      )}
                    </Box>
                  ))}
                </Box>
              </Grid>

              {/* Support */}
              <Grid item xs={6}>
                <Typography variant="h6" fontWeight="bold" color="#ffffff">
                  Support
                </Typography>
                <Box sx={{ mt: 3 }}>
                  {[
                    { label: "FAQ", link: "/faq" }, // ✅ Add correct path for FAQ page
                    { label: "Pricing", link: "/pricing" },
                    { label: "Contact Us", link: "/contact" },
                  ].map((item, index) => (
                    <Box key={index}>
                      <Typography variant="body2" sx={{ mb: 2 }}>
                        <Link
                          component={RouterLink}
                          to={item.link} // ✅ Dynamic link for each item
                          underline="none"
                          sx={{
                            color: "#ffffff",
                            "&:hover": { color: "#73C7AD" },
                          }}
                          onMouseOver={(e) =>
                            (e.target.style.color = "#73C7AD")
                          }
                          onMouseOut={(e) => (e.target.style.color = "#ffffff")}
                        >
                          {item.label}
                        </Link>
                      </Typography>
                      {index !== 2 && (
                        <Divider
                          sx={{ bgcolor: "#A0D0C5", width: "100%", mb: 2 }}
                        />
                      )}
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Grid>

          {/* About DocRide Section */}
          <Grid
            item
            xs={12}
            sm={3.5}
            sx={{
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <img
              src={Logo}
              alt="DocRide"
              style={{ width: "150px", marginBottom: "10px" }}
            />
            <Typography variant="body2" sx={{ maxWidth: "400px" }}>
              DocRide seamlessly integrates health and safety management system
              processes, saving you from the need to reinvent the wheel by
              designing your own H&S management system from scratch. From risk
              assessments to resource requests and inspections, each step flows
              logically into the next.
            </Typography>
          </Grid>
        </Grid>

        {/* Divider Line Above Social Icons */}
        <Divider sx={{ bgcolor: "#A0D0C5", my: 1 }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Copyright */}
          <Typography sx={{ fontSize: "12px" }}>
            © {new Date().getFullYear()} DocRide. All rights reserved. Powered
            by{" "}
            <Link
              href="#"
              underline="none"
              color="#00b1ff"
              sx={{ "&:hover": { color: "#ffffff" } }}
              onMouseOver={(e) => (e.target.style.color = "#73C7AD")}
              onMouseOut={(e) => (e.target.style.color = "#ffffff")}
            >
              SymCloud.net
            </Link>
          </Typography>

          {/* Social Icons */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <IconButton
              sx={{ color: "#A0D0C5", "&:hover": { color: "#ffffff" } }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              sx={{ color: "#A0D0C5", "&:hover": { color: "#ffffff" } }}
            >
              <YouTube />
            </IconButton>
            <IconButton
              sx={{ color: "#A0D0C5", "&:hover": { color: "#ffffff" } }}
            >
              <LinkedIn />
            </IconButton>
          </Box>
        </Box>

        {/* Divider Between Social Icons and Privacy Section */}
        <Divider sx={{ bgcolor: "#A0D0C5", my: 1 }} />

        {/* Privacy Section */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
          {[
            { label: "Privacy Policy", link: "/policy" },
            { label: "Pricing Policy", link: "/pricepolicy" },
            { label: "User Agreement", link: "/agreement" },
          ].map((item, index) => (
            <Typography key={index} variant="body2">
              <Link
                component={RouterLink}
                to={item.link} // ✅ Use 'to' instead of 'href'
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => (e.target.style.color = "#73C7AD")}
                onMouseOut={(e) => (e.target.style.color = "#ffffff")}
              >
                {item.label}
              </Link>
            </Typography>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
