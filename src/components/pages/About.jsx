import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Divider,
  Modal,
  IconButton,
} from "@mui/material";
import { Fade } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PreventiveRisk from "../FlowChart/PreventiveRisk";
import ReactiveRisk from "../FlowChart/ReactiveRisk";
import BlogHeroImage from "../../assets/bgimage.jpg";
import Aboutimage from "../../assets/about/About.jpg";
import SafetyImage from "../../assets/about/S&H.png";
import FlowImage from "../../assets/about/Flow.png";
import AiImage from "../../assets/blogs/Ai1.png";
import StatsBgImage from "../../assets/privacy.jpg";
import bgimg from "../../assets/about/Im1.jpg";

function About() {
  const [openModal, setOpenModal] = useState(false);
  const [openReactive, setOpenReactive] = useState(false);

  return (
    <Box sx={{ bgcolor: "#FFFFFF", pb: 5 }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "#ffffff",
          width: "100%",
          height: { xs: "40vh", sm: "35vh", md: "30vh" },
          backgroundImage: `url(${BlogHeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: "center",
          textAlign: { xs: "center", md: "left" },
          px: { xs: 3, sm: 6, md: 16, lg: 40 },
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
              sx={{ color: "#484747", fontSize: "16px", lineHeight: 1.8 }}
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
                right: -20,
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
                width: "60%",
                height: "60%",
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
              sx={{ color: "#484747", fontSize: "16px", lineHeight: 1.8 }}
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
            bottom: 0,
            right: 0,
            width: { xs: "100%", md: "40%" },
            height: "60%",
            backgroundImage: `url(${FlowImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            opacity: 0.4, // 40% opacity
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
              sx={{ color: "#484747", mt: 1, mb: 2, lineHeight: 1.8 }}
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
              sx={{ color: "#484747", lineHeight: 1.8 }}
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
            <Button
              onClick={() => setOpenModal(true)}
              variant="contained"
              sx={{
                mt: 2,
                background: "linear-gradient(to right, #73C7AD, #3A7B81)",
                color: "white",
                borderRadius: "30px",
                px: 4,
                py: 1,
                textTransform: "none",
                fontSize: "16px",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#177E74",
                },
              }}
            >
              View Model
            </Button>
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
              sx={{ color: "#484747", mt: 1, mb: 2, lineHeight: 1.8 }}
            >
              It focuses on managing workplace incidents after they occur. It
              starts with incident reporting, followed by a severity-based
              decision—either no action, an investigation, or corrective
              actions. Investigation findings lead to recommendations, which are
              reviewed and integrated into risk assessments. Finally, internal
              audits ensure the effectiveness of the reactive controls,
              enhancing workplace safety and compliance.
            </Typography>
            <Button
              onClick={() => setOpenReactive(true)}
              variant="contained"
              sx={{
                mt: 2,
                background: "linear-gradient(to right, #73C7AD, #3A7B81)",
                color: "white",
                borderRadius: "30px",
                px: 4,
                py: 1,
                textTransform: "none",
                fontSize: "16px",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#177E74",
                },
              }}
            >
              View Model
            </Button>
          </Box>
        </Container>

        {/* Preventive Risk Modal */}
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          aria-labelledby="flowchart-modal"
          aria-describedby="flowchart-description"
          closeAfterTransition
        >
          <Fade in={openModal} timeout={300}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: { xs: "90%", sm: "75%", md: "80%" },
                maxHeight: "85vh",
                bgcolor: "white",
                boxShadow: 24,
                p: 3,
                borderRadius: "12px",
                outline: "none",
                backgroundImage: `url(${bgimg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Close Button */}
              <IconButton
                onClick={() => setOpenModal(false)}
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  color: "#FF9500",
                }}
              >
                <CloseIcon />
              </IconButton>

              {/* Scrollable Content Inside Modal */}
              <Box
                sx={{
                  overflowY: "auto",
                  maxHeight: "75vh",
                  padding: 2,
                }}
              >
                <PreventiveRisk />{" "}
                {/* ✅ This now stays contained inside the modal */}
              </Box>
            </Box>
          </Fade>
        </Modal>

        {/* ✅ Reactive Risk Control Modal */}
        <Modal
          open={openReactive}
          onClose={() => setOpenReactive(false)}
          closeAfterTransition
        >
          <Fade in={openReactive} timeout={300}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: { xs: "90%", sm: "75%", md: "50%" },
                maxHeight: "85vh",
                bgcolor: "white",
                boxShadow: 24,
                p: 3,
                borderRadius: "12px",
                outline: "none",
                backgroundImage: `url(${bgimg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <IconButton
                onClick={() => setOpenReactive(false)}
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  color: "#FF9500",
                }}
              >
                <CloseIcon />
              </IconButton>

              <Box
                sx={{
                  overflowY: "auto",
                  maxHeight: "75vh",
                  padding: 2,
                }}
              >
                <ReactiveRisk
                  open={openReactive}
                  handleClose={() => setOpenReactive(false)}
                />
                {/* ✅ This will now render properly */}
              </Box>
            </Box>
          </Fade>
        </Modal>
      </Box>
    </Box>
  );
}

export default About;
