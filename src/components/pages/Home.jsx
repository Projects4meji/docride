import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Box,
  IconButton,
  Avatar,
  Fade,
  Dialog,
  DialogContent,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useDrag } from "@use-gesture/react";
import PricingPlans from "./Pricing";
import CloseIcon from "@mui/icons-material/Close";

// Image Imports
import Slide1 from "../../assets/home/Slide1.jpg";
import Slide2 from "../../assets/home/Slide2.png";
import Slide3 from "../../assets/home/Slide3.png";
import Video from "../../assets/home/VideoThumbnail.jpg";
import DocRideLogo from "../../assets/DRLogo.png";
import world from "../../assets/home/world.jpg";
import Sales from "../../assets/home/partners.jpg";
import f1 from "../../assets/home/f1.jpg";
import f2 from "../../assets/home/f2.jpg";
import f3 from "../../assets/home/f3.jpg";
import f4 from "../../assets/home/f4.jpg";
import f5 from "../../assets/home/f5.jpg";
import f6 from "../../assets/home/f6.jpg";

// ✅ Fixed Slides Array
const slides = [Slide1, Slide2, Slide3];

const Home = () => {
  const [open, setOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = slides.length;
  const intervalRef = useRef(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [maxHeight, setMaxHeight] = useState(0);
  const cardRefs = useRef([]);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handlePrev = () => {
    setFadeIn(false); // Trigger fade out
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setFadeIn(true); // Trigger fade in after change
    }, 300); // Delay to match animation timing
  };

  const handleNext = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setFadeIn(true);
    }, 300);
  };

  // Auto-slide every 3 seconds (fast transition)
  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startAutoSlide = () => {
    clearInterval(intervalRef.current); // Ensure only one interval runs
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 3000);
  };

  // Handle swipe gestures
  const bind = useDrag(
    ({ movement: [mx], down, swipe: [swipeX], velocity }) => {
      if (!down && velocity > 0.2) {
        if (swipeX === 1) {
          goToPrevSlide(); // ✅ Swiping Right (→) moves to Previous slide
        } else if (swipeX === -1) {
          goToNextSlide(); // ✅ Swiping Left (←) moves to Next slide
        }
      }
    },
    { axis: "lock" } // ✅ Prevents diagonal movement
  );

  // ✅ Move to the next slide
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
    restartAutoSlide();
  };

  // ✅ Move to the previous slide
  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
    restartAutoSlide();
  };

  // ✅ Restart auto-slide after manual swipe
  const restartAutoSlide = () => {
    clearInterval(intervalRef.current);
    startAutoSlide();
  };

  const testimonials = [
    {
      text: "DocRide simplifies compliance while ensuring accuracy and efficiency.",
      name: "Chartered Fellow of IOSH",
      position: "Industry Expert",
      photo: "https://via.placeholder.com/80", // Replace with actual image
    },
    {
      text: "DocRide transformed the way we handle health & safety management, reducing our workload significantly.",
      name: "John Smith",
      position: "Health & Safety Manager",
      photo: "https://via.placeholder.com/80", // Replace with actual image
    },
    {
      text: "Since implementing DocRide, we have streamlined risk assessments and compliance, making audits stress-free.",
      name: "Jane Doe",
      position: "Operations Director",
      photo: "https://via.placeholder.com/80", // Replace with actual image
    },
    {
      text: "An intuitive platform that delivers both flexibility and control, crucial for managing safety at scale.",
      name: "Michael Brown",
      position: "EHS Specialist",
      photo: "https://via.placeholder.com/80", // Replace with actual image
    },
  ];

  const features = useMemo(
    () => [
      {
        image: f1,
        title: "Tailored User Management",
        bulletPoints: [
          "Define roles and access levels based on responsibilities.",
          "Site-specific permissions for centralized or decentralized management.",
          "Tailored dashboards enhance clarity for every user.",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        image: f2,
        title: "Scalable for Businesses of All Sizes",
        bulletPoints: [
          "From SMEs to large organizations, scale effortlessly.",
          "Manage single or multi-site operations with site-specific access controls.",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        image: f3,
        title: "User-Friendly Design",
        bulletPoints: [
          "Intuitive workflows and pre-designed forms for efficiency.",
          "Role-specific dashboards show only relevant tasks.",
          "Notifications ensure no critical tasks are missed.",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        image: f4,
        title: "Access from Anywhere Anytime",
        bulletPoints: [
          "Cloud-based platform works on any device with internet.",
          "Automate approvals, assign actions and track compliance on the go.",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        image: f5,
        title: "Effortless Legal Compliance",
        bulletPoints: [
          "AI identifies business-specific OHS legal requirements.",
          "You can assign roles and track actions for compliance.",
          "Monitor real-time progress on risk controls and compliance status.",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        image: f6,
        title: "ISO 45001 Conformance Made Simple",
        bulletPoints: [
          "Pre-designed workflows aligned with ISO 45001:2018 requirements.",
          "Optimized for efficiency without extensive documentation burdens.",
          "90% of SMEs can develop and deploy in less than 3 hours.",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
    ],
    [] // Empty dependency array ensures `features` remains stable
  );

  useEffect(() => {
    if (cardRefs.current.length > 0) {
      const heights = cardRefs.current.map((ref) =>
        ref ? ref.offsetHeight : 0
      );
      setMaxHeight(Math.max(...heights));
    }
  }, [features]);

  const handleOpen = (feature) => {
    setSelectedFeature(feature);
    setOpen(true);
  };

  // Function to close modal
  const handleClose = () => {
    setOpen(false);
    setSelectedFeature(null);
  };

  return (
    <Box sx={{ width: "100vw", overflow: "hidden" }}>
      <Box sx={{ bgcolor: "#032C34", borderRadius: "0 0 50px 50px" }}>
        {/* Hero Section */}
        <Grid
          container
          sx={{
            minHeight: "60vh",
            alignItems: "center",
            px: { xs: 2, sm: 6, md: 8, lg: "80px" },
            pb: "20px",
          }}
        >
          {/* Left Section - Text Content */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: { xs: "center", lg: "left" },
              px: { xs: 2, sm: 4, md: 6, lg: "80px" },
              mt: { xs: 4, md: 4 },
            }}
          >
            <Typography
              fontWeight={700}
              sx={{
                color: "#FFFFFF",
                lineHeight: 1.2,
                fontSize: { xs: "30px", sm: "28px", md: "30px", lg: "40px" }, // ✅ More responsive scaling
              }}
            >
              <span style={{ color: "#96e0cc", fontWeight: 700 }}>
                Develop and Deploy{" "}
              </span>
              Your ISO 45001 compliant{" "}
              <span style={{ color: "#68b9ba", fontWeight: 700 }}>
                Health &
              </span>{" "}
              <span style={{ color: "#68b9ba", fontWeight: 700 }}>
                Safety Management System
              </span>{" "}
              with 10X Efficiency.
            </Typography>

            <Typography
              variant="body1"
              color="#68B9BABA"
              sx={{
                mt: 3,
                fontWeight: "medium",
                fontSize: { xs: "14px", sm: "16px", md: "18px" },
                display: { xs: "none", sm: "none", md: "block" },
              }}
            >
              More than 90% of SMEs can operationalize their health and safety
              management system <br /> in hours with DocRide’s AI-powered tools
              and pre-designed templates.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" }, //Stacks on mobile, row on larger screens
                alignItems: "center",
                justifyContent: {
                  xs: "center",
                  sm: "center",
                  md: "center",
                }, // ✅ Centers for xs/md
                gap: { xs: 1.5, sm: 2 },
                mt: 3,
              }}
            >
              {/* "Start Your Free Trial Now" Button - Always Visible */}
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(to right, #66C2A5, #2C8A7A)",
                  borderRadius: "30px",
                  padding: { xs: "8px 20px", sm: "10px 25px" },
                  fontSize: { xs: "14px", sm: "16px" },
                  textTransform: "none",
                  border: "2px solid #2C8A7A",
                  transition: "all 0.9s ease-in-out",
                  "&:hover": {
                    background: "#032C34",
                    border: "2px solid #2C8A7A",
                    color: "#ffffff",
                  },
                }}
              >
                Start Your Free Trial Now
              </Button>

              {/* "See DocRide in Action" Button - Hides only on xs screens */}
              <Button
                variant="outlined"
                sx={{
                  display: { xs: "none", sm: "flex" }, // ✅ Hides on xs only, visible on sm+
                  border: "2px solid #2C8A7A",
                  borderRadius: "30px",
                  padding: { xs: "8px 20px", sm: "10px 25px" },
                  fontSize: { xs: "14px", sm: "16px" },
                  fontWeight: "bold",
                  textTransform: "none",
                  color: "#ffffff",
                  "&:hover": {
                    background: "linear-gradient(to right, #66C2A5, #2C8A7A)",
                    border: "2px solid #2C8A7A",
                    color: "#ffffff",
                  },
                }}
              >
                See DocRide in Action
              </Button>
            </Box>
          </Grid>

          {/* Right Section - Auto Sliding Content */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: { xs: 4, md: 0 },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: { xs: "90%", sm: "80%", md: "700px" }, // ✅ Responsive width
                height: { xs: "200px", sm: "350px", md: "400px" }, // ✅ Dynamic height
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: 3,
                backgroundColor: "#fff",
              }}
            >
              <Box
                {...bind()} // ✅ Attach swipe gestures correctly
                sx={{
                  display: "flex",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  touchAction: "none", // ✅ Prevents scrolling conflicts
                  pointerEvents: "auto", // ✅ Ensure swipe gestures are detected
                  cursor: "grab", // ✅ Visual feedback for swipe support
                }}
              >
                {/* ✅ Slide Wrapper */}
                <Box
                  sx={{
                    display: "flex",
                    width: `${slides.length * 100}%`,
                    transition: "transform 0.5s ease-in-out",
                    transform: `translateX(-${currentSlide * 100}%)`,
                  }}
                >
                  {slides.map((image, index) => (
                    <Box
                      key={index}
                      component="img"
                      src={image}
                      alt={`Slide ${index + 1}`}
                      sx={{
                        width: "100%",
                        height: "100%",
                        flexShrink: 0,
                        objectFit: "cover",
                        borderRadius: "10px",
                        pointerEvents: "none",
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          width: "100vw",
          bgcolor: "#FFFFFF",
          textAlign: "center",
          py: 10,
          borderRadius: "0 0 50px 50px",
          overflow: "hidden",
        }}
      >
        {/* Experience Section */}
        <Box sx={{ bgcolor: "#FFFFFF", pt: "100px", position: "relative" }}>
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                color: "#1E626C",
                mb: 4,
                px: 8,
                fontSize: { xs: "28px", sm: "32px", md: "36px", lg: "41px" }, // ✅ Responsive Font Size
              }}
            >
              Experience the difference with{" "}
              <span style={{ color: "#2C8A7A" }}>DocRide</span>
            </Typography>

            {/* ✅ Video Image Wrapper (Scales on sm, xs, and md) */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                zIndex: 2,
              }}
            >
              <Box
                component="img"
                src={Video}
                alt="DocRide Dashboard"
                sx={{
                  width: { xs: "90%", sm: "80%", md: "75%", lg: "100%" }, // ✅ Video scales down
                  maxWidth: "1200px",
                  borderRadius: "15px",
                  boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.1)",
                  zIndex: 2,
                  position: "inherit",
                }}
              />
            </Box>
          </Container>
        </Box>

        {/* Why DocRide Section */}
        <Box
          sx={{
            bgcolor: "#EDF7F5",
            px: { xs: 2, md: 10 },
            pt: "200px",
            pb: "65px",
            mt: "-100px",
            position: "relative",
            borderRadius: "250px",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          <Typography sx={{ color: "#6DB9A0" }}>DOCRIDE BENEFITS</Typography>

          <Typography
            fontWeight="bold"
            sx={{
              color: "#1E626C",
              mb: "40px",
              fontSize: { xs: "28px", sm: "32px", md: "36px", lg: "41px" }, // ✅ Responsive Font Size
            }}
          >
            Why DocRide
          </Typography>

          {/* ✅ Responsive Paragraphs */}
          <Typography
            textAlign="center"
            sx={{
              color: "#000000",
              mb: 2,
              px: { xs: 2, sm: 6, md: 10, lg: "380px" }, // Adjust width for readability
              fontSize: { xs: "15px", sm: "15px" },
              lineHeight: "28px",
            }}
          >
            Introducing DocRide – your all-in-one Health & Safety Management
            System. Simplify compliance with ready-to-use tools for risk
            assessments, inspections, and incident reporting. Assign user roles,
            follow best practices, and stay compliant with ease. DocRide
            delivers flexibility and simplicity without compromising
            functionality.
          </Typography>

          <Typography
            textAlign="center"
            sx={{
              color: "#000000",
              mb: 2,
              px: { xs: 2, sm: 6, md: 10, lg: "380px" },
              fontSize: { xs: "15px", sm: "15px" },
              lineHeight: "28px",
            }}
          >
            DocRide streamlines health and safety management, eliminating the
            need to build a system from scratch. Risk assessments drive control
            measures, which can be requested through the Resources tab.
            Inspections verify compliance, and linked nonconformities ensure
            proactive safety and simplified compliance.
          </Typography>
          <Typography
            textAlign="center"
            sx={{
              color: "#000000",
              mb: 2,
              px: { xs: 2, sm: 6, md: 10, lg: "380px" },
              fontSize: { xs: "15px", sm: "15px" },
              lineHeight: "28px",
            }}
          >
            With DocRide, every aspect of health and safety management is
            interconnected, providing clear performance visibility.
          </Typography>

          {/* Small DocRide Logo */}
          <Box
            component="img"
            src={DocRideLogo}
            alt="DocRide Logo"
            sx={{
              py: "30px",
              width: 80,
              maxWidth: "100%",
              position: "relative",
              zIndex: 3,
            }}
          />

          {/* Features Section with Responsive Grid */}
          <Box
            sx={{
              width: "100%",
              bgcolor: "#EDF7F5",
              textAlign: "center",
              borderRadius: "150px",
              py: 10,
              px: { xs: 2, sm: 6, md: 12, lg: "250px" }, // ✅ Responsive Padding
              mt: "-80px",
              position: "relative",
              zIndex: 2,
            }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                color: "#1E626C",
                mb: 4,
                fontSize: { xs: "28px", sm: "32px", md: "36px", lg: "41px" },
              }}
            >
              Here are some standout features
            </Typography>

            {/* Responsive Features Grid */}
            <Grid
              container
              rowSpacing={4}
              columnSpacing={1}
              justifyContent="center"
            >
              {features.map((feature, index) => {
                const isExpanded = expandedIndex === index;
                return (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card
                      ref={(el) => (cardRefs.current[index] = el)}
                      sx={{
                        borderRadius: "15px",
                        boxShadow: 3,
                        background:
                          index % 2 === 1
                            ? "linear-gradient(273deg, #51ABA6 0%, #79D2BD 100%)"
                            : "#F7FCF8",
                        color: index % 2 === 1 ? "#fff" : "black",
                        width: { xs: "90%", sm: "80%", md: "100%" },
                        maxWidth: { xs: "250px", sm: "280px", md: "360px" },
                        margin: "auto",
                        paddingBottom: "15px",
                        minHeight: `${maxHeight}px`, // Set uniform height for all cards
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between", // Ensures button stays at bottom
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "left",
                          pt: { xs: 1.5, sm: 2, md: 3 },
                          pb: 1,
                          pl: { xs: 2, sm: 3, md: 4 },
                        }}
                      >
                        <img
                          src={feature.image}
                          alt={feature.title}
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "cover",
                            borderRadius: "20%",
                          }}
                        />
                      </Box>

                      <CardContent
                        sx={{
                          textAlign: "left",
                          px: { xs: 3, sm: 4 },
                          flex: "1 1 auto",
                        }}
                      >
                        <Typography
                          fontSize={{ xs: "13px", sm: "14px", md: "16px" }}
                          fontWeight="bold"
                          sx={{
                            mb: 1,
                            color: index % 2 === 0 ? "#36767E" : "inherit",
                          }}
                        >
                          {feature.title}
                        </Typography>

                        {/* Bullet Points (Always Visible) */}
                        {feature.bulletPoints && (
                          <Box
                            component="ul"
                            sx={{
                              paddingLeft: "16px",
                              margin: "0px",
                            }}
                          >
                            {feature.bulletPoints.map((point, i) => (
                              <Typography
                                key={i}
                                component="li"
                                fontSize={{
                                  xs: "11px",
                                  sm: "13px",
                                  md: "14px",
                                }}
                              >
                                {point}
                              </Typography>
                            ))}
                          </Box>
                        )}
                      </CardContent>

                      {/* Show More Button */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          pb: 2,
                        }}
                      >
                        <Button
                          variant="text"
                          sx={{
                            textTransform: "none",
                            fontSize: { xs: "12px", sm: "13px" },
                            color: index % 2 === 1 ? "white" : "#36767E",
                          }}
                          onClick={() => handleOpen(feature)}
                        >
                          Show More
                        </Button>
                      </Box>
                    </Card>
                  </Grid>
                );
              })}
              {/* Modal Popup */}
              <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="md"
                fullWidth
                sx={{
                  "& .MuiPaper-root": {
                    borderRadius: "30px", // Rounded corners
                    background:
                      "linear-gradient(180deg, #73C7AD 0%, #3A7B81 100%)", // Gradient background
                    color: "white",
                  },
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
                  <IconButton onClick={handleClose} sx={{ color: "white" }}>
                    <CloseIcon />
                  </IconButton>
                </Box>
                <DialogContent>
                  {selectedFeature && (
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <iframe
                        width="100%"
                        height="400"
                        src={selectedFeature.videoUrl}
                        title={selectedFeature.title}
                        frameBorder="0"
                        allowFullScreen
                        style={{ borderRadius: "20px" }}
                      ></iframe>
                    </Box>
                  )}
                </DialogContent>
              </Dialog>
            </Grid>

            <Box
              component={Link}
              to="/modules"
              sx={{
                mt: { xs: 10, sm: 12, md: 15, lg: 20 }, // ✅ Adjusts spacing for different screens
                px: { xs: "20px", sm: "30px", md: "40px" }, // ✅ Adjusts padding
                py: { xs: "6px", sm: "8px" }, // ✅ Adjusts height of button
                fontSize: { xs: "14px", sm: "15px", md: "16px" }, // ✅ Scales font size
                textAlign: "center",
                borderRadius: "30px",
                border: "2px solid #6DB9A0",
                background: "none",
                fontWeight: "bold",
                color: "#1E626C",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
                display: "inline-block", // ✅ Ensures proper spacing
                mx: { xs: "auto", md: 0 }, // ✅ Centers button on small screens
                "&:hover": {
                  background: "linear-gradient(to right, #66C2A5, #2C8A7A)",
                  border: "2px solid #2C8A7A",
                  color: "#ffffff",
                },
              }}
            >
              VIEW OUR MODULES
            </Box>
          </Box>
        </Box>

        {/* Testimonial */}
        <Box
          sx={{
            width: "100%",
            bgcolor: "#F8F8F8",
            py: { xs: 6, sm: 8, md: 10 },
            px: { xs: 3, sm: 5, md: 8, lg: 12 },
            mt: 14,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* ✅ Responsive Headline */}
          <Typography
            variant="h4"
            sx={{
              color: "#1E626C",
              mb: { xs: 4, md: 6 },
              fontWeight: "bold",
              fontSize: { xs: "24px", sm: "28px", md: "32px" },
            }}
          >
            What Industry Experts and Customers Are Saying
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              width: "100%",
              maxWidth: { xs: "100%", sm: "700px", md: "800px" },
            }}
          >
            {/* Left Navigation Arrow */}
            <IconButton
              onClick={handlePrev}
              sx={{
                position: "absolute",
                left: { xs: "10px", md: "-50px" },
                bgcolor: "#E25E3E",
                color: "#ffffff",
                "&:hover": { bgcolor: "#B84A2F" },
                width: { xs: "30px", md: "40px" },
                height: { xs: "30px", md: "40px" },
                display: { xs: "none", sm: "flex" },
              }}
            >
              <ArrowBackIos sx={{ fontSize: { xs: "14px", md: "18px" } }} />
            </IconButton>

            {/* Testimonial Card with Smooth Fade Effect */}
            <Fade in={fadeIn} timeout={300}>
              <Box
                sx={{
                  textAlign: "center",
                  maxWidth: { xs: "90%", md: "650px" },
                }}
              >
                {/* Profile Image with Circular Frame */}
                <Avatar
                  src={testimonials[currentIndex].photo}
                  alt={testimonials[currentIndex].name}
                  sx={{
                    width: { xs: 90, sm: 110, md: 120 },
                    height: { xs: 90, sm: 110, md: 120 },
                    border: "4px solid #E25E3E",
                    mx: "auto",
                    mb: { xs: 2, md: 3 },
                  }}
                />

                {/* Quote Text */}
                <Typography
                  variant="body1"
                  sx={{
                    color: "#333",
                    fontSize: { xs: "14px", sm: "16px", md: "18px" },
                    fontStyle: "italic",
                    px: { xs: 2, sm: 4 },
                  }}
                >
                  "{testimonials[currentIndex].text}"
                </Typography>

                {/* Client Name - Bold */}
                <Typography
                  variant="h6"
                  sx={{
                    color: "#1E626C",
                    fontWeight: "bold",
                    mt: 2,
                    fontSize: { xs: "16px", sm: "18px", md: "20px" },
                  }}
                >
                  {testimonials[currentIndex].name}
                </Typography>

                {/* Client Position */}
                <Typography
                  variant="body2"
                  sx={{
                    color: "#72B7A4",
                    fontSize: { xs: "12px", sm: "14px", md: "16px" },
                    mt: 0.5,
                  }}
                >
                  {testimonials[currentIndex].position}
                </Typography>
              </Box>
            </Fade>

            {/* Right Navigation Arrow */}
            <IconButton
              onClick={handleNext}
              sx={{
                position: "absolute",
                right: { xs: "10px", md: "-50px" },
                bgcolor: "#E25E3E",
                color: "#ffffff",
                "&:hover": { bgcolor: "#B84A2F" },
                width: { xs: "30px", md: "40px" },
                height: { xs: "30px", md: "40px" },
                display: { xs: "none", sm: "flex" },
              }}
            >
              <ArrowForwardIos sx={{ fontSize: { xs: "14px", md: "18px" } }} />
            </IconButton>
          </Box>

          {/* ✅ Responsive Dots Indicator */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            {testimonials.map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: "8px", sm: "10px" },
                  height: { xs: "8px", sm: "10px" },
                  bgcolor: index === currentIndex ? "#E25E3E" : "#d3d3d3",
                  borderRadius: "50%",
                  mx: 0.8,
                  transition: "background-color 0.3s",
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Sales Partner Section */}
        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            mt: 6,
            py: 10,
            backgroundImage: `url(${world})`, // ✅ Add Background Image
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            zIndex: 2,
          }}
        >
          <Box sx={{ textAlign: "center", py: 5 }}>
            <img
              src={DocRideLogo}
              alt="DocRide Logo"
              style={{ width: "80px", marginBottom: "20px" }}
            />
            <Typography
              variant="h4"
              fontWeight={700}
              sx={{
                mb: 2,
                fontSize: { xs: "24px", sm: "32px", md: "42px" }, // ✅ Responsive font sizes
              }}
            >
              Sell <span style={{ color: "#72B7A4" }}>DocRide</span> to your
              customers in your region and earn
            </Typography>
          </Box>

          {/* Become Our Sales Partner Section */}
          <Container maxWidth="xl">
            <Grid
              container
              spacing={{ xs: 3, md: 6 }}
              alignItems="center"
              sx={{ px: { xs: 2, sm: 4, md: 6 }, py: { xs: 4, sm: 6, md: 8 } }}
            >
              {/* Left Side - Text Content */}
              <Grid item xs={12} md={6}>
                <Typography
                  sx={{
                    color: "#C83607",
                    mb: 2,
                    fontSize: { xs: "28px", sm: "32px", md: "40px" }, // Responsive Font Size
                    textAlign: { xs: "center", md: "left" }, // Center text on small screens
                  }}
                >
                  Become Our Sales Partner
                </Typography>
                <Typography
                  sx={{
                    color: "#080E06",
                    mb: 3,
                    fontSize: { xs: "16px", sm: "18px", md: "20px" }, // Responsive Font Size
                    textAlign: { xs: "center", md: "left" }, // Center on small screens
                    maxWidth: { md: "500px" }, // Limit width on larger screens
                    mx: { xs: "auto", md: "0" }, // Center text on small screens
                  }}
                >
                  We are a business outside of the UK. Can we use DocRide for
                  our business and get the claimed benefits of DocRide?
                </Typography>

                {/* Contact Button */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", md: "left" },
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "transparent",
                      color: "#73C7AD",
                      textTransform: "none",
                      fontSize: { xs: "14px", sm: "16px" },
                      fontWeight: "bold",
                      borderRadius: "30px",
                      border: "1px solid #73C7AD",
                      py: "10px",
                      px: "20px",
                      "&:hover": {
                        background:
                          "linear-gradient(to right, #66C2A5, #2C8A7A)",
                        color: "#ffffff",
                      },
                    }}
                    component="a"
                    href="mailto:partnership@docride.co.uk"
                  >
                    partnership@docride.co.uk
                  </Button>
                </Box>
              </Grid>

              {/* Right Side - Image (Hidden on Small Screens) */}
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: { xs: "none", md: "flex" },
                  justifyContent: "center",
                  p: 0, // ✅ Remove any padding
                  m: 0,
                }}
              >
                <Box
                  sx={{
                    maxWidth: "100%",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={Sales}
                    alt="Sales Partner"
                    style={{
                      width: "100%",
                      maxWidth: "900px", // Restrict width for better responsiveness
                      maxHeight: "600px",
                      borderRadius: "50px",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
