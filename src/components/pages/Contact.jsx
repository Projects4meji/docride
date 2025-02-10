import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import contact from "../../assets/contact.png"; // ✅ Import Contact Image

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", { name, email, query });
  };

  return (
    <Box sx={{ width: "100vw", pt: 8, px: { xs: 2, sm: 4, md: 6, lg: 10 } }}>
      {/* Contact Header Section */}
      <Container maxWidth="md" sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h6"
          sx={{ color: "#032C34", mb: 1, fontWeight: "bold" }}
        >
          FOR MORE QUERIES
        </Typography>
        <Typography
          variant="h3"
          sx={{ color: "#72B7A4", fontWeight: "bold", mb: 3 }}
        >
          Contact Us
        </Typography>
      </Container>

      {/* Two-Column Layout (Text + Form) */}
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left Side - Contact Info + Image */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "#032C34", mb: 3 }}
            >
              <span style={{ color: "#72B7A4" }}>DocRide</span> strikes the
              perfect balance between{" "}
              <span style={{ color: "#c94b32", textDecoration: "underline" }}>
                flexibility and simplicity
              </span>
              , ensuring ease of use without sacrificing functionality.
            </Typography>

            {/* Contact Info */}
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 3 }}
            >
              <Box display="flex" alignItems="center" gap={2}>
                <EmailIcon sx={{ color: "#72B7A4" }} />
                <Typography variant="body1" sx={{ color: "#032C34" }}>
                  support@docride.co.uk
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={2}>
                <PhoneIcon sx={{ color: "#72B7A4" }} />
                <Typography variant="body1" sx={{ color: "#032C34" }}>
                  +44 123 456 789
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={2}>
                <LocationOnIcon sx={{ color: "#72B7A4" }} />
                <Typography variant="body1" sx={{ color: "#032C34" }}>
                  London, UK
                </Typography>
              </Box>
            </Box>

            {/* Contact Image */}
            <Box
              sx={{ display: "flex", justifyContent: "center", height: "100%" }}
            >
              <img
                src={contact}
                alt="Contact"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
            </Box>
          </Grid>

          {/* Right Side - Contact Form */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                bgcolor: "#E8F2EF",
                borderRadius: "12px",
                p: { xs: 3, sm: 4 },
                boxShadow: 3,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "#032C34",
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

                {/* CAPTCHA */}
                <Box sx={{ marginBottom: "20px", textAlign: "center" }}>
                  <div
                    className="h-captcha"
                    data-sitekey="your-hcaptcha-site-key"
                  ></div>
                </Box>
                <script
                  src="https://js.hcaptcha.com/1/api.js"
                  async
                  defer
                ></script>

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
                  Submit Form
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Embedded Google Map */}
      <Box sx={{ mt: 6, textAlign: "center" }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "#032C34", mb: 2 }}
        >
          Visit Us
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <iframe
            title="Google Map"
            width="90%"
            height="300"
            style={{ borderRadius: "12px", border: "none" }}
            src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=London,UK"
            allowFullScreen
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
