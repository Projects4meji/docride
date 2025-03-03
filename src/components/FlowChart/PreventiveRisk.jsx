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

const PreventiveRiskFlowchart = () => {
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
        width: "auto",
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
      <Container
        maxWidth="lg"
        sx={{
          mr: 24,
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          {/* First Row - Right Arrows */}
          <ResponsiveRow
            items={[
              "Put your Business specific details to 9 Questions in Legal Compliance Module",
              "AI generates List of Applicable OHS Legal requirements",
              "Edit/Delete/Add to update and forward it",
              "Conduct Risk Assessment Against each Activity",
            ]}
            showArrows="right"
            forceRightArrows // ✅ Force all arrows to be right-facing
          />
          <ResponsiveArrow alignTo="right" />{" "}
        </Grid>

        <Grid container spacing={0} justifyContent="center">
          {/* Second Row - Left Arrows */}
          <ResponsiveRow
            items={[
              "AI Calculates Efficiency in terms of the Cost of Risk Controls (Coming Soon)",
              "Demand the resources to deploy controls",
              "Review/Revise and Approve the Risk Assessments and Controls",
              "AI gives you hazards, risk, control measures, and type of control",
            ]}
            showArrows="left"
          />
          <ResponsiveArrow alignTo="third" />
        </Grid>

        {/* Divider under Second row */}
        <Divider
          sx={{ my: 2, width: "83%", height: "4px", bgcolor: "#FF9500" }}
        />

        <Grid container spacing={0} justifyContent="flex-start">
          {/* Third Row - No Arrows, Aligned Left */}
          <ResponsiveRow
            items={[
              "Tasks and Reminders",
              "Communication",
              "Assets and Calibrations",
              "Employees Competence Management",
              "Emergency Preparedness & Response",
            ]}
            alignLeft
          />
        </Grid>
        {/* Divider under Third row */}
        <Divider
          sx={{ my: 2, width: "83%", height: "4px", bgcolor: "#FF9500" }}
        />

        <Grid container spacing={2} justifyContent="flex-start">
          {/* Fourth Row - Left Arrows Except Last One (Right) */}
          <ResponsiveArrow alignTo="divider" />
          <ResponsiveRow
            items={[
              "Click 'Design Inspection Checklist'",
              "Review/Revise & Approve SSOW",
              "AI develops the Safe System of Work Procedure",
              "Develop SSOW",
              "Develop PTW (Optional)",
            ]}
            showArrows="left"
            lastArrowRight
          />
          <ResponsiveArrow alignTo="fourthRowFirstItem" />
        </Grid>

        <Grid container spacing={2} justifyContent="flex-start">
          {/* Fifth Row - Right Arrows */}

          <ResponsiveRow
            items={[
              "AI develops the Inspection Checklist",
              "Review/Revise and Approve the Inspection Checklist and assign it to authorized inspection Staff",
              "Conduct Inspections",
              "Initiate Observations / NCRS",
              "Conduct Root Cause Identification and Propose CA",
              "Approve the proposed Corrective Actions and deploy the controls",
            ]}
            showArrows="right"
            forceRightArrows
            forceEqualSpacing
          />
          <Box
            sx={{
              position: "relative", // ✅ Ensures absolute arrows are positioned correctly
              width: "100%",
              height: "auto",
            }}
          >
            {/* Long Curved Arrows */}
            <svg
              width="100%"
              height="250px"
              style={{
                position: "absolute",
                top: "64%", // ✅ Adjusted for proper positioning
                left: "0",
                pointerEvents: "none", // ✅ Prevents blocking interactions
                zIndex: -1, // ✅ Places behind other elements
              }}
            >
              {/* First Arrow - From 5th Row to 3rd Item in 2nd Row */}
              <path
                d="M 90%, 220 C 80% 180, 60% 120, 45% 80" // ✅ Adjusted control points for smooth curve
                stroke="#FF9500"
                strokeWidth="4"
                fill="none"
                markerEnd="url(#arrowhead)"
              />

              {/* Second Arrow - From 6th Row to 3rd Item in 2nd Row */}
              <path
                d="M 95%, 250 C 85% 200, 65% 140, 45% 80" // ✅ Adjusted path for the second curve
                stroke="#FF9500"
                strokeWidth="4"
                fill="none"
                markerEnd="url(#arrowhead)"
              />

              {/* Arrowhead Definition */}
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="12"
                  markerHeight="12"
                  refX="6"
                  refY="6"
                  orient="auto"
                >
                  <polygon points="0 0, 12 6, 0 12" fill="#FF9500" />
                </marker>
              </defs>
            </svg>
          </Box>
        </Grid>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ width: "100%", my: 1, mx: 4 }}
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
      </Container>

      {/* Sixth Row */}
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "#FF9500",
          color: "#ffffff",
          py: 3,
          mt: 3,
          ml: 4,
          mr: 2,
          borderRadius: "30px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
          }}
        >
          Internal Audit to review the effectiveness of the Preventive Risk
          Control Model.
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
          }}
        >
          (AI shall develop the Internal Audit Checklists as well as assist in
          the Audit Report development)
        </Typography>
      </Box>

      {/* Modal for Flowchart */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <FlowchartPopup
          open={openModal}
          handleClose={() => setOpenModal(false)}
        />
      </Modal>
    </Box>
  );
};

/* === Responsive Row Component === */
const ResponsiveRow = ({
  items,
  alignLeft,
  highlighted,
  wide,
  showArrows,
  lastArrowRight,
  forceRightArrows, // ✅ New prop to force all arrows right (used for 1st & 5th rows)
  forceEqualSpacing,
}) => {
  return (
    <Grid
      container
      spacing={0.5} // Adjust spacing for better alignment
      justifyContent={alignLeft ? "flex-start" : "space-evenly"} // ✅ Even spacing
      alignItems="center"
      wrap="nowrap"
    >
      {items.map((text, index) => (
        <React.Fragment key={index}>
          <Grid
            item
            xs="auto"
            sm={2}
            md={2}
            display="flex"
            justifyContent="center"
          >
            <FlowBox text={text} highlighted={highlighted} wide={wide} />
          </Grid>

          {/* ✅ Correct Arrow Directions Based on Row */}
          {showArrows && index < items.length - 1 && (
            <Grid item>
              <Typography
                sx={{
                  fontSize: { xs: "14px", md: "32px" },
                  color: "#FF9500",
                  fontWeight: "900",
                }}
              >
                {forceRightArrows
                  ? "→" // ✅ Force right arrows for 1st & 5th rows
                  : lastArrowRight && index === items.length - 2
                  ? "→" // ✅ Last arrow of 4th row should be right
                  : "←"}{" "}
              </Typography>
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
};

/* === Responsive Arrow Component === */
const ResponsiveArrow = ({ alignTo = "right" }) => (
  <Grid container justifyContent="center">
    <Grid
      item
      xs={12}
      sm={
        alignTo === "fourthRowFirstItem"
          ? 10.2
          : alignTo === "third"
          ? 3.6
          : alignTo === "divider"
          ? 5.3
          : 9.5
      }
      textAlign={alignTo === "fourthRowFirstItem" ? "left" : "right"}
    >
      <Typography
        sx={{
          fontSize: { xs: "16px", md: "32px" },
          color: "#FF9500",
          fontWeight: "bold",
        }}
      >
        ↓
      </Typography>
    </Grid>
  </Grid>
);

/* === Flowchart Box Component === */
const FlowBox = ({ text, highlighted, wide }) => {
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
        padding: { xs: 1, md: 2 },
        bgcolor: darkBlueBoxes.includes(text)
          ? "#3A7B81"
          : orangeBoxes.includes(text)
          ? "#FF9500"
          : "#68B9BA",
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        borderRadius: "8px",
        width: wide ? { xs: "80%", md: "300px" } : { xs: "80%", md: "180px" },
        fontSize: { xs: "12px", md: "12px" },
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
        >
          <FlowBox text="Put your Business details" />
          <ResponsiveArrow />
          <FlowBox text="AI Generates Legal List" />
          <ResponsiveArrow />
          <FlowBox
            text="Review/Revise and Approve the Risk Assessments and Controls"
            highlighted
          />
        </Box>
      </Box>
    </Box>
  </Modal>
);

export default PreventiveRiskFlowchart;
