import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
  Button,
  useMediaQuery,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import { Check as CheckIcon } from "@mui/icons-material";
import bgimage from "../../assets/bgimage.jpg";
import price from "../../assets/price2.jpg";

const pricingPlans = [
  {
    name: "Test Drive",
    price: "Free",
    features: [
      "✔",
      "Unlimited",
      "1",
      "-",
      "-",
      "-",
      "Email/Chat Support",
      "Complimentary 5 GB",
      "10000",
      "Complimentary 10 GB",
      "100,00 Tokens",
      "-",
    ],
  },
  {
    name: "Budget",
    price: "£50",
    features: [
      "✔",
      "upto 10 Users",
      "1",
      "✔",
      "charged @£200 per man-day",
      "Complimentary",
      "Email/Chat/Phone Support",
      "Complimentary 10 GB",
      "500K per month",
      "50 GB per month",
      "Free 0.5 Million tokens per month",
      "✔",
    ],
    content: [
      " ",
      "Additional users @ £4 per user (per month)",
      " ",
      "up to 1 Hour (Single session) through Video call",
      " ",
      " ",
      " ",
      "Additional each GB @ £0.5 per month",
      "Additional @ £15 per 100000 requests",
      "Additional @ £0.25 per GB",
      "Additional @ £25 per 1M Tokens",
    ],
  },
  {
    name: "Economy",
    price: "£100",
    features: [
      "✔",
      "upto 25 Users",
      "1",
      "✔",
      "charged @£300 per man-day",
      "Complimentary",
      "Email/Chat/Phone Support",
      "Complimentary 25 GB",
      "1 Million per month",
      "100 GB per month",
      "Free 0.5 Million tokens per month",
      "✔",
    ],
    content: [
      " ",
      "Additional users @ £3 per user (per month)",
      " ",
      "up to 1 Hour (Single session) through Video call",
      " ",
      " ",
      " ",
      "Additional each GB @ £0.5 per month",
      "Additional @ £10 per 100000 requests",
      "Additional @ £0.25 per GB",
      "Additional @ £25 per 1M Tokens",
    ],
  },
  {
    name: "Standard",
    price: "£300",
    features: [
      "✔",
      "upto 100 Users",
      "1",
      "✔",
      "Complimentary Internal Audit (up to 1 Man Day)",
      "Complimentary",
      "Email/Chat/Phone Support",
      "Complimentary 250 GB",
      "10 Million per month",
      "500 GB per month",
      "Free 2 Million tokens per month",
      "✔",
    ],
    content: [
      " ",
      "Additional users @ £2 per user (per month)",
      " ",
      "up to 2 Hour (Single session) through Video call",
      "Additional Man-days @ £150 each",
      " ",
      " ",
      "Additional each GB @ £0.3 per month",
      "Additional @ £10 per 100000 requests",
      "Additional @ £0.2 per GB",
      "Additional @ £20 per 1M Tokens",
    ],
  },
];

const featuresList = [
  "All Software Features",
  "User Accounts",
  "Admin Accounts",
  "On-boarding Assistance",
  "Internal Audit (Remote)",
  "Online OHS Consultancy (Zoom, Microsoft Teams) incl. for ISO 45001 certification",
  "Chat/Phone Support",
  "Cloud Storage",
  "Number of Data Requests (API Calls) from the Servers",
  "Data upload/download",
  "AI Prompts",
  "No Ads",
];

const PricingPlans = () => {
  const isMobile = useMediaQuery("(max-width: 1200px)");
  const [hoveredColumn, setHoveredColumn] = useState(null);

  return (
    <Box
      sx={{
        pb: { xs: 4, sm: 6, md: 8 },
        bgcolor: "white",
        textAlign: "center",
      }}
    >
      {/* FAQ Header Section */}
      <Box
        sx={{
          bgcolor: "#032C34",
          color: "#A0D0C5",
          py: { xs: 6, sm: 8, md: 10 }, // ✅ Adjusts padding dynamically
          mb: { xs: 4, sm: 5, md: 6 }, // ✅ Adjusts margin-bottom dynamically
          position: "relative",

          // ✅ Background Image Layer
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${price})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: { xs: "center", md: "left" }, // ✅ Center image for mobile
            opacity: 0.5,
            zIndex: 0,
          },

          // ✅ Color Overlay Layer
          "::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#2E8C7B", // ✅ Overlay with transparency
            opacity: 0.6,
            zIndex: 0.5,
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            px: { xs: 2, sm: 4, md: 6 }, // ✅ Ensures text stays within safe margins
          }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            color="white"
            sx={{
              fontSize: { xs: "24px", sm: "32px", md: "42px" }, // ✅ Responsive font size
            }}
          >
            Pricing{" "}
            <Box component="span" color="#356263">
              &
            </Box>{" "}
            Plans
          </Typography>

          <Typography
            variant="body1"
            color="#FFFFFF"
            sx={{
              mt: 1,
              mb: 3,
              fontSize: { xs: "14px", sm: "16px", md: "20px" }, // ✅ Responsive text size
              px: { xs: 1, sm: 3, md: 6 }, // ✅ Adds padding for readability on mobile
            }}
          >
            Find the perfect plan tailored to your needs. Whether you're just
            starting out or scaling your business, our pricing ensures you get
            the best value.
          </Typography>
        </Container>
      </Box>

      {/* ✅ Desktop View (Table) */}
      {!isMobile && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: { md: "70%", lg: "90%" },
            mx: "auto",
            borderRadius: 2,
            boxShadow: "0px 0px 15px 2px rgba(255, 165, 0, 0.8)",

            /* ✅ Enables vertical scrolling only when screen width is small */

            overflowY: { xs: "auto", sm: "auto" },
            position: "relative",
          }}
        >
          <TableContainer
            component={Paper}
            sx={{
              maxWidth: "100%",
              mx: "auto",
              borderRadius: 2,
              background: "linear-gradient(to bottom, #ffffff, #2C8A7A)",
            }}
          >
            <Table
              sx={{
                backgroundColor: "linear-gradient(to right, #66C2A5, #2C8A7A)",
              }}
            >
              {/* Table Header */}
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  {pricingPlans.map((plan, index) => (
                    <TableCell
                      key={index}
                      align="center"
                      sx={{
                        bgcolor:
                          hoveredColumn === index ? "#55AFA8" : "inherit",
                        color:
                          hoveredColumn === index ? "white" : "text.primary",
                        borderRadius: "30px 30px 0px 0px",
                        fontWeight: "bold",
                        py: 3,
                        transition: "background-color 0.3s ease",
                        width: 400, // Consistent width
                        minWidth: 400,
                        maxWidth: 200,
                      }}
                      onMouseEnter={() => setHoveredColumn(index)}
                      onMouseLeave={() => setHoveredColumn(null)}
                    >
                      <Typography variant="h6">{plan.name}</Typography>
                      <Typography variant="h4" fontWeight="bold" sx={{ mt: 1 }}>
                        {plan.price}
                      </Typography>
                      <Typography variant="body2">
                        {index === 0 ? "for 1 Month" : "Per month"}
                      </Typography>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              {/* Table Body */}
              <TableBody>
                {featuresList.map((feature, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ fontWeight: "bold", py: 1.5 }}>
                      {feature}
                    </TableCell>

                    {pricingPlans.map((plan, planIndex) => (
                      <TableCell
                        key={planIndex}
                        align="center"
                        sx={{
                          bgcolor:
                            hoveredColumn === planIndex ? "#55AFA8" : "inherit",
                          color:
                            hoveredColumn === planIndex
                              ? "white"
                              : "text.primary",
                          py: 1.5,
                          transition: "background-color 0.3s ease",
                          borderRadius:
                            index === featuresList.length - 1
                              ? "0px 0px 30px 30px"
                              : "0px",
                          width: 200,
                          minWidth: 200,
                          maxWidth: 200,
                        }}
                        onMouseEnter={() => setHoveredColumn(planIndex)}
                        onMouseLeave={() => setHoveredColumn(null)}
                      >
                        {plan.features[index] === "✔" ? (
                          <CheckIcon color="success" fontSize="large" />
                        ) : (
                          <Typography variant="body2">
                            {plan.features[index]}
                          </Typography>
                        )}

                        {plan.content?.[index] && (
                          <Typography
                            variant="caption"
                            sx={{
                              fontSize: "0.75rem",
                              display: "block",
                              mt: 0.5,
                              color:
                                hoveredColumn === planIndex
                                  ? "white"
                                  : "text.secondary",
                            }}
                          >
                            {plan.content[index]}
                          </Typography>
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}

                {/* Get Started Button Row (No Hover Effect) */}
                <TableRow>
                  <TableCell></TableCell>
                  {pricingPlans.map((plan, index) => (
                    <TableCell
                      key={index}
                      align="center"
                      sx={{
                        py: 2,
                        width: 200,
                        minWidth: 200,
                        maxWidth: 200,
                      }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{
                          borderRadius: 3,
                          background:
                            "linear-gradient(180deg, #73C7AD 0%, #3A7B81 100%)",
                          transition: "transform 0.2s ease-in-out",
                          "&:hover": {
                            transform: "scale(1.05)",
                          },
                        }}
                      >
                        Get Started
                      </Button>
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}

      {/* ✅ Mobile View (Cards) */}
      {isMobile && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
            px: 8,
            textAlign: "center",
            alignItems: "center", // ✅ Ensures all cards are centered
          }}
        >
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              sx={{
                boxShadow: "0px 0px 15px 2px rgba(255, 165, 0, 0.8)",
                borderRadius: 3,
                backgroundColor: "#fff",
                width: "100%", // ✅ Ensures the card uses full available width
                maxWidth: "400px", // ✅ Restrict maximum width for better layout
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center", // ✅ Center everything inside the card
              }}
            >
              <CardContent sx={{ pb: 2, width: "100%" }}>
                <Typography variant="h5" fontWeight="bold">
                  {plan.name}
                </Typography>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  color="#3A7B81"
                  sx={{ mt: 1 }}
                >
                  {plan.price}
                </Typography>
                <Typography variant="body2">
                  {index === 0 ? "for 1 Month" : "Per month"}
                </Typography>

                {/* ✅ Centered Features */}
                <Box
                  sx={{
                    mt: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center", // ✅ Centers feature list
                    textAlign: "center",
                    gap: 1, // Adds spacing between features
                  }}
                >
                  {featuresList.map((feature, featureIndex) => (
                    <Box key={featureIndex} sx={{ my: 1, width: "100%" }}>
                      <Typography fontWeight="bold">{feature}</Typography>
                      {plan.features[featureIndex] === "✔" ? (
                        <CheckIcon color="success" />
                      ) : (
                        <Typography variant="body2">
                          {plan.features[featureIndex]}
                        </Typography>
                      )}

                      {plan.content?.[featureIndex] && (
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{
                            fontSize: "0.75rem",
                            display: "block",
                            mt: 0.5,
                          }}
                        >
                          {plan.content[featureIndex]}
                        </Typography>
                      )}
                    </Box>
                  ))}
                </Box>

                {/* ✅ Centered Get Started Button */}
                <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      width: "70%", // ✅ Adjust width for better responsiveness
                      borderRadius: 3,
                      background:
                        "linear-gradient(180deg, #73C7AD 0%, #3A7B81 100%)",
                      transition: "transform 0.2s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    Get Started
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}

      <Container
        maxWidth="lg"
        sx={{ pt: { xs: 4, sm: 5, md: 6 }, px: { xs: 2, sm: 4, md: 6 } }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: "bold",
            mb: { xs: 2, sm: 3 }, // Responsive margin
            color: "#1E626C",
            fontSize: { xs: "24px", sm: "32px", md: "40px" }, // ✅ Responsive font size
            textAlign: "center", // ✅ Center align for better readability on small screens
          }}
        >
          Fair, Transparent, and Flexible Pricing
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: { xs: 3, sm: 4 }, // Responsive margin bottom
            color: "#555",
            lineHeight: 1.6,
            fontSize: { xs: "14px", sm: "16px", md: "18px" }, // ✅ Adjust text size for small screens
            maxWidth: "800px", // ✅ Limits width for readability
            mx: "auto", // ✅ Centers text block
            textAlign: "center", // ✅ Center align on mobile
          }}
        >
          At DocRide, we aim to provide a fair, transparent, and flexible
          pricing model to suit your business needs. Our subscription fees grant
          access to the DocRide software and may include complimentary services
          such as cloud storage, AI tokens, API calls, and data upload/download
          limits. Below are the key terms governing our pricing and payment
          structure.
        </Typography>

        <Box sx={{ textAlign: "center" }}>
          {" "}
          {/* ✅ Centers link */}
          <Link
            href="/pricepolicy"
            sx={{
              fontWeight: "bold",
              color: "#1976d2",
              textDecoration: "none",
              fontSize: { xs: "14px", sm: "16px" }, // ✅ Responsive link size
              "&:hover": {
                textDecoration: "underline",
                color: "#1E626C",
              },
            }}
          >
            View Pricing Policy
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default PricingPlans;
