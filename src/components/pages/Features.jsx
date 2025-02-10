import React from "react";
import { Container, Typography, Grid, Card, CardContent, Box } from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PeopleIcon from "@mui/icons-material/People";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SpeedIcon from "@mui/icons-material/Speed";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

const features = [
  {
    icon: <LocalHospitalIcon fontSize="large" sx={{ color: "#2C8A7A" }} />,
    title: "Specialized Medical Transport",
    description: "Designed specifically for medical professionals and patients needing urgent transportation."
  },
  {
    icon: <PeopleIcon fontSize="large" sx={{ color: "#2C8A7A" }} />,
    title: "Professional Drivers",
    description: "All our drivers are trained professionals with experience in handling patient transport."
  },
  {
    icon: <VerifiedUserIcon fontSize="large" sx={{ color: "#2C8A7A" }} />,
    title: "Safe & Secure",
    description: "Safety is our priority with top-class hygiene standards and secure ride protocols."
  },
  {
    icon: <SupportAgentIcon fontSize="large" sx={{ color: "#2C8A7A" }} />,
    title: "24/7 Customer Support",
    description: "Round-the-clock support to assist you with your ride bookings and inquiries."
  },
  {
    icon: <SpeedIcon fontSize="large" sx={{ color: "#2C8A7A" }} />,
    title: "Fast & Reliable Service",
    description: "Instant ride booking with minimal wait times, ensuring timely transport for medical needs."
  },
  {
    icon: <PhoneAndroidIcon fontSize="large" sx={{ color: "#2C8A7A" }} />,
    title: "Easy-to-Use App",
    description: "Book, track, and manage rides conveniently through our user-friendly mobile app."
  }
];

const Features = () => {
  return (
    <Box sx={{ bgcolor: "#F4F7F6", py: 8 }}>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Typography variant="h3" fontWeight="bold" color="#032C34">
          Our Features
        </Typography>
        <Typography variant="h6" sx={{ mb: 5, color: "#555" }}>
          Why Choose DocRide? We provide a seamless and reliable transportation service.
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ boxShadow: 3, p: 2, textAlign: "center" }}>
                <CardContent>
                  {feature.icon}
                  <Typography variant="h6" gutterBottom fontWeight="bold">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="#555">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
