import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";

// Image Imports
import Slide1 from "../../assets/Slide1.jpg";
import Slide2 from "../../assets/Slide2.png";
import Slide3 from "../../assets/Slide3.png";
import Video from "../../assets/VideoThumbnail.jpg";
import DocRideLogo from "../../assets/DRLogo.png";
import world from "../../assets/world.jpg";
import Sales from "../../assets/partners.jpg";
import f1 from "../../assets/f1.jpg";
import f2 from "../../assets/f2.jpg";
import f3 from "../../assets/f3.jpg";
import f4 from "../../assets/f4.jpg";
import f5 from "../../assets/f5.jpg";
import f6 from "../../assets/f6.jpg";

// ✅ Fixed Slides Array
const slides = [Slide1, Slide2, Slide3];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 3 seconds (fast transition)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Fast effect
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      image: f1,
      title: "Tailored User Management",
      bulletPoints: [
        "Define roles and access levels based on responsibilities.",
        "Site-specific permissions for centralized or decentralized management.",
        "Tailored dashboards enhance clarity for every user.",
      ],
    },
    {
      image: f2,
      title: "Scalable for Businesses of All Sizes",
      bulletPoints: [
        "From SMEs to large organizations, scale effortlessly.",
        "Manage single or multi-site operations with site-specific access controls.",
      ],
    },
    {
      image: f3,
      title: "User-Friendly Design",
      bulletPoints: [
        "Intuitive workflows and pre-designed forms for efficiency.",
        "Role-specific dashboards show only relevant tasks.",
        "Notifications ensure no critical tasks are missed.",
      ],
    },
    {
      image: f4,
      title: "Access from Anywhere Anytime",
      bulletPoints: [
        "Cloud-based platform works on any device with internet.",
        "Automate approvals, assign actions and track compliance on the go.",
      ],
    },
    {
      image: f5,
      title: "Effortless Legal Compliance",
      bulletPoints: [
        "AI identifies business-specific OHS legal requirements.",
        "You can assign roles and track actions for compliance.",
        "Monitor real-time progress on risk controls and compliance status.",
      ],
    },
    {
      image: f6,
      title: "ISO 45001 Conformance Made Simple",
      bulletPoints: [
        "Pre-designed workflows aligned with ISO 45001:2018 requirements.",
        "Optimized for efficiency without extensive documentation burdens.",
        "90% of SMEs can develop and deploy in less than 3 hours.",
      ],
    },
  ];

  const [hoverIndex, setHoverIndex] = useState(null);

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
              mt: { xs: 4, md: 0 },
            }}
          >
            <Typography
              fontWeight={800}
              sx={{
                color: "#FFFFFF",
                lineHeight: 1.2,
                fontSize: { xs: "24px", sm: "28px", md: "40px", lg: "62px" }, // ✅ More responsive scaling
              }}
            >
              <span style={{ color: "#96e0cc", fontWeight: 900 }}>
                Develop and Deploy{" "}
              </span>
              Your <br />
              ISO 45001 compliant{" "}
              <span style={{ color: "#68b9ba", fontWeight: 900 }}>
                Health &
              </span>{" "}
              <br />
              <span style={{ color: "#68b9ba", fontWeight: 900 }}>
                Safety Management System
              </span>{" "}
              <br />
              with 10X Efficiency.
            </Typography>

            <Typography
              variant="body1"
              color="#68B9BABA"
              sx={{
                mt: 3,
                fontWeight: "bold",
                fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" }, // ✅ Ensure responsiveness
              }}
            >
              More than 90% of SMEs can operationalize their health and safety
              management system <br /> in hours with DocRide’s AI-powered tools
              and pre-designed templates.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" }, // ✅ Stacks on mobile, row on larger screens
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
              {/* ✅ "Start Your Free Trial Now" Button - Always Visible */}
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(to right, #66C2A5, #2C8A7A)",
                  borderRadius: "30px",
                  padding: { xs: "8px 20px", sm: "10px 25px" },
                  fontSize: { xs: "14px", sm: "16px" },
                  fontWeight: "bold",
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

              {/* ✅ "See DocRide in Action" Button - Hides only on xs screens */}
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
                maxWidth: { xs: "95%", sm: "80%", md: "700px" }, // ✅ Responsive width
                height: { xs: "200px", sm: "350px", md: "400px" }, // ✅ Dynamic height
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: 3,
                backgroundColor: "#fff",
              }}
            >
              {/* Slider Container */}
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                {/* Slide Wrapper - Ensures slides stay in a row */}
                <Box
                  sx={{
                    display: "flex",
                    width: `${slides.length * 100}%`, // ✅ Ensures slides take full width
                    transition: "transform 0.8s ease-in-out",
                    transform: `translateX(-${currentSlide * 100}%)`, // ✅ Moves one slide at a time
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
          <Typography fontWeight="bold" sx={{ color: "#6DB9A0" }}>
            DOCRIDE BENEFITS
          </Typography>

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
              px: { xs: 2, sm: 6, md: 10, lg: "380px" }, // ✅ Adjust width for readability
              fontSize: { xs: "15px", sm: "15px" },
              lineHeight: "28px",
            }}
          >
            Introducing DocRide: Your Complete Health and Safety Management
            System. Say goodbye to complex health and safety management system
            setups – with DocRide, all your health and safety management system
            is ready to go. From risk assessments to inspections and incident
            reporting, everything’s covered. Just assign user roles for various
            health and safety processes and rest assured you’re following best
            practices. DocRide strikes the perfect balance between flexibility
            and simplicity, ensuring ease of use without sacrificing
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
            DocRide seamlessly integrates health and safety management system
            processes, saving you from the need to reinvent the wheel by
            designing your own H&S management system from scratch. From risk
            assessments to resource requests and inspections, each step flows
            logically into the next. For example, risk assessments dictate
            necessary control measures, which are then easily requested through
            the Resources tab. Inspections, in turn, address these control
            requirements, ensuring proactive safety measures. Nonconformities
            and corrective actions are linked, simplifying compliance.
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

          {/* ✅ Small DocRide Logo */}
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

          {/* ✅ Features Section with Responsive Grid */}
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

            {/* ✅ Responsive Features Grid */}
            <Grid
              container
              rowSpacing={4}
              columnSpacing={1}
              justifyContent="center"
            >
              {features.map((feature, index) => {
                const isHovered = hoverIndex === index;

                return (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card
                      onMouseEnter={() => setHoverIndex(index)}
                      onMouseLeave={() => setHoverIndex(null)}
                      sx={{
                        borderRadius: "15px",
                        boxShadow: 3,
                        transition: "height 0.6s ease-in-out",
                        height: isHovered ? "auto" : "180px",
                        overflow: "hidden",
                        background:
                          index % 2 === 1
                            ? "linear-gradient(273deg, #51ABA6 0%, #79D2BD 100%)"
                            : "#F7FCF8",
                        color: index % 2 === 1 ? "#fff" : "black",
                        width: "100%", // ✅ Full width on xs/sm, auto on larger
                        maxWidth: "360px",
                        margin: "auto",
                        paddingBottom: isHovered ? "20px" : "30px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "left",
                          pt: 3,
                          pb: 1,
                          pl: 4,
                        }}
                      >
                        <img
                          src={feature.image}
                          alt={feature.title}
                          style={{
                            width: "70px",
                            height: "70px",
                            objectFit: "cover",
                            borderRadius: "20%",
                          }}
                        />
                      </Box>

                      <CardContent
                        sx={{
                          textAlign: "left",
                          transition: "all 0.5s ease-in-out",
                          px: 4,
                          pb: isHovered ? 4 : 2,
                        }}
                      >
                        <Typography
                          fontSize="16px"
                          fontWeight="bold"
                          sx={{
                            mb: 1,
                            color: index % 2 === 0 ? "#36767E" : "inherit",
                          }}
                        >
                          {feature.title}
                        </Typography>

                        {/* ✅ Responsive Bullet Points */}
                        {feature.bulletPoints && (
                          <Box
                            component="ul"
                            sx={{
                              opacity: isHovered ? 1 : 0,
                              transition:
                                "opacity 0.3s ease-in-out, max-height 0.6s ease-in-out",
                              maxHeight: isHovered ? "150px" : "1px",
                              overflow: "hidden",
                              paddingLeft: "16px",
                              margin: "0px",
                            }}
                          >
                            {feature.bulletPoints.map((point, i) => (
                              <Typography
                                key={i}
                                component="li"
                                fontSize="14px"
                              >
                                {point}
                              </Typography>
                            ))}
                          </Box>
                        )}
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
            <Box
              component={Link}
              to="/features"
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
              VIEW ALL FEATURES
            </Box>
          </Box>
        </Box>

        {/* Pricing Plan */}
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            py: { xs: 5, md: 10 }, // Adjust padding based on screen size
            mt: { xs: 5, md: 10 }, // Adjust margin top
          }}
        >
          <Typography
            variant="h4"
            color="#1E626C"
            align="center"
            sx={{
              fontSize: { xs: "1.8rem", md: "2.5rem" },
              fontWeight: "bold",
            }}
            gutterBottom
          >
            Our Pricing Plans
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="#FF0000"
            sx={{
              fontSize: { xs: "1rem", md: "1.2rem" }, // Adjust font size for small screens
              mb: { xs: 3, md: 4 },
            }}
          >
            Choose a plan that fits your learning needs.
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={8} md={4}>
              <Card
                sx={{
                  textAlign: "center",
                  borderRadius: "12px",
                  boxShadow: 3,
                  p: 3,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{
                      fontSize: { xs: "1.2rem", md: "1.5rem" },
                      fontWeight: "bold",
                    }}
                  >
                    COMING SOON
                  </Typography>

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ my: 2, fontSize: { xs: "0.9rem", md: "1rem" } }}
                  >
                    Exciting plans coming your way soon. Stay tuned!
                  </Typography>

                  <ul style={{ listStyle: "none", padding: 0 }}>
                    <li style={{ marginBottom: "8px" }}>
                      ✔ New Learning Features
                    </li>
                    <li style={{ marginBottom: "8px" }}>✔ Affordable Plans</li>
                    <li style={{ marginBottom: "8px" }}>✔ Exclusive Content</li>
                  </ul>

                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      mt: 2,
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      px: { xs: 2, md: 3 },
                      py: { xs: 1, md: 1.2 },
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
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
              sx={{ mb: 2, fontSize: "42px" }}
            >
              Sell <span style={{ color: "#72B7A4" }}>DocRide</span> to your
              customers in your region and earn
            </Typography>
          </Box>

          {/* Become Our Sales Partner Section */}
          <Container maxWidth="xl">
            <Grid container spacing={6} alignItems="center">
              {/* Left Side - Text Content */}
              <Grid item xs={12} md={6}>
                <Typography
                  fontWeight="bold"
                  sx={{
                    color: "#C83607",
                    mb: 2,
                    stroke: "#000",
                    fontSize: "40px",
                    textAlign: "left",
                  }}
                >
                  Become Our Sales Partner
                </Typography>
                <Typography
                  sx={{
                    color: "#080E06",
                    mb: 3,
                    fontSize: "20px",
                    textAlign: "left",
                    mr: "100px",
                  }}
                >
                  We are a business outside of the UK. Can we use DocRide for
                  our business and get the claimed benefits of DocRide?
                </Typography>

                {/* Contact Button */}
                <Button
                  variant="contained"
                  sx={{
                    textAlign: "left",
                    bgcolor: "transparent",
                    color: "#73C7AD",
                    textTransform: "none",
                    fontSize: "16px",
                    fontWeight: "bold",
                    borderRadius: "30px",
                    border: "1px solid #73C7AD",
                    py: "10px",
                    px: "20px",
                    "&:hover": {
                      background: "linear-gradient(to right, #66C2A5, #2C8A7A)",
                      color: "#ffffff",
                    },
                  }}
                  component="a"
                  href="mailto:partnership@docride.co.uk"
                >
                  partnership@docride.co.uk
                </Button>
              </Grid>

              {/* Right Side - Image */}
              <Grid item xs={12} md={6}>
                <Box sx={{ textAlign: "center" }}>
                  <img
                    src={Sales}
                    alt="Sales Partner"
                    style={{
                      width: "100%",
                      maxHeight: "400px",
                      borderRadius: "8px",
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
