import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Modal,
  IconButton,
  Grid,
  useMediaQuery,
  Divider,
  Container,
} from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import CloseIcon from "@mui/icons-material/Close";

const Preventive = () => {
  const [openModal, setOpenModal] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        bgcolor: "#FFFFFF",
        pb: 5,
        position: "relative", // Ensure relative positioning for absolute arrow placement
        width: "100%",
        borderRadius: "12px",
      }}
    >
      {/* Flowchart Title */}
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: "#3A7B81",
          mb: 4,
          fontSize: { xs: "22px", md: "32px" }, // Responsive font size
        }}
      >
        DocRide Preventive Risk Control Model
      </Typography>

      {/* Flowchart Container */}
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="center">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",

              alignItems: "center",
            }}
          >
            {/* First Row - Right Arrows */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 4,
              }}
            >
              <FlowBox text="Put your Business specific details to 9 Questions in Legal Compliance Module" />
              <Arrow direction="right" />
              <FlowBox
                text="AI generates List of Applicable OHS Legal requirements"
                highlight
              />
              <Arrow direction="right" />
              <FlowBox
                text="Edit/Delete/Add to update and forward it"
                highlight
              />
              <Arrow direction="right" />
              <FlowBox
                text="Conduct Risk Assessment Against each Activity"
                highlight
              />
            </Box>

            {/* Down Arrow */}
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "right",
                width: "100%",
                right: 85,
              }}
            >
              <Arrow />
            </Box>

            {/* Second Row - Left Arrows */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 4,
              }}
            >
              <FlowBox text="AI Calculates Efficiency in terms of the Cost of Risk Controls (Coming Soon)" />
              <Arrow direction="left" />
              <FlowBox
                text="Demand the resources to deploy controls"
                highlight
              />
              <Arrow direction="left" />
              <FlowBox
                text="Review/Revise and Approve the Risk Assessments and Controls"
                highlight
              />
              <Arrow direction="left" />
              <FlowBox
                text="AI gives you hazards, risk, control measures, and type of control"
                highlight
              />
            </Box>

            {/* Down Arrow */}
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                width: "100%",
                left: 145,
                py: 2,
              }}
            >
              <Arrow />
            </Box>
          </Box>
        </Grid>

        <Grid container spacing={2} justifyContent="flex-start">
          {/* Divider */}
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "left",
              width: "90%",
            }}
          >
            <Divider
              sx={{ my: 2, width: "100%", height: "4px", bgcolor: "#FF9500" }}
            />
          </Box>

          {/* Third Row - Left Arrows */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "left",
              gap: 1,
            }}
          >
            <FlowBox text="Tasks and Reminders" />
            <FlowBox text="Communication" highlight />
            <FlowBox text="Assets and Calibrations" highlight />
            <FlowBox text="Employees Competence Management" highlight />
            <FlowBox text="Emergency Preparedness & Response" highlight />
          </Box>

          {/* Divider */}
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "left",
              width: "90%",
            }}
          >
            <Divider
              sx={{ my: 2, width: "100%", height: "4px", bgcolor: "#FF9500" }}
            />
          </Box>
        </Grid>

        <Grid container spacing={2} justifyContent="flex-start">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Down Arrow */}
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                width: "100%",
                left: 145,
                py: 2,
              }}
            >
              <Arrow />
            </Box>

            {/* Fourth Row - Right Arrows */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <FlowBox text="Click 'Design Inspection Checklist'" />
              <Arrow direction="left" />
              <FlowBox text="Review/Revise & Approve SSOW" highlight />
              <Arrow direction="left" />
              <FlowBox
                text="AI develops the Safe System of Work Procedure"
                highlight
              />
              <Arrow direction="left" />
              <FlowBox text="Develop SSOW" highlight />
              <Arrow direction="right" />
              <FlowBox text="Develop PTW (Optional)" highlight />
            </Box>
          </Box>
        </Grid>

        <Grid container spacing={2} justifyContent="flex-start">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Down Arrow */}
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "left",
                width: "100%",
                left: 90,
                py: 2,
              }}
            >
              <Arrow />
            </Box>

            {/* Fifth Row - Right Arrows */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <FlowBox text="AI develops the Inspection Checklist" />
              <Arrow direction="right" />
              <FlowBox
                text="Review/Revise and Approve the Inspection Checklist and assign it to authorized inspection Staff"
                highlight
              />
              <Arrow direction="right" />
              <FlowBox text="Conduct Inspections" highlight />
              <Arrow direction="right" />
              <FlowBox text="Initiate Observations / NCRS" highlight />
              <Arrow direction="right" />
              <FlowBox
                text="Conduct Root Cause Identification and Propose CA"
                highlight
              />
              <Arrow direction="right" />
              <FlowBox
                text="Approve the proposed Corrective Actions and deploy the controls"
                highlight
              />
            </Box>
          </Box>
        </Grid>

        <Grid container spacing={2} justifyContent="center">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{ width: "100%", my: 4, mx: 4 }}
          >
            <svg width="80%" height="12" viewBox="0 0 400 10">
              {/* Left Arrow */}
              <polygon points="0,5 12,0 12,10" fill="#E67732" />

              {/* Divider Line */}
              <line
                x1="12"
                y1="5"
                x2="388"
                y2="5"
                stroke="#E67732"
                strokeWidth="4"
              />

              {/* Right Arrow */}
              <polygon points="400,5 388,0 388,10" fill="#E67732" />
            </svg>
          </Box>
        </Grid>

        <Grid item fullWidth spacing={2} justifyContent="center">
          {/* Bottom Box */}
          <Box
            sx={{
              textAlign: "center",
              backgroundColor: "#FF9500",
              color: "#ffffff",
              py: 3,
              mt: 3,
              borderRadius: "30px",
            }}
          >
            <Typography fontWeight="bold">
              Internal Audit to review the effectiveness of the Reactive Risk
              Control Model.
            </Typography>
            <Typography fontWeight="bold">
              (AI shall develop the Internal Audit Checklists as well as assist
              in the Audit Report development)
            </Typography>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

/* === Arrow Component === */
const Arrow = ({ direction }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)"); // Detect small screen

  // Change "right" arrows to "down" arrows on xs screens
  const adjustedDirection =
    isSmallScreen && direction === "right" ? "down" : direction;

  return (
    <Typography
      sx={{
        fontSize: { xs: "18px", md: "24px" },
        color: "#FF9500",
        fontWeight: "bold",
      }}
    >
      {adjustedDirection === "right"
        ? "→"
        : adjustedDirection === "left"
        ? "←"
        : adjustedDirection === "longHorizontal"
        ? "⟷"
        : "↓"}
    </Typography>
  );
};

const FlowBox = ({ text }) => {
  const darkBlueBoxes = [
    "Review/Revise and Approve the Risk Assessments and Controls",
    "Click 'Design Inspection Checklist'",
  ];

  const orangeBoxes = [
    "AI generates List of Applicable OHS Legal requirements",
    "AI Calculates Efficiency in terms of the Cost of Risk Controls (Coming Soon)",
    "AI gives you hazards, risk, control measures, and type of control",
    "AI develops the Safe System of Work Procedure",
    "AI develops the Inspection Checklist",
  ];

  return (
    <Box
      sx={{
        padding: { xs: "10px", sm: "14px", md: "18px" }, // ✅ Adjust padding dynamically
        bgcolor: darkBlueBoxes.includes(text)
          ? "#3A7B81"
          : orangeBoxes.includes(text)
          ? "#FF9500"
          : "#68B9BA",
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        borderRadius: "10px",
        width: { xs: "100%", sm: "90%", md: "200px" }, // ✅ Adjust width across screens
        maxWidth: "220px", // ✅ Prevents extreme widening
        fontSize: { xs: "12px", sm: "14px", md: "16px" }, // ✅ Better readability on mobile
        lineHeight: { xs: 1.3, sm: 1.5, md: 1.6 },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: { xs: "50px", sm: "70px", md: "90px" }, // ✅ Keep boxes uniform
        boxShadow: 2, // ✅ Adds visibility effect
        flexWrap: "wrap", // ✅ Ensures text doesn't break weirdly
      }}
    >
      {text}
    </Box>
  );
};

/* === Flowchart Popup Component === */
const FlowchartPopup = ({ open, handleClose }) => (
  <Modal open={open} onClose={handleClose}>
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: { xs: "98%", sm: "90%", md: "85%", lg: "80%" }, // ✅ Increase width
        maxWidth: "900px", // ✅ Prevents it from being too large
        maxHeight: "80vh", // ✅ Prevents overflow by limiting height
        boxShadow: 24,
        p: { xs: 2, md: 3 },
        borderRadius: "12px",
        outline: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Close Button */}
      <IconButton
        onClick={handleClose}
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          color: "#FF9500",
        }}
      >
        <CloseIcon />
      </IconButton>

      {/* Scrollable Content */}
      <Box
        sx={{
          maxHeight: "65vh", // ✅ Limits height to avoid content spilling out
          overflowY: "auto", // ✅ Enables scrolling inside modal if needed
          px: 2, // ✅ Padding ensures spacing inside modal
        }}
      >
        {/* Flowchart Content */}
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#3A7B81",
            mb: 2,
            fontSize: { xs: "16px", md: "20px" },
          }}
        >
          Preventive Risk Control Flowchart
        </Typography>

        {/* Flowchart Inside Modal */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
            width: "100%", // ✅ Ensures content doesn’t stretch beyond modal width
          }}
        ></Box>
      </Box>
    </Box>
  </Modal>
);

export default Preventive;
