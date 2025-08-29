import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { ExpandMore, Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import bgimage from "../../assets/bgimage.avif";
import getst from "../../assets/faq/getst.avif";
import account from "../../assets/faq/account.avif";
import audit from "../../assets/faq/audit.avif";
import payment from "../../assets/faq/payment.avif";
import follow from "../../assets/faq/folup.avif";

const faqData = [
  {
    question: "Is it price competitive?",
    answer:
      "We have kept the subscription price very competitive to ensure that small and medium businesses can afford it. We do not ask for long-term or annual commitments.",
  },
  {
    question: "Why is it claimed to be better than similar available products?",
    answer:
      "Our product stands out because it is designed by safety professionals, ensuring your transition to a paperless system is seamless and efficient. It also meets ISO 45001 requirements.",
  },
  {
    question:
      "We do not have any Health and Safety management experience. Is DocRide still suitable for us?",
    answer:
      "Absolutely! DocRide is designed for ease of use, even for those without experience. Our platform provides predefined workflows and access to consultancy services.",
  },
  {
    question:
      "What is the optimum balance between Flexibility and Simplicity as you claim?",
    answer:
      "DocRide ensures flexibility while keeping processes simple, following ISO 45001 guidelines and best practices. Pre-designed forms reduce documentation workload.",
  },
  {
    question:
      "Are there ready-to-use Risk Assessments and Inspection Checklists available?",
    answer:
      "No, as every workplace is unique. DocRide allows you to tailor risk assessments and checklists to fit your business needs.",
  },
];

const categories = [
  {
    title: "Getting Started",
    description:
      "Attracting good money and achieving financial success is within your reach. With our innovative solutions and expert guidance.",
  },
  {
    title: "My Account",
    description:
      "Attracting good money and achieving financial success is within your reach. With our innovative solutions and expert guidance.",
  },
  {
    title: "Audit",
    description:
      "Attracting good money and achieving financial success is within your reach. With our innovative solutions and expert guidance.",
  },
  {
    title: "Follow up",
    description:
      "Attracting good money and achieving financial success is within your reach. With our innovative solutions and expert guidance.",
  },
  {
    title: "Payment",
    description:
      "Attracting good money and achieving financial success is within your reach. With our innovative solutions and expert guidance.",
  },
];

const categoryColors = [
  "linear-gradient(180deg, #FFFFFF 0%, rgba(155, 215, 199, 0.43) 100%)", // Original (Greenish)
  "linear-gradient(180deg, #FFFFFF 0%, rgba(173, 216, 230, 0.5) 100%)", // Light Blue
  "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 204, 0.6) 100%)", // Light Yellow
  "linear-gradient(180deg, #FFFFFF 0%, rgba(186, 85, 211, 0.5) 100%)", // Purple
  "linear-gradient(180deg, #FFFFFF 0%, rgba(144, 238, 144, 0.5) 100%)", // Light Green
];

const categoryImages = {
  "Getting Started": getst,
  "My Account": account,
  Audit: audit,
  Payment: payment,
  "Follow up": follow,
  // Add more category images here
};

const FAQ = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const navigate = useNavigate();

  // Filtered FAQs based on search term
  const filteredFAQs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>FAQs | ISO 45001, OHS Management & AI Safety Platform</title>
        <meta
          name="description"
          content="Got questions about DocRide’s AI-based OHS management system? Find answers related to ISO 45001 compliance, paperless safety management, onboarding, and more."
        />
        <meta
          name="keywords"
          content="ISO 45001, OHS management system, AI based OHS management, Paperless OHS management, Online OHS management, Risk assessment, Health and safety management FAQs"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Box
        sx={{
          bgcolor: "#ffffff",
          width: "100vw",
          position: "relative",
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            opacity: 0.1,
            zIndex: -1,
          },
        }}
      >
        {/* FAQ Header Section */}
        <Box
          sx={{
            bgcolor: "#032C34",
            color: "#A0D0C5",
            pt: 6,
            pb: 4,
            position: "relative",
            "::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100%",
              backgroundImage: `url(${bgimage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              opacity: 0.5,
              zIndex: 0,
            },
          }}
        >
          <Container
            maxWidth="lg"
            sx={{ position: "relative", zIndex: 1, textAlign: "center" }}
          >
            <Typography variant="h3" fontWeight="bold" color="white">
              Frequently Asked Questions
            </Typography>
            <Typography variant="body1" color="#D1E7E0" sx={{ mt: 1, mb: 3 }}>
              Ask Anything
            </Typography>

            {/* Search Bar - Dynamically Filters FAQ */}
            <Box sx={{ maxWidth: "600px", mx: "auto", mb: 6 }}>
              <TextField
                fullWidth
                placeholder="What can I help you with?"
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{
                  bgcolor: "white",
                  borderRadius: "50px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "50px",
                    paddingRight: "10px",
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <Search sx={{ color: "#6DB9A0" }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Container>
        </Box>

        {/* FAQ Category Section */}
        <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign={{ xs: "center", md: "left" }}
            gutterBottom
            sx={{
              fontSize: { xs: "22px", sm: "26px", md: "30px", lg: "36px" },
            }}
          >
            Categories
          </Typography>

          <Grid
            container
            spacing={{ xs: 2, sm: 3, md: 4 }}
            sx={{
              mt: { xs: 2, sm: 3, md: 4 },
              justifyContent: { xs: "center", md: "flex-start" }, // Center on small screens
            }}
          >
            {categories.map((category, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    sx={{
                      background: categoryColors[index],
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": { bgcolor: "#D1E7E0" },
                      borderRadius: "12px",
                      boxShadow: 2,
                      maxWidth: 300, // Ensuring consistent width
                    }}
                    onClick={() =>
                      navigate(
                        `/faq/${category.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`
                      )
                    }
                  >
                    {/* Box for Image/Icon */}
                    <Box
                      sx={{
                        width: "100%",
                        height: { xs: "80px", sm: "130px" },
                        overflow: "hidden",
                        borderTopLeftRadius: "12px",
                        borderTopRightRadius: "12px",
                      }}
                    >
                      <img
                        src={categoryImages[category.title] || account}
                        alt={category.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>

                    <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{
                          fontSize: { xs: "16px", sm: "18px", md: "20px" },
                        }}
                      >
                        {category.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ fontSize: { xs: "14px", sm: "16px" } }}
                      >
                        {category.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Container
          maxWidth="xl"
          sx={{
            py: { xs: 6, sm: 8, md: 10 }, // Adjust vertical padding for different screens
            px: { xs: 2, sm: 4, md: 8, lg: 16, xl: 24 }, // Responsive horizontal padding
          }}
        >
          <Grid container spacing={4} alignItems="start">
            {/* FAQ Title */}
            <Grid item xs={12}>
              <Typography
                variant="h4"
                fontWeight="bold"
                textAlign={{ xs: "center", md: "left" }} // Center text on small screens
                gutterBottom
                sx={{
                  fontSize: { xs: "22px", sm: "26px", md: "30px", lg: "36px" }, // Adjust heading size
                }}
              >
                Top Questions
              </Typography>
            </Grid>

            {/* FAQ Questions */}
            <Grid item xs={12}>
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq, index) => (
                  <Accordion
                    key={index}
                    sx={{
                      bgcolor: "white",
                      mb: 2,
                      border: "2px solid #C0DED8",
                      borderRadius: "8px",
                      boxShadow: 2,
                      "&:before": { display: "none" }, // Remove default focus outline
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMore sx={{ color: "#6DB9A0" }} />}
                      sx={{
                        bgcolor: "#ffffff",
                        color: "#51A18B",
                        fontWeight: "bold",
                        borderRadius: "8px 8px 0 0",
                        "& .MuiAccordionSummary-content": {
                          flexGrow: 1, // Ensures text does not overlap with icon
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "16px",
                            sm: "18px",
                            md: "20px",
                            lg: "22px",
                          },
                          lineHeight: 1.5, // Better readability
                          wordBreak: "break-word", // Handles long text gracefully
                        }}
                      >
                        {faq.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        bgcolor: "#f8fbfa",
                        color: "black",
                        borderRadius: "0 0 8px 8px",
                        px: { xs: 2, sm: 3, md: 4 }, // Padding for better spacing
                        py: { xs: 1, sm: 2 }, // Adjust vertical padding
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "14px",
                            sm: "16px",
                            md: "18px",
                            lg: "20px",
                          },
                          lineHeight: 1.6, // Ensures good readability
                        }}
                      >
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))
              ) : (
                <Typography
                  variant="h6"
                  textAlign="center"
                  color="gray"
                  sx={{
                    fontSize: { xs: "16px", sm: "18px", md: "20px" },
                    py: 3,
                  }}
                >
                  No matching FAQs found.
                </Typography>
              )}
            </Grid>
          </Grid>
        </Container>

        {/* FAQ Submission Form */}
        <Container sx={{ pb: 6, px: { xs: 2, sm: 4, md: 6 } }}>
          <Box
            sx={{
              background: "linear-gradient(to right, #96E0CC, #68B9BA)",
              borderRadius: "12px",
              maxWidth: "900px",
              mx: "auto",
              pt: 6,
              p: { xs: 2, sm: 3, md: 5 }, // Adjusts padding based on screen size
              textAlign: "center",
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              color="#ffffff"
              sx={{ fontSize: { xs: "18px", sm: "22px", md: "28px" } }} // Responsive font size
            >
              Can,t Find your Question
            </Typography>

            <Box component="form" sx={{ mt: 4 }}>
              {/* Email Input */}
              <TextField
                fullWidth
                required
                type="email"
                label="Email"
                variant="outlined"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  mb: 3,
                  bgcolor: "white",
                  borderRadius: "6px",
                  "& .MuiOutlinedInput-root": {
                    fontSize: { xs: "14px", sm: "16px" }, // Responsive font size
                  },
                }}
              />

              {/* Question Input */}
              <TextField
                fullWidth
                required
                label="Add your question below"
                variant="outlined"
                placeholder="Your question..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
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
                sx={{
                  width: { xs: "80%", sm: "50%", md: "30%" }, // Adjust button width responsively
                  background: "linear-gradient(to right, #73C7AD, #3A7B81)",
                  borderRadius: "30px",
                  color: "white",
                  fontSize: { xs: "14px", sm: "16px" },
                  py: { xs: 1, sm: 1.2 }, // Adjust padding for different screen sizes
                  transition: "all 0.9s ease-in-out",
                  "&:hover": {
                    background: "transparent",
                    border: "2px solid #2C8A7A",
                    color: "#ffffff",
                  },
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default FAQ;
