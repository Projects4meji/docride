import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Dialog,
  DialogContent,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import BlogHeroImage from "../../assets/bgimage.avif";
import CardBack from "../../assets/neuron.avif";
import iso from "../../assets/icons/iso.png";
import grow from "../../assets/icons/grow.png";
import access from "../../assets/icons/access-control.png";
import business from "../../assets/icons/business-ethics.png";
import audit from "../../assets/icons/audit.png";
import compliance from "../../assets/icons/compliance.png";
import records from "../../assets/icons/records.png";
import protect from "../../assets/icons/protect.png";
import subcontractor from "../../assets/icons/subcontracting.png";
import risk from "../../assets/icons/risk-management.png";
import leader from "../../assets/icons/leadership.png";
import plat from "../../assets/icons/platform.png";
import view from "../../assets/icons/viewpoint.png";

const features = [
  {
    title: "Master ISO 45001 Without the Stress",
    description: [
      "Achieve full ISO 45001:2018 compliance with pre-built, expert-approved workflows—based on PDCA model for continual improvement.",
      "Complete initial setup in less than a day, freeing you from endless paperwork. This includes a full system development and deployment (Maintain Documented Information).",
      "Simplify complex standards into actionable steps, empowering your team without specialists.",
      "Stay audit-ready with a system designed for continuous compliance.",
    ],
    icon: (
      <img src={iso} alt="ISO Icon" style={{ width: "60px", height: "60px" }} />
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
    bgColor: "#E16E26",
  },
  {
    title: "A Platform That Works Anywhere",
    description: [
      "Navigate effortlessly with a clean interface which shows you only the documents and records based on your site and specific authorizations assigned by the admin. ",
      "Access your OHS system from any device, anywhere, with cloud-powered convenience. You can develop and deploy the OHS system on a desktop/laptop only but you can execute the OHS processes via any device.",
      "Approve actions and check compliance on the go—safety doesn’t wait.",
    ],
    icon: (
      <img
        src={plat}
        alt="Platform Icon"
        style={{ width: "50px", height: "50px" }}
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
    bgColor: "#E16E26",
  },
  {
    title: "Stay Legally Compliant with Minimal Effort",
    description: [
      "Let AI identify your OHS legal obligations, tailored to your industry and location.",
      "Delegate tasks and track progress in real-time, ensuring nothing slips through the cracks.",
      "Reduce legal risks with proactive alerts that catch issues before they escalate.",
    ],
    icon: (
      <img
        src={compliance}
        alt="ISO Icon"
        style={{ width: "60px", height: "60px" }}
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
    bgColor: "#E16E26",
  },
  {
    title: "Control Access Like a Pro",
    description: [
      "Assign precise roles and permissions to match your team’s responsibilities—security meets simplicity.",
      "Manage multiple sites with flexible, site-specific access, perfect for any organizational structure.",
      "Empower every user with dashboards that deliver clarity and relevance, from executives to field staff.",
    ],
    icon: (
      <img
        src={access}
        alt="ISO Icon"
        style={{ width: "50px", height: "50px" }}
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
    bgColor: "#E16E26",
  },
  {
    title: "Grow Without Limits",
    description: [
      "Scale effortlessly from a single office to a global network with multi-site management built in.",
      "Adapt to your business size with a platform that’s as agile as a startup and as robust as an enterprise.",
      "Pay only for what you need with pricing that evolves with your growth—no hidden costs.",
    ],
    icon: (
      <img
        src={grow}
        alt="ISO Icon"
        style={{ width: "50px", height: "50px" }}
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
    bgColor: "#E16E26",
  },
  {
    title: "Records You Can Trust, Instantly",
    description: [
      "Store tamper-proof safety data securely in the cloud—reliable and retrievable in seconds.",
      "Find what you need fast with powerful search and timestamped records for airtight audits.",
      "Impress clients by sharing live performance data with secure, view-only access.",
    ],
    icon: (
      <img
        src={records}
        alt="ISO Icon"
        style={{ width: "50px", height: "50px" }}
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
    bgColor: "#E16E26",
  },
  {
    title: "See Everything, Act Instantly",
    description: [
      "Track safety trends and performance with real-time, interactive dashboards that reveal the big picture.",
      "Ensure accountability with timestamped logs that show who did what, when.",
      "Spot risks early and act fast with data-driven insights that keep you proactive.",
    ],
    icon: (
      <img
        src={view}
        alt="ISO Icon"
        style={{ width: "50px", height: "50px" }}
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
    bgColor: "#E16E26",
  },
  {
    title: "Audits Made Painless and Powerful",
    description: [
      "Run multi-site audits effortlessly with built-in workflows, AI-generated checklists, and reports.",
      "Share auditee data with auditors in one click—secure, view-only access keeps it simple.",
      "Cut audit prep time in half with automated data collection and AI-generated reports.",
    ],
    icon: (
      <img
        src={audit}
        alt="ISO Icon"
        style={{ width: "50px", height: "50px" }}
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
    bgColor: "#E16E26",
  },
  {
    title: "Win Clients with Unmatched Transparency",
    description: [
      "Showcase your safety excellence with real-time data clients can see and trust.",
      "Build confidence with transparent, tamper-proof records that highlight your ISO 45001 adherence.",
      "Stand out in tenders by offering live compliance metrics that prove your commitment.",
    ],
    icon: (
      <img
        src={business}
        alt="ISO Icon"
        style={{ width: "60px", height: "60px" }}
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
    bgColor: "#E16E26",
  },
  {
    title: "Keep Subcontractors Aligned and Accountable",
    description: [
      "Set safety standards, assign roles, and monitor subcontractor performance in one place.",
      "Compare subcontractor safety records easily to ensure consistently high standards.",
      "Enforce compliance across all parties with centralized oversight and clear expectations.",
    ],
    icon: (
      <img
        src={subcontractor}
        alt="ISO Icon"
        style={{ width: "60px", height: "60px" }}
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
    bgColor: "#E16E26",
  },
  {
    title: "Empower Your Team with Competence",
    description: [
      "Plan and track training effortlessly, ensuring every employee meets safety standards.",
      "Keep skills sharp with automated reminders for expiring certifications or overdue sessions.",
      "Document competence with detailed records that satisfy audits and boost confidence.",
    ],
    icon: (
      <img
        src={leader}
        alt="ISO Icon"
        style={{ width: "60px", height: "60px" }}
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
    bgColor: "#E16E26",
  },
  {
    title: "Prevent Risks Before They Happen",
    description: [
      "Identify hazards with AI-powered risk assessments that analyze past incidents to predict future risks.",
      "Stay proactive with continuous monitoring and instant alerts on potential issues.",
      "Protect your team with data-driven insights that turn risks into action plans.",
    ],
    icon: (
      <img
        src={risk}
        alt="ISO Icon"
        style={{ width: "60px", height: "60px" }}
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
    bgColor: "#E16E26",
  },
  {
    title: "Save Money While Staying Safe",
    description: [
      "Reduce consultant costs by up to 50% with AI and automation that handle routine compliance tasks.",
      "Avoid fines and downtime with a system that prevents incidents before they hit your bottom line.",
      "Optimize resources with streamlined processes that make safety efficient, not expensive.",
    ],
    icon: (
      <img
        src={protect}
        alt="ISO Icon"
        style={{ width: "50px", height: "50px" }}
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
    bgColor: "#E16E26",
  },
];

const Benefits = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ Smooth scroll to top when component mounts
  }, []);

  const [expanded, setExpanded] = useState(Array(features.length).fill(false));
  const [open, setOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [defaultHeight, setDefaultHeight] = useState(0);
  const cardRefs = useRef([]);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (cardRefs.current.length > 0) {
      const heights = cardRefs.current.map((ref) =>
        ref ? ref.offsetHeight : 0
      );
      setDefaultHeight(Math.max(...heights));
    }
  }, [features]);

  const toggleExpand = (index) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

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
    <>
      <Helmet>
        <title>
          Benefits of Our AI-Based OHS Management Platform | ISO 45001
        </title>
        <meta
          name="description"
          content="Discover the key benefits of using our AI-powered OHS management system: ISO 45001 compliance, risk assessments, audits, incident reporting, access control, and more."
        />
        <meta
          name="keywords"
          content="ISO 45001, AI based ohs management, Online ohs management, Risk assessment, Ohs audit, Incident investigation, Incident reporting, Permit to work, Ohs legal requirements, Paperless ohs management"
        />
      </Helmet>

      <Box sx={{ bgcolor: "#F4F7F6", pb: 8 }}>
        {/* Hero Section */}
        <Box
          sx={{
            bgcolor: "#ffffff",
            width: "100%",
            height: { xs: "40vh", sm: "35vh", md: "40vh" }, // Adjust height for different screens
            backgroundImage: `url(${BlogHeroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Center text on mobile, left-align on larger screens
            justifyContent: "center",
            textAlign: "center",
            px: { xs: 3, sm: 6, md: 16, lg: 20 }, // Adjust padding for different screen sizes
            py: { xs: 2, sm: 4 }, // Adds vertical padding for better spacing
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: { xs: "28px", sm: "32px", md: "46px" }, // Adjust font size dynamically
              textShadow: "2px 2px 6px rgba(0,0,0,0.3)", // Add a subtle text shadow for better readability
            }}
          >
            Benefits
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              maxWidth: { xs: "90%", sm: "75%", md: "800px" }, // Adjust width based on screen size
              mt: 1,
              pl: { xs: 0, md: 4 }, // Remove left padding on smaller screens
              fontWeight: "400",
              fontSize: { xs: "16px", sm: "20px", md: "24px" }, // Adjust text size dynamically
              lineHeight: 1.5, // Improve readability
            }}
          >
            Streamline Compliance, Reduce Risk, and Empower Your Team with
            Intelligent Safety Solutions
          </Typography>
        </Box>

        {/* Content Section */}
        <Container
          maxWidth="lg"
          sx={{ textAlign: "center", position: "relative", zIndex: 1, pt: 6 }}
        >
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                key={index}
                sx={{ position: "relative", zIndex: 1 }}
              >
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
                      top: 0,
                      left: 40,
                      background:
                        "linear-gradient(to bottom, #66C2A5 30%, #2C8A7A 100%)",
                      width: 90,
                      height: 90,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      boxShadow: 2,
                      border: `2px solid ${feature.bgColor}`,
                      zIndex: 4,
                    }}
                  >
                    {feature.icon}
                  </Box>
                </Box>

                <Card
                  className="benefits-card"
                  sx={{
                    boxShadow: 3,
                    textAlign: "left",
                    position: "relative",
                    borderRadius: "10px",
                    overflow: "hidden",
                    background:
                      "linear-gradient(180deg, #FFFFFF 0%, rgba(155, 215, 199, 0.43) 50%)",
                    zIndex: 2,
                    mt: 4,
                    minHeight: defaultHeight,
                    transition: "all 0.3s ease-in-out",
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
                  {/* Background Image */}
                  <Box
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      backgroundImage: `url(${CardBack})`,
                      backgroundSize: "cover",
                      opacity: 0.2,
                    }}
                  />
                  <CardContent className="card-content" sx={{ pt: 5 }}>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      gutterBottom
                      sx={{
                        pt: 3,
                        textAlign: "center",
                        color: "#1DA196",
                        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      {feature.title}
                    </Typography>

                    <List sx={{ listStyleType: "disc", pl: 5 }}>
                      {feature.description.slice(0, 3).map((point, i) => (
                        <ListItem key={i} sx={{ display: "list-item", pl: 2 }}>
                          <ListItemText
                            primary={point}
                            sx={{ color: "#555" }}
                          />
                        </ListItem>
                      ))}
                    </List>

                    <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
                      <List sx={{ listStyleType: "disc", pl: 5 }}>
                        {feature.description.slice(3).map((point, i) => (
                          <ListItem
                            key={i + 3}
                            sx={{ display: "list-item", pl: 2 }}
                          >
                            <ListItemText
                              primary={point}
                              sx={{ color: "#555" }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>

                    {feature.description.length > 3 && (
                      <Button
                        size="small"
                        onClick={() => toggleExpand(index)}
                        sx={{
                          ml: 3,
                          px: 4,
                          color: "#ffffff",
                          textTransform: "none",
                          fontWeight: "bold",
                          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                          border: "1px solid #1DA196",
                          "&:hover": {
                            borderColor: "#E16E26",
                          },
                        }}
                      >
                        {expanded[index] ? "Show Less" : "Show More"}
                      </Button>
                    )}
                  </CardContent>

                  {/* Watch Video Button - Keep Space for First Card Even When Hidden */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      pb: 2,
                      visibility:
                        index === 0 && !expanded[index] ? "hidden" : "visible", // ✅ Keeps height consistent
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
                  <Box
                    sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}
                  >
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
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Benefits;
