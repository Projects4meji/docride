import React from "react";
import {
  Box,
  Typography,
  Modal,
  IconButton,
  Grid,
  useMediaQuery,
  Container,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import bgimg from "../../assets/about/Im1.jpg";

const ReactiveRisk = ({ open, handleClose }) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "98%", sm: "90%", md: "80%", lg: "75%" },
          maxWidth: "1900px",
          maxHeight: "85vh",
          bgcolor: "white",
          boxShadow: 24,
          p: { xs: 2, md: 3 },
          borderRadius: "12px",
          outline: "none",
          overflowY: "auto",
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: 10, right: 10, color: "#FF9500" }}
        >
          <CloseIcon />
        </IconButton>

        {/* Title */}
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#1E626B",
            mb: 3,
            fontSize: { xs: "18px", md: "24px" },
          }}
        >
          DocRide Reactive Risk Control Model
        </Typography>

        {/* Flowchart Container */}
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "center",
                alignItems: "center",
                gap: 4,
              }}
            >
              <FlowBox text="Incident is Reported by the user" />
              <Arrow direction="right" />
              <FlowBox
                text="Your decision based on Severity"
                shape="diamond"
                highlight
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", md: "column" },
                justifyContent: "center",
                alignItems: "center",
                gap: 4,
              }}
            >
              <Grid item>
                <Arrow direction="diagonalDownRight" />
              </Grid>
              <Grid item>
                <Arrow direction="right" />
              </Grid>
              <Grid item>
                <Arrow direction="diagonalUpRight" />
              </Grid>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", md: "column" },
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
              }}
            >
              <Grid item>
                <FlowBox text="No Action Required" />
              </Grid>
              <Grid item>
                <FlowBox text="Order an Incident Investigation" />
              </Grid>
              <Grid item>
                <FlowBox text="Seek Corrective Actions" />
              </Grid>
            </Box>

            <Arrow direction="right" />

            <FlowBox text="Incident Investigation" />

            <Arrow direction="right" />

            <FlowBox text="Investigation Recommendations" wide />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "41%", // Slightly lower
              left: "25%", // More to the left
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <svg width="220" height="200">
              {/* Extended & Adjusted Curved Path */}
              <path
                d="M 170,10 C 140,100 80,140 50,180" // Adjusted for more leftward curve & longer reach
                stroke="#003366"
                strokeWidth="3"
                fill="none"
                markerEnd="url(#arrowhead-down-left)" // Adjusted marker reference
              />
              <defs>
                <marker
                  id="arrowhead-down-left"
                  markerWidth="6"
                  markerHeight="6"
                  refX="5"
                  refY="3"
                  orient="auto"
                >
                  <polygon points="0 0, 6 3, 0 6" fill="#003366" />
                </marker>
              </defs>
            </svg>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              ml: 5,
            }}
          >
            <Arrow direction="down" />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              ml: { xs: 10, md: 42 },
            }}
          >
            <FlowBox
              text="Review/Revise and Approve the Risk Assessments and Controls"
              highlight
              wide
            />
          </Box>
        </Container>

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

        {/* Corrected Curved Arrow from "Internal Audit" to "Review FlowBox" */}
        <Box
          sx={{
            position: "absolute",
            bottom: "12%",
            left: "23%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <svg width="160" height="120">
            <path
              d="M 140,100 C 120,60 80,40 50,10"
              stroke="#003366"
              strokeWidth="3"
              fill="none"
              markerEnd="url(#arrowhead-up)"
            />
            <defs>
              <marker
                id="arrowhead-up"
                markerWidth="6"
                markerHeight="6"
                refX="5"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 6 3, 0 6" fill="#003366" />
              </marker>
            </defs>
          </svg>
        </Box>

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
            (AI shall develop the Internal Audit Checklists as well as assist in
            the Audit Report development)
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

/* === Flowchart Box Component === */
const FlowBox = ({ text, shape, highlight, wide }) => (
  <Box
    sx={{
      padding: { xs: 1, md: 2 },
      bgcolor: highlight ? "#3A7B81" : "#68B9BA",
      color: "white",
      textAlign: "center",
      fontWeight: "bold",
      borderRadius: shape === "diamond" ? "0" : "8px",
      width: shape === "diamond" ? "120px" : wide ? "300px" : "200px", // ✅ Makes it wider if `wide` is true
      height: shape === "diamond" ? "120px" : "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: { xs: "12px", md: "14px" },
      transform: shape === "diamond" ? "rotate(45deg)" : "none",
    }}
  >
    <Typography
      sx={{
        transform: shape === "diamond" ? "rotate(-45deg)" : "none",
        textAlign: "center",
        fontSize: { xs: "10px", md: "14px" },
        fontWeight: "bold",
        width: wide ? "280px" : "100px", // ✅ Ensures text fits within wider box
      }}
    >
      {text}
    </Typography>
  </Box>
);

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
        transform:
          adjustedDirection === "diagonalUpRight"
            ? "rotate(-45deg)" // Keep ↗️ the same
            : adjustedDirection === "diagonalDownRight"
            ? isSmallScreen
              ? "rotate(45deg)" // ✅ Change ↘️ to 45° on xs screens
              : "rotate(225deg)" // Default rotation for larger screens
            : "none",
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

export default ReactiveRisk;
