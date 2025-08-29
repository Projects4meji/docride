import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Card,
  CardContent,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import contact from "../../assets/contact.avif";
import BlogHeroImage from "../../assets/bgimage.avif";

const contactDetails = [
  {
    icon: <PhoneIcon sx={{ fontSize: "32px", color: "#fff" }} />,
    title: "(+44) 123 456 789",
    bgColor: "#B0CFC6",
    textColor: "#fff",
  },
  {
    icon: <EmailIcon sx={{ fontSize: "32px", color: "#72B7A4" }} />,
    title: "info@docride.com",
    bgColor: "#E8F2EF",
    textColor: "#1E626C",
  },
  {
    icon: <LocationOnIcon sx={{ fontSize: "32px", color: "#72B7A4" }} />,
    title: "Reading, England",
    bgColor: "#F7FCF8",
    textColor: "#1E626C",
  },
];
const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ Smooth scroll to top when component mounts
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", { name, email, query });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | DocRide – ISO 45001 & OHS Management Support</title>
        <meta
          name="description"
          content="Get in touch with DocRide for any questions about ISO 45001, health & safety software, or AI-based OHS management systems. Reach out to us via email, phone, or form."
        />
        <meta
          name="keywords"
          content="Contact DocRide, ISO 45001 support, OHS management system help, AI based OHS management, Health and safety compliance inquiry, OHS software consultation"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Box sx={{ width: "100vw" }}>
        {/* Hero Section */}
        <Box
          sx={{
            bgcolor: "#ffffff",
            width: "100%",
            height: { xs: "40vh", sm: "35vh", md: "40vh" },
            backgroundImage: `url(${BlogHeroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            px: { xs: 3, sm: 6, md: 16, lg: 20 },
            py: { xs: 2, sm: 4 },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: { xs: "28px", sm: "32px", md: "46px" },
              textShadow: "2px 2px 6px rgba(0,0,0,0.3)",
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              maxWidth: { xs: "90%", sm: "75%", md: "800px" },
              mt: 1,
              fontWeight: "400",
              fontSize: { xs: "16px", sm: "20px", md: "20px" },
              lineHeight: 1.5,
            }}
          >
            For More Queries
          </Typography>
        </Box>

        {/* Two-Column Layout (Text + Form) */}
        <Container maxWidth="lg" sx={{ pt: 8, px: { xs: 2, sm: 4, md: 6 } }}>
          <Grid container spacing={6} alignItems="center">
            {/* Left Side - Contact Info + Image */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "#032C34",
                  mb: 3,
                  fontSize: { xs: "24px", sm: "28px", md: "32px" }, // ✅ Responsive text size
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <span style={{ color: "#72B7A4" }}>DocRide</span> strikes the
                perfect balance between{" "}
                <span style={{ color: "#c94b32", textDecoration: "underline" }}>
                  flexibility and simplicity
                </span>
                , ensuring ease of use without sacrificing functionality.
              </Typography>

              {/* Grid container for Contact Cards */}
              <Grid
                container
                spacing={3}
                justifyContent={{
                  xs: "center",
                  sm: "center",
                  md: "space-between",
                }} // ✅ Responsive alignment
                alignItems="center"
              >
                {contactDetails.map((item, index) => (
                  <Grid item xs={12} sm={4} md={4} key={index}>
                    <Card
                      sx={{
                        bgcolor: item.bgColor,
                        borderRadius: "16px",
                        boxShadow: 2,
                        textAlign: "center",
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 1.5,
                        width: "100%",
                        maxWidth: "320px", // ✅ Prevents oversized cards
                        margin: "auto",
                      }}
                    >
                      {/* Icon Box */}
                      <Box
                        sx={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          bgcolor:
                            index === 0 || index === 1
                              ? "rgba(255, 255, 255, 0.3)"
                              : "#fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {item.icon}
                      </Box>

                      <CardContent sx={{ p: 0, textAlign: "center" }}>
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          sx={{
                            color: item.textColor,
                            fontSize: "14px",
                            textAlign: "center",
                          }}
                        >
                          {item.title}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* Right Side - Contact Form with Background Image */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: 3,
                  p: { xs: 3, sm: 4 },
                  bgcolor: "rgba(232, 242, 239, 0.9)", // ✅ Slight transparency for readability
                  backgroundImage: `url(${contact})`, // ✅ Background image added
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "450px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Overlay to make form readable */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(232, 242, 239, 0.85)", // ✅ Light overlay
                    zIndex: 1,
                  }}
                />

                {/* Form Content */}
                <Box sx={{ position: "relative", zIndex: 2, width: "100%" }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      color: "#1E626C",
                      mb: 2,
                      textAlign: "center",
                    }}
                  >
                    Send Us a Message
                  </Typography>
                  <Box component="form" onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <TextField
                      fullWidth
                      required
                      label="Your Name"
                      variant="outlined"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      sx={{
                        mb: 3,
                        bgcolor: "white",
                        borderRadius: "6px",
                        "& .MuiOutlinedInput-root": {
                          fontSize: { xs: "14px", sm: "16px" },
                        },
                      }}
                    />

                    {/* Email Field */}
                    <TextField
                      fullWidth
                      required
                      label="Your Email"
                      type="email"
                      variant="outlined"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      sx={{
                        mb: 3,
                        bgcolor: "white",
                        borderRadius: "6px",
                        "& .MuiOutlinedInput-root": {
                          fontSize: { xs: "14px", sm: "16px" },
                        },
                      }}
                    />

                    {/* Query Field */}
                    <TextField
                      fullWidth
                      multiline
                      minRows={3}
                      label="Your Message"
                      variant="outlined"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      sx={{
                        mb: 3,
                        bgcolor: "white",
                        borderRadius: "6px",
                        "& .MuiOutlinedInput-root": {
                          fontSize: { xs: "14px", sm: "16px" },
                        },
                      }}
                    />

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      sx={{
                        bgcolor: "#6DB9A0",
                        color: "white",
                        fontSize: { xs: "14px", sm: "16px" },
                        fontWeight: "bold",
                        py: { xs: 1, sm: 1.2 },
                        "&:hover": { bgcolor: "#51A18B" },
                      }}
                    >
                      Send
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Embedded Google Map Section */}
        <Box
          sx={{
            mt: 6,
            textAlign: "center",
            pb: 8,
            px: { xs: 2, sm: 4, md: 6 },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#1E626C",
              mb: 2,
              fontSize: { xs: "22px", sm: "24px", md: "28px" }, // ✅ Responsive text size
            }}
          >
            Visit Us
          </Typography>

          {/* Map Container */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              mt: 2,
            }}
          >
            <Box
              sx={{
                width: { xs: "90%", sm: "80%", md: "70%", lg: "60%" }, // ✅ Responsive width scaling
                height: "450px", // Fixed height for all screens
                borderRadius: "30px", // ✅ Rounded corners for aesthetic
                overflow: "hidden", // ✅ Ensures border-radius clips iframe
                boxShadow: 3, // ✅ Adds subtle elevation
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1243.064899365715!2d-0.9691831431899119!3d51.45577326425607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48769b3d9f76f2c9%3A0x25fa4a8a18238e93!2sDavidson%20House%2C%20The%20Forbury%2C%20Reading%20RG1%203EU%2C%20UK!5e0!3m2!1sen!2s!4v1741628125988!5m2!1sen!2s"
                width="100%" // ✅ Ensures iframe fills parent container
                height="100%"
                style={{ border: "none" }} // ✅ Removes iframe border
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
