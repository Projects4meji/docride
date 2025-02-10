import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
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
    <Box
      sx={{
        width: "100vw",
        pt: 8,
        px: { xs: 2, sm: 4, md: 6, lg: 10 },
      }}
    >
      {/* Contact Header Section */}
      <Container maxWidth="md" sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ color: "#032C34", mb: 1 }}
        >
          FOR MORE QUERIES
        </Typography>
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ color: "#72B7A4", mb: 3 }}
        >
          Contact Us
        </Typography>
      </Container>

      {/* Two-Column Layout (Text + Form) */}
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left Side - Text + Image */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "#032C34",
                lineHeight: "1.6",
                mb: 3, // ✅ Add spacing before image
              }}
            >
              <span style={{ color: "#72B7A4" }}>DocRide </span>
              strikes the perfect balance between{" "}
              <span style={{ color: "#72B7A4", textDecoration: "underline" }}>
                flexibility and simplicity
              </span>
              , ensuring ease of use without sacrificing functionality.
            </Typography>

            {/* Image Below Text - Fix alignment */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end", // ✅ Ensures the image touches the bottom
                height: "100%", // ✅ Makes sure it stretches to fill
              }}
            >
              <img
                src={contact}
                alt="Contact"
                style={{
                  width: "100%",
                  height: "100%", // ✅ Ensures it stretches fully
                  objectFit: "contain", // ✅ Prevents cropping
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
              

              <Box component="form" onSubmit={handleSubmit}>
                {/* Name Field */}
                <TextField
                  fullWidth
                  required
                  label="Enter Your Name"
                  variant="outlined"
                  placeholder="Name"
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
                  label="Enter Your Email"
                  type="email"
                  variant="outlined"
                  placeholder="Email"
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
                  label="More Queries"
                  variant="outlined"
                  placeholder="Your Query"
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
                <Box sx={{ marginBottom: "20px", textAlign: "center" }}>
                  <div
                    className="h-captcha"
                    data-sitekey="your-hcaptcha-site-key" // Replace with your actual site key
                  ></div>
                </Box>

                {/* Load hCaptcha Script */}
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
    </Box>
  );
};

export default Contact;
