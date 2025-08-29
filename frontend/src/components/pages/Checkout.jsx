import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress, Container } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../Axios";
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Replace with your actual Stripe publishable key
const stripePromise = loadStripe("pk_test_51R3Q1PEYQxHtXYU4qOCuPhqRA97YpuM2Nvry3lHdfMLzngKRzdRIm7hJ5mYsg2qZ1xfletQWIda9esqqNmLhI6Cp00Q1AN1iTT");

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const plan = location.state?.plan;

  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!plan) {
      navigate("/pricing");
      return;
    }

    // Call backend to create checkout session
    const createSession = async () => {
      try {
        const response = await axios.post("create-checkout-session/", { plan: plan.key }); 
        setClientSecret(response.data.clientSecret);
        setLoading(false);
      } catch (error) {
        console.error("Error creating checkout session:", error);
        setLoading(false);
      }
    };

    createSession();
  }, [plan, navigate]);

  if (loading) {
    return (
      <Container sx={{ py: 10, textAlign: "center" }}>
        <CircularProgress />
        <Typography sx={{ mt: 2 }}>Preparing your checkout...</Typography>
      </Container>
    );
  }

  if (!clientSecret) {
    return (
      <Container sx={{ py: 10, textAlign: "center" }}>
        <Typography variant="h5" color="error">
          Failed to initiate checkout. Please try again.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: "bold",
          color: "#1E626C",
          textAlign: "center",
        }}
      >
        Complete Your Payment
      </Typography>

      <Box
        sx={{
          borderRadius: "16px",
          border: "1px solid #ccc",
          p: 2,
          minHeight: "500px",
        }}
        id="checkout-container"
      >
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{ clientSecret }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </Box>
    </Container>
  );
};

export default Checkout;
