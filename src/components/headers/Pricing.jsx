import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  useMediaQuery,
} from "@mui/material";
import { Check as CheckIcon } from "@mui/icons-material";

const pricingPlans = [
  {
    name: "Test Drive",
    price: "£0",
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
  const isMobile = useMediaQuery("(max-width: 900px)");
  const [hoveredColumn, setHoveredColumn] = useState(null);

  return (
    <Box
      sx={{
        py: { xs: 4, sm: 6, md: 8 },
        bgcolor: "white",
        textAlign: "center",
      }}
    >
      <Box sx={{ maxWidth: 700, mx: "auto", textAlign: "center", mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" color="#1E626C">
          Pricing & Plans
        </Typography>
        <Typography variant="body1" color="#C83607" sx={{ mt: 2 }}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </Typography>
      </Box>

      {/* Desktop Table */}
      {!isMobile && (
        <TableContainer
          component={Paper}
          sx={{
            maxWidth: "90%",
            mx: "auto",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <Table>
            {/* Table Header */}
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                {pricingPlans.map((plan, index) => (
                  <TableCell
                    key={index}
                    align="center"
                    sx={{
                      bgcolor: hoveredColumn === index ? "#55AFA8" : "inherit",
                      color: hoveredColumn === index ? "white" : "text.primary",
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
                    {/* Conditional Text: "1st Month" for Test Drive, "Per month" for others */}
                    <Typography variant="body2">
                      {index === 0 ? "1st Month" : "Per month"}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            {/* Table Body */}
            <TableBody>
              {featuresList.map((feature, index) => (
                <TableRow key={index}>
                  {/* Feature Name */}
                  <TableCell sx={{ fontWeight: "bold", py: 1.5 }}>
                    {feature}
                  </TableCell>

                  {/* Features & Content Loop */}
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
                        width: 200, // Ensuring the same width for all columns
                        minWidth: 200,
                        maxWidth: 200,
                      }}
                      onMouseEnter={() => setHoveredColumn(planIndex)}
                      onMouseLeave={() => setHoveredColumn(null)}
                    >
                      {/* Feature Value */}
                      {plan.features[index] === "✔" ? (
                        <CheckIcon color="success" fontSize="large" />
                      ) : (
                        <Typography variant="body2">
                          {plan.features[index]}
                        </Typography>
                      )}

                      {/* Content (Smaller Font & Lighter Color) */}
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
                      width: 200, // Ensure same width for buttons as well
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
      )}

      {/* Mobile Layout */}
      {isMobile && (
        <Box
          sx={{
            mt: 4,
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 2,
            px: 2,
          }}
        >
          {pricingPlans.map((plan, index) => (
            <Box
              key={index}
              sx={{
                bgcolor: plan.popular ? "primary.main" : "grey.100",
                p: 3,
                borderRadius: 2,
                textAlign: "center",
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                color={plan.popular ? "white" : "text.primary"}
              >
                {plan.name}
              </Typography>
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ mt: 1, color: plan.popular ? "white" : "text.primary" }}
              >
                {plan.price}
              </Typography>
              <Typography
                variant="body2"
                color={plan.popular ? "white" : "text.secondary"}
              >
                Per month
              </Typography>
              <Box sx={{ mt: 2 }}>
                {featuresList.map((feature, i) => (
                  <Typography
                    key={i}
                    variant="body2"
                    color={plan.popular ? "white" : "text.secondary"}
                  >
                    {plan.features[i] === "✔" ? (
                      <CheckIcon color="success" fontSize="small" />
                    ) : (
                      plan.features[i]
                    )}
                  </Typography>
                ))}
              </Box>
              <Button
                variant="contained"
                color="secondary"
                sx={{ mt: 2, borderRadius: 3 }}
              >
                Get Started
              </Button>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default PricingPlans;
