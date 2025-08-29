import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/system";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { useDrag } from "@use-gesture/react";
import CloseIcon from "@mui/icons-material/Close";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

// Image Imports
import Logo from "../../assets/logo/LogoIcon.avif";
import Slide1 from "../../assets/home/Slide1.avif";
import Slide2 from "../../assets/home/Slide2.avif";
import Slide3 from "../../assets/home/Slide3.avif";
import CardBack from "../../assets/neuron.avif";
import DocRideLogo from "../../assets/logo/LogoIcon1.avif";
import world from "../../assets/home/world.avif";
import Sales from "../../assets/home/partners.avif";
import test from "../../assets/test2.avif";
import access from "../../assets/icons/access-control.png";
import audit from "../../assets/icons/audit.png";
import compliance from "../../assets/icons/compliance.png";
import records from "../../assets/icons/records.png";
import protect from "../../assets/icons/protect.png";
import leader from "../../assets/icons/leadership.png";

// ✅ Fixed Slides Array
const slides = [Slide1, Slide2, Slide3];

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [open, setOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = slides.length;
  const intervalRef = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [maxHeight, setMaxHeight] = useState(0);
  const cardRefs = useRef([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ Smooth scroll to top
    setTimeout(() => navigate("/benefits"), 0); // ✅ Navigate after scrolling
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

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1200, min: 800 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const features = useMemo(
    () => [
      {
        title: "Empower Your Team",
        bulletPoints: [
          "Plan and track training effortlessly, ensuring every employee meets safety standards.",
          "Keep skills sharp with automated reminders for expiring certifications or overdue sessions.",
          "Document competence with detailed records that satisfy audits and boost confidence.",
        ],
        icon: (
          <img
            src={leader}
            alt="ISO Icon"
            style={{ width: "40px", height: "40px" }}
          />
        ),
        videoEmbed: (
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/1065442940?h=2b9140976b"
            width="100%"
            height="600"
            frameBorder="0"
            allowFullScreen
            style={{ borderRadius: "15px", display: "block" }}
          ></iframe>
        ),
      },
      {
        title: "Control Access Like a Pro",
        bulletPoints: [
          "Assign precise roles and permissions to match your team’s responsibilities—security meets simplicity.",
          "Manage multiple sites with flexible, site-specific access, perfect for any organizational structure.",
          "Empower every user with dashboards that deliver clarity and relevance, from executives to field staff.",
        ],
        icon: (
          <img
            src={access}
            alt="ISO Icon"
            style={{ width: "40px", height: "40px" }}
          />
        ),
        videoEmbed: (
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/1065442940?h=2b9140976b"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen
            style={{ borderRadius: "15px", display: "block", margin: "auto" }}
          ></iframe>
        ),
      },
      {
        title: "Records You Can Trust",
        bulletPoints: [
          "Store tamper-proof safety data securely in the cloud—reliable and retrievable in seconds.",
          "Find what you need fast with powerful search and timestamped records for airtight audits.",
          "Impress clients by sharing live performance data with secure, view-only access.",
        ],
        icon: (
          <img
            src={records}
            alt="ISO Icon"
            style={{ width: "40px", height: "40px" }}
          />
        ),
        videoEmbed: (
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/1065442940?h=2b9140976b"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen
            style={{ borderRadius: "15px", display: "block", margin: "auto" }}
          ></iframe>
        ),
      },
      {
        title: "Save Money While Staying Safe",
        bulletPoints: [
          "Reduce consultant costs by up to 50% with AI and automation that handle routine compliance tasks.",
          "Avoid fines and downtime with a system that prevents incidents before they hit your bottom line.",
          "Optimize resources with streamlined processes that make safety efficient, not expensive.",
        ],
        icon: (
          <img
            src={protect}
            alt="ISO Icon"
            style={{ width: "40px", height: "40px" }}
          />
        ),

        videoEmbed: (
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/1065442940?h=2b9140976b"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen
            style={{ borderRadius: "15px", display: "block", margin: "auto" }}
          ></iframe>
        ),
      },
      {
        title: "Effortless Legal Compliance",
        bulletPoints: [
          "Let AI identify your OHS legal obligations, tailored to your industry and location.",
          "Delegate tasks and track progress in real-time, ensuring nothing slips through the cracks.",
          "Reduce legal risks with proactive alerts that catch issues before they escalate.",
        ],
        icon: (
          <img
            src={compliance}
            alt="ISO Icon"
            style={{ width: "40px", height: "40px" }}
          />
        ),
        videoEmbed: (
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/1065442940?h=2b9140976b"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen
            style={{ borderRadius: "15px", display: "block", margin: "auto" }}
          ></iframe>
        ),
      },
      {
        title: "Audits Made Painless and Powerful",
        bulletPoints: [
          "Run multi-site audits effortlessly with built-in workflows, AI-generated checklists, and reports.",
          "Share auditee data with auditors in one click—secure, view-only access keeps it simple.",
          "Cut audit prep time in half with automated data collection and AI-generated reports.",
        ],
        icon: (
          <img
            src={audit}
            alt="ISO Icon"
            style={{ width: "40px", height: "40px" }}
          />
        ),
        videoEmbed: (
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/1065442940?h=2b9140976b"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen
            style={{ borderRadius: "15px", display: "block", margin: "auto" }}
          ></iframe>
        ),
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
                fontSize: { xs: "20px", sm: "28px", md: "30px", lg: "40px" }, // ✅ More responsive scaling
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
                      loading="lazy"
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
          pt: 10,
          borderRadius: "0 0 50px 50px",
          overflow: "hidden",
        }}
      >
        {/* Experience Section */}
        <Container
          fullWidth
          sx={{
            display: "flex",
            flexDirection: "column", // ✅ Column by default
            alignItems: "center",
            py: { xs: 6, md: 10 },
            px: { xs: 2, sm: 4, md: 6 },
            color: "#FFFFFF",
            // ✅ Gradient Background
          }}
        >
          {/* ✅ Row Arrangement for Text & Stats on lg+, Column on smaller screens */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" }, // ✅ Row only on lg+
              alignItems: { xs: "center", lg: "flex-start" },
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {/* Left Section - Text */}
            <Box
              sx={{
                flex: 1,
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: {
                    xs: "32px",
                    sm: "42px",
                    md: "50px",
                    lg: "58px",
                  },
                  fontWeight: "bold",
                  lineHeight: 1.2,
                  color: "#1E626C",
                }}
              >
                Discover the
              </Typography>

              {/* Establish Year */}
              <Box sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
                <Box sx={{ mt: 2, display: { xs: "none", lg: "block" } }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "14px", sm: "16px" },
                      color: "#1E626C", // ✅ Light gray color for "Establish"
                      fontWeight: 400,
                    }}
                  >
                    Establish
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: "24px", sm: "28px" },
                      fontWeight: "bold",
                      color: "#60BCA0", // ✅ Bold white for the year
                    }}
                  >
                    2025
                  </Typography>
                </Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: {
                      xs: "32px",
                      sm: "42px",
                      md: "50px",
                      lg: "58px",
                    },
                    fontWeight: "bold",
                    color: "#60BCA0",
                    mt: 1,
                  }}
                >
                  DocRide<span style={{ color: "#1E626C" }}> advantage</span>
                </Typography>
              </Box>
            </Box>

            {/* Right Section - Stats */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column", // ✅ Stacked on xs, row on sm+
                flexWrap: "wrap",
                mt: { xs: 2, lg: 0 },
                gap: { xs: 2, md: 4 },
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "14px", sm: "16px", md: "18px" },
                  color: "#1E626C",
                  mt: 2,
                  maxWidth: "450px",
                }}
              >
                We simplify health and safety management with DocRide, making
                risk assessments, inspections, and incident reporting
                effortless.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: { xs: "center", lg: "left" },
                  gap: { xs: 2, md: 4 },
                  textAlign: { xs: "center", lg: "left" },
                }}
              >
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#60BCA0",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    12<span style={{ color: "#1E626C" }}>+</span>
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "#1E626C" }}>
                    Years of Experience
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#60BCA0",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    10<span style={{ color: "#1E626C" }}>+</span>
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "#1E626C" }}>
                    Specialities
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#60BCA0",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    4.2K<span style={{ color: "#1E626C" }}>+</span>
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "#1E626C" }}>
                    Trusted Companies
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* ✅ Column Arrangement for Video on lg+ */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              mt: { xs: 4, lg: 6 },
              width: "100%",
            }}
          >
            <Box
              sx={{
                width: { xs: "90%", sm: "80%", md: "75%", lg: "100%" },
                maxWidth: "1200px",
                position: "absolute",
                background: "white",
                p: 2,
                overflow: "hidden",
                borderRadius: "15px",
                boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.1)",
                zIndex: 2,
              }}
            >
              {/* Video Element */}
              <video
                ref={videoRef}
                src="/videos/Legal-Compliance.mp4"
                controls
                autoPlay={false}
                loop={false}
                muted={false}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "15px",
                  display: "block",
                }}
              />

              {/* Custom Play Button Overlay */}
              {!isPlaying && (
                <IconButton
                  onClick={handlePlay}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    bgcolor: "#60BCA0", // ✅ Custom Play Button Color
                    color: "white",
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      bgcolor: "#50A890",
                    },
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 40 }} />
                </IconButton>
              )}
            </Box>
          </Box>
        </Container>

        {/* Hero 2 Section */}
        <Box
          sx={{
            pt: "10px",
            pb: "65px",
            mt: { xs: "auto", sm: "100px", lg: "300px" },
            position: "relative",
            borderRadius: "230px",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              my: 10,
              minHeight: { xs: "60vh", sm: "80vh", md: "100vh" },
              background: "linear-gradient(135deg, #13CE95, #0097b6)",
              color: "white",
              borderRadius: "20px 20px 0px 0px",
              textAlign: "center",
              padding: { xs: "1rem", sm: "2rem", md: "3rem" },
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Container sx={{ position: "relative", zIndex: 1 }}>
              <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
                sx={{
                  color: "#1E626C",
                  textShadow: "2px 2px 8px rgba(255, 255, 255, 0.8)",
                  fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
                }}
              >
                Safety Simplified with AI
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  opacity: 0.8,
                  marginBottom: "2rem",
                  fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                }}
              >
                Harness AI to spot risks, ensure compliance, and safeguard your
                team—all with effortless precision.
              </Typography>
              <Box
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                justifyContent="center"
                gap={2}
              >
                <Button
                  component={Link}
                  to="/pricing"
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
                      background: "transparent",
                      border: "2px solid #ffb703",
                      color: "#ffffff",
                    },
                  }}
                >
                  Explore Pricing
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    border: "2px solid #ffb703",
                    borderRadius: "30px",
                    color: "white",
                    padding: { xs: "10px 20px", sm: "12px 24px" },
                    transition: "all 0.9s ease-in-out",
                    "&:hover": {
                      background: "linear-gradient(to right, #66C2A5, #2C8A7A)",
                      border: "2px solid #2C8A7A",
                      color: "#ffffff",
                    },
                  }}
                >
                  Free Trial
                </Button>
              </Box>
            </Container>
          </Box>

          {/* Features Section with Responsive Grid */}
          <Box
            sx={{
              width: "100%",
              bgcolor: "#EDF7F5",
              textAlign: "center",
              borderRadius: "0px 0px 40px 40px",
              py: 10,
              px: { xs: 2, sm: 6, md: 12, lg: "250px" }, // ✅ Responsive Padding
              mt: "-80px",
              position: "relative",
              zIndex: 0,
            }}
          >
            {/* Small DocRide Logo */}
            <Box
              component="img"
              src={Logo}
              alt="DocRide Logo"
              sx={{
                pt: "45px",
                pb: "30px",
                width: 80,
                maxWidth: "100%",
                position: "relative",
                zIndex: 3,
              }}
            />
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                color: "#1E626C",
                mb: 8,
                fontSize: { xs: "28px", sm: "32px", md: "36px", lg: "41px" },
              }}
            >
              Here are some standout Benefits
            </Typography>

            {/* Responsive Features Grid */}
            <Grid
              container
              rowSpacing={8}
              columnSpacing={4}
              justifyContent="center"
            >
              {features.map((feature, index) => {
                const isExpanded = expandedIndex === index;
                return (
                  <Grid item xs={12} md={6} lg={4} key={index}>
                    <Box
                      sx={{
                        position: "relative",
                        zIndex: 3,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {/* Icon Box placed outside the card to ensure visibility */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: -30,
                          left: 40,
                          background:
                            "linear-gradient(to bottom, #66C2A5 30%, #2C8A7A 100%)",
                          width: 70,
                          height: 70,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                          boxShadow: 2,
                          border: "2px solid #E16E26",
                          zIndex: 4,
                        }}
                      >
                        {feature.icon}
                      </Box>
                    </Box>
                    <Card
                      ref={(el) => (cardRefs.current[index] = el)}
                      sx={{
                        position: "relative",
                        textAlign: "left",
                        overflow: "hidden",
                        borderRadius: "15px",
                        boxShadow: 3,
                        background:
                          "linear-gradient(180deg, #FFFFFF 0%, rgba(155, 215, 199, 0.43) 50%)",
                        color: index % 2 === 1 ? "#fff" : "black",
                        width: { xs: "100%", sm: "100%", md: "100%" },
                        maxWidth: { xs: "100%", sm: "80%", md: "360px" },
                        margin: "auto",
                        pt: "25px",
                        pb: "35px",
                        minHeight: `${maxHeight}px`, // Set uniform height for all cards
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between", // Ensures button stays at bottom
                        "&:hover .overlay": {
                          width: "100%",
                          left: "0%",
                        },
                      }}
                    >
                      {/* Hover Overlay */}
                      <Box
                        className="overlay"
                        sx={{
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: "50%",
                          width: "0%",
                          height: "100%",
                          background: "#1DA196",
                          opacity: 0.3,
                          transition:
                            "width 0.5s ease-in-out, left 0.5s ease-in-out",
                        }}
                      />
                      {/* Background Image Overlay */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          backgroundImage: `url(${CardBack})`,
                          backgroundSize: "cover",
                          opacity: 0.2,
                          zIndex: 0,
                        }}
                      />

                      <CardContent
                        sx={{
                          position: "relative",
                          textAlign: "left",
                          px: { xs: 3, sm: 4 },
                          flex: "1 1 auto",
                          zIndex: 2,
                        }}
                      >
                        <Typography
                          fontSize="16px"
                          fontWeight="bold"
                          sx={{
                            my: 2,
                            color: "#36767E",
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
                                fontSize="14px"
                                lineHeight="32px"
                                color="#555"
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
                            fontWeight: "bold",
                            color: "#36767E",
                          }}
                          onClick={() => handleOpen(feature)}
                        >
                          Watch Video
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
                fullWidth
                maxWidth="md"
                sx={{
                  "& .MuiPaper-root": {
                    borderRadius: "20px",
                    background:
                      "linear-gradient(180deg, #73C7AD 0%, #3A7B81 100%)",
                    color: "white",
                    width: "100%",
                  },
                }}
              >
                {/* Close Button */}
                <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
                  <IconButton onClick={handleClose} sx={{ color: "white" }}>
                    <CloseIcon />
                  </IconButton>
                </Box>

                {/* Modal Content */}
                <DialogContent
                  sx={{
                    px: { xs: 2, sm: 3, md: 4 },
                    pb: { xs: 2, sm: 3 },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "16px", md: "32px" },
                      fontWeight: "bold",
                      mb: { xs: 2, md: 4 },
                    }}
                  >
                    {selectedFeature?.title}
                  </Typography>
                  {selectedFeature && (
                    <Box
                      sx={{
                        width: "100%",
                        maxWidth: {
                          xs: "90vw",
                          sm: "80vw",
                          md: "70vw",
                          lg: "60vw",
                        },
                        position: "relative",
                        paddingBottom: "56.25%", // Aspect ratio 16:9
                        overflow: "hidden",
                        borderRadius: "15px",
                        boxShadow: 3,
                        background: "#EDF7F5",
                      }}
                    >
                      {/* Responsive iframe inside Box */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {selectedFeature.videoEmbed}
                      </Box>
                    </Box>
                  )}
                </DialogContent>
              </Dialog>
            </Grid>

            <Box
              component="button"
              onClick={handleClick}
              sx={{
                mt: { xs: 10, sm: 12, md: 6, lg: 10 }, // ✅ Adjusts spacing for different screens
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
              VIEW ALL BENEFITS
            </Box>
          </Box>
        </Box>

        {/* Testimonial */}
        <Box
          sx={{
            width: "100%",
            background: "linear-gradient(180deg, #51ABA6 0%, #79D2BD 100%)",
            py: { xs: 6, sm: 8, md: 10 },
            px: { xs: 3, sm: 5, md: 8, lg: 12 },
            mt: 14,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background Image */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${test})`,
              backgroundSize: "cover",
              backgroundPosition: { xs: "center", sm: "top" },
              opacity: 0.7,
              zIndex: 1,
            }}
          />
          {/* ✅ Responsive Headline */}
          <Typography
            variant="h4"
            sx={{
              color: "#ffffff",
              mb: { xs: 4, md: 6 },
              fontWeight: "bold",
              fontSize: { xs: "24px", sm: "28px", md: "32px" },
              zIndex: 2,
            }}
          >
            What Industry Experts and Customers Are Saying
          </Typography>

          <Container
            sx={{
              py: 5,
              textAlign: "center",
              bgcolor: "linear-gradient(273deg, #51ABA6 0%, #79D2BD 100%)",
              zIndex: 2,
            }}
          >
            <IconButton disabled>
              <FormatQuoteIcon sx={{ fontSize: "4rem", color: "#ffffff" }} />
            </IconButton>
            <Card sx={{ borderRadius: "15px", boxShadow: 3, p: 3 }}>
              <CardContent>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={5000}
                  arrows={!isMobile}
                  renderButtonGroupOutside={true}
                  containerClass="carousel-container"
                >
                  {testimonials.map((testimonial, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        px: 3,
                      }}
                    >
                      <Avatar
                        src={testimonial.image}
                        sx={{
                          width: 100,
                          height: 100,
                          mb: 2,
                          border: "1px solid orange",
                        }}
                      />
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{ color: "#1E626C" }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography variant="subtitle1" color="#72B7A4">
                        {testimonial.position}
                      </Typography>
                      <Typography variant="body1" sx={{ mt: 2 }}>
                        {testimonial.text}
                      </Typography>
                    </Box>
                  ))}
                </Carousel>
              </CardContent>
            </Card>
            <IconButton disabled>
              <FormatQuoteIcon sx={{ fontSize: "4rem", color: "#ffffff" }} />
            </IconButton>
          </Container>
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
