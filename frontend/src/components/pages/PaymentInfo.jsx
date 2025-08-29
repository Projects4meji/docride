import React, { useEffect } from "react";
import { Box, Typography, Container, Button, Divider } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { Check as CheckIcon } from "@mui/icons-material";
import { Close as CloseIcon } from "@mui/icons-material";
import { featuresList } from "./Pricing";
import pay from "../../assets/pay.avif";

const PaymentInfo = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const location = useLocation();
  const navigate = useNavigate();

  const plan = location.state?.plan;

  if (!plan) {
    return (
      <Container sx={{ py: 10, textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold" color="#1E626C">
          No Plan Selected
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Please go back and select a pricing plan to view payment info.
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 4, background: "#1E626C" }}
          onClick={() => navigate("/pricing")}
        >
          Go to Pricing Page
        </Button>
      </Container>
    );
  }

  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#ffffff",
        py: 10,
        overflow: "hidden",

        // Background Image
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${pay})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        },

        // Dark Overlay
        "::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
          zIndex: 0.5,
        },
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ✅ White Transparent Background Wrapper */}
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: { xs: 3, sm: 4, md: 5 },
            boxShadow: 3,
          }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ color: "#1E626C", mb: 2 }}
          >
            Payment Information
          </Typography>

          <Typography
            variant="h4"
            sx={{ mt: 3, fontWeight: "bold", color: "#3A7B81" }}
          >
            {plan.name} Plan - {plan.price}
          </Typography>

          <Typography
            variant="body1"
            sx={{ mt: 1, color: "#555", fontWeight: "bold" }}
          >
            {plan.name === "Test Drive" ? "For 1 Month" : "Per Month"}
          </Typography>

          <Divider sx={{ my: 4, bgcolor: "#FF9500", height: "4px" }} />

          <Box sx={{ textAlign: "left", px: { xs: 2, sm: 4 } }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", mb: 2, color: "#1E626C" }}
            >
              Plan Details:
            </Typography>

            {plan.features.map((featureValue, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography fontWeight="bold" sx={{ color: "#3A7B81" }}>
                  {featuresList[index]} {/* ✅ Display actual feature name */}
                </Typography>
                {featureValue === "✔" ? (
                  <CheckIcon sx={{ color: "#1E626C" }} /> // ✅ Check color
                ) : featureValue === "✖" ? (
                  <CloseIcon sx={{ color: "#FF0000" }} /> // ✅ Cross color
                ) : (
                  <Typography sx={{ ml: 2, color: "#333" }}>
                    {featureValue}
                  </Typography>
                )}
                {plan.content?.[index]?.trim() && (
                  <Typography variant="caption" sx={{ ml: 2, color: "#777" }}>
                    Note: {plan.content[index]}
                  </Typography>
                )}

                <Divider sx={{ mt: 1, bgcolor: "#E0E0E0" }} />
              </Box>
            ))}
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
            <Button
              variant="contained"
              sx={{
                mt: 5,
                borderRadius: 3,
                background: "linear-gradient(180deg, #73C7AD 0%, #3A7B81 100%)",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
              onClick={() => navigate("/checkout", { state: { plan } })}
            >
              Proceed to Checkout
            </Button>

            <Button
              variant="text"
              onClick={() => navigate("/pricing")}
              sx={{
                mt: 5,
                borderRadius: 3,
                color: "#E25E3E",
                fontWeight: "bold",
                border: "2px solid #E25E3E",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  border: "2px solid #E25E3E",
                  transform: "scale(1.05)",
                },
              }}
            >
              Back to Pricing
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PaymentInfo;
