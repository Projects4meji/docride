import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  Modal,
  IconButton,
  Fade,
} from "@mui/material";
import { ZoomIn as ZoomInIcon } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import BlogHeroImage from "../../assets/bgimage.avif";
import Aboutimage from "../../assets/about/About.avif";
import SafetyImage from "../../assets/about/S&H.avif";
import FlowImage from "../../assets/about/Flow.avif";
import AiImage from "../../assets/blogs/Ai1.avif";
import StatsBgImage from "../../assets/privacy.jpg";
import PFC from "../../assets/Charts/PFF.avif";
import RRC from "../../assets/Charts/RRF.avif";

import CEOStory from "../Content/CEOStory";
import FutureGoals from "../Content/FutureGoals";

function About() {
  const [openImageModal, setOpenImageModal] = useState(false);
  const [openReactiveModal, setOpenReactiveModal] = useState(false);

  const handleOpenImageModal = () => setOpenImageModal(true);
  const handleCloseImageModal = () => setOpenImageModal(false);
  const handleOpenReactiveModal = () => setOpenReactiveModal(true);
  const handleCloseReactiveModal = () => setOpenReactiveModal(false);

  return (
    <>
    <Helmet>
        <title>About Us</title>
        <meta
          name="description"
          content="Discover how DocRide delivers AI-based OHS management, ISO 45001 compliance, incident reporting, risk assessment, and more for your safety needs."
        />
        <meta
          name="keywords"
          content="ISO 45001, OHS management system, Online OHS management, AI based OHS management, Risk assessment, OHS audit, Incident investigation, Incident reporting, Permit to work, Emergency preparedness response, OHS legal requirements, Paperless OHS management"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
    <Box sx={{ bgcolor: "#FFFFFF" }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "#ffffff",
          width: "100%",
          height: { xs: "40vh", sm: "35vh", md: "40vh" },
          backgroundImage: `url(${BlogHeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: { xs: 3, sm: 6, md: 16, lg: 20 },
          py: { xs: 2, sm: 4 },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: { xs: "28px", sm: "32px", md: "40px" },
            textShadow: "2px 2px 6px rgba(0,0,0,0.3)",
          }}
        >
          About Us
        </Typography>
      </Box>

      {/* CEO Section */}
      <Container maxWidth="xl" sx={{ py: 8, position: "relative" }}>
        {/* Carousel Content */}
        <Box>
          <CEOStory />
        </Box>
      </Container>

      {/* About Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Text */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{ color: "#1E626B", fontWeight: "bold", mb: 2 }}
            >
              Docride
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#484747", fontSize: "18px", lineHeight: 1.8 }}
            >
              Introducing DocRide: Your Complete Health and Safety Management
              System. Say goodbye to complex health and safety management system
              setups – with DocRide, all your health and safety management
              system is ready to go. From risk assessments to inspections and
              incident reporting, everything’s covered. Just assign user roles
              for various health and safety processes and rest assured you’re
              following best practices. DocRide strikes the perfect balance
              between flexibility and simplicity, ensuring ease of use without
              sacrificing functionality.
            </Typography>
          </Grid>
          {/* Right Image */}
          <Grid item xs={12} md={6} sx={{ position: "relative" }}>
            {/* Background Flow Image */}
            <Box
              sx={{
                position: "absolute",
                top: 130,
                right: { xs: 0, lg: -60 },
                width: "70%", // Adjust as needed
                height: "auto",
                opacity: 0.4, // 40% opacity
                zIndex: 0,
              }}
              component="img"
              src={SafetyImage} // Flow Image
              alt="Flow Diagram"
            />

            {/* Foreground About Image */}
            <Box
              component="img"
              src={Aboutimage} // About Image
              alt="about"
              sx={{
                width: "70%",
                height: "70%",
                borderRadius: "12px",
                boxShadow: 2,
                position: "relative",
                zIndex: 1, // Ensures it stays above the Flow Image
              }}
            />
          </Grid>
        </Grid>
      </Container>
      {/* Why Docride Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          direction={{ xs: "column-reverse", md: "row" }}
        >
          {/* Left Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={AiImage}
              alt="Health & Safety"
              sx={{ width: "94%", borderRadius: "12px", boxShadow: 2 }}
            />
          </Grid>
          {/* Right Text */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{
                color: "#1E626B",
                fontWeight: "bold",
                mb: 2,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Why Docride?
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#484747", fontSize: "18px", lineHeight: 1.8 }}
            >
              DocRide seamlessly integrates health and safety management system
              processes, saving you from the need to reinvent the wheel by
              designing your own H&S management system from scratch. From risk
              assessments to resource requests and inspections, each step flows
              logically into the next. For example, risk assessments dictate
              necessary control measures, which are then easily requested
              through the Resources tab. Inspections, in turn, address these
              control requirements, ensuring proactive safety measures.
              Nonconformities and corrective actions are linked, simplifying
              compliance.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      {/* ====== New Statistics Section ====== */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          py: { xs: 4, md: 6 }, // Adjust padding
          backgroundImage: `url(${StatsBgImage})`, // Background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",

            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="space-around"
            sx={{ textAlign: "center", color: "white" }}
          >
            {/* 1st Item */}
            <Grid item xs={12} sm={3.9}>
              <Typography variant="h3" fontWeight="bold">
                30
              </Typography>
              <Typography variant="body2" fontSize="18px">
                YEARS OF EXPERIENCE
              </Typography>
            </Grid>

            {/* Divider */}
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                display: { xs: "none", sm: "block" }, // Hide on mobile
                bgcolor: "white",
                width: "3.2px",
                height: "100px",
                mt: "35px",
              }}
            />

            {/* 2nd Item */}
            <Grid item xs={12} sm={3.9}>
              <Typography variant="h3" fontWeight="bold">
                17
              </Typography>
              <Typography variant="body2" fontSize="18px">
                SPECIALTIES
              </Typography>
            </Grid>

            {/* Divider */}
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                display: { xs: "none", sm: "block" }, // Hide on mobile
                bgcolor: "white",
                width: "3px",
                height: "100px",
                mt: "35px",
              }}
            />

            {/* 3rd Item */}
            <Grid item xs={12} sm={3.9}>
              <Typography variant="h3" fontWeight="bold">
                5
              </Typography>
              <Typography variant="body2" fontSize="18px">
                AWARDS
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* ====== Process Flow Chart Section ====== */}
      <Box
        sx={{
          position: "relative",

          py: { xs: 6, md: 8 },
          overflow: "hidden",
        }}
      >
        {/* Background Image with Opacity */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: 100, md: 150 },
            right: { xs: 0, md: 20 },
            width: { xs: "100%", md: "40%" },
            height: "40%",
            backgroundImage: `url(${FlowImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            opacity: 0.2, // 40% opacity
            zIndex: 1,
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#1E626B",
              mb: 4,
            }}
          >
            Docride Interactive Process Flow Charts
          </Typography>

          {/* Preventive Risk Control Model */}
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ color: "#1E626B" }}
            >
              1. Preventive Risk Control Model
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#484747",
                mt: 1,
                mb: 2,
                lineHeight: 1.8,
                fontSize: "18px",
              }}
            >
              It is a structured framework designed to streamline occupational
              health and safety (OHS) risk management through AI-powered
              automation and systematic processes. The model integrates key
              components such as legal compliance, risk assessment, resource
              allocation, employee competence management, and emergency
              preparedness to ensure a proactive approach to workplace safety.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#484747", lineHeight: 1.8, fontSize: "18px" }}
            >
              At its core, the model utilizes AI to generate applicable OHS
              legal requirements, identify hazards, assess risks, and suggest
              control measures. It also facilitates the development of Safe
              Systems of Work (SSOW), inspection checklists, and corrective
              actions to enhance safety compliance. The model further ensures
              continuous improvement through internal audits, allowing
              organizations to assess the effectiveness of their risk control
              strategies. By leveraging AI-driven insights and structured
              workflows, businesses can efficiently manage preventive risk
              control, minimize workplace hazards, and maintain regulatory
              compliance.
            </Typography>

            {/* Image with hover effect */}
            <Box
              sx={{
                display: "flex", // ✅ Flex container
                justifyContent: { xs: "left", md: "center" }, // ✅ Center horizontally
                mt: 2,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "12px",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: 3,
                  width: "70%", // Image width relative to container
                  "&:hover .overlay": {
                    opacity: 1,
                  },
                }}
                onClick={handleOpenImageModal}
              >
                <Box
                  component="img"
                  src={PFC}
                  alt="Preventive Risk Control Model"
                  sx={{
                    width: "100%", // Full width of the parent Box
                    height: "auto",
                    display: "block",
                    objectFit: "cover",
                  }}
                />

                {/* Overlay for zoom icon */}
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bgcolor: "rgba(0,0,0,0.4)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: 0,
                    transition: "opacity 0.3s ease-in-out",
                  }}
                >
                  <ZoomInIcon sx={{ color: "white", fontSize: 40 }} />
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Reactive Risk Control Model */}
          <Box>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ color: "#1E626B" }}
            >
              2. Reactive Risk Control Model
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#484747",
                mt: 1,
                mb: 2,
                lineHeight: 1.8,
                fontSize: "18px",
              }}
            >
              It focuses on managing workplace incidents after they occur.
              Starting with incident reporting, followed by a severity-based
              decision—either no action, an investigation, or corrective
              actions. Investigation findings lead to recommendations, which are
              reviewed and integrated into risk assessments. Finally, internal
              audits ensure the effectiveness of the reactive controls,
              enhancing workplace safety and compliance.
            </Typography>
            {/* Image with hover effect */}
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "left",
                  sm: "left",
                  md: "center",
                },
                mt: 2,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "12px",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: 3,
                  width: {
                    xs: "90%", // Wider image on small screens
                    sm: "80%",
                    md: "70%", // Standard width on medium and above
                  },
                  "&:hover .overlay": {
                    opacity: 1,
                  },
                }}
                onClick={handleOpenReactiveModal}
              >
                <Box
                  component="img"
                  src={RRC}
                  alt="Reactive Risk Control Model"
                  sx={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    objectFit: "cover",
                  }}
                />

                {/* Overlay for zoom icon */}
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bgcolor: "rgba(0,0,0,0.4)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: 0,
                    transition: "opacity 0.3s ease-in-out",
                  }}
                >
                  <ZoomInIcon sx={{ color: "white", fontSize: 40 }} />
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Modal for Preventive fullscreen image */}
          <Modal
            open={openImageModal}
            onClose={handleCloseImageModal}
            closeAfterTransition
          >
            <Fade in={openImageModal}>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: { xs: "90%", sm: "80%", md: "70%" },
                  maxHeight: "90vh", // ✅ Restrict height to 90% of viewport
                  bgcolor: "background.paper",
                  borderRadius: "12px",
                  boxShadow: 24,
                  p: 2,
                  outline: "none",
                  overflow: "auto", // ✅ Make content scrollable if needed
                }}
              >
                <IconButton
                  onClick={handleCloseImageModal}
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    color: "#FF9500",
                    zIndex: 1, // Ensure close button stays above image
                  }}
                >
                  <CloseIcon />
                </IconButton>

                <Box
                  component="img"
                  src={PFC}
                  alt="Preventive Risk Control Model"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                />
              </Box>
            </Fade>
          </Modal>

          {/* Modal for Reactive fullscreen RRF image */}
          <Modal
            open={openReactiveModal}
            onClose={handleCloseReactiveModal}
            closeAfterTransition
          >
            <Fade in={openReactiveModal}>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: { xs: "90%", sm: "80%", md: "70%" },
                  bgcolor: "background.paper",
                  borderRadius: "12px",
                  boxShadow: 24,
                  p: 2,
                  outline: "none",
                }}
              >
                <IconButton
                  onClick={handleCloseReactiveModal}
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    color: "#FF9500",
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <Box
                  component="img"
                  src={RRC}
                  alt="Reactive Risk Control Model"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                />
              </Box>
            </Fade>
          </Modal>
        </Container>
      </Box>
      {/* ====== Future Goals Section ====== */}
      {/* Background Image with Opacity */}

      <FutureGoals />
    </Box>
    </>
  );
}

export default About;
