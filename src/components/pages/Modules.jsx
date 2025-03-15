import React, { useRef, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import AssetIcon from "../../assets/icons/AssetIcon.png";
import AuditIcon from "../../assets/icons/AuditIcon.png";
import ChatIcon from "../../assets/icons/ChatIcon.png";
import ResourceIcon from "../../assets/icons/ResourceIcon.png";
import RemindIcon from "../../assets/icons/RemindIcon.png";
import EmployeeIcon from "../../assets/icons/EmployeeIcon.png";
import InvestIcon from "../../assets/icons/InvestigationIcon.png";
import IncidentIcon from "../../assets/icons/AlertIcon.png";
import CorrectIcon from "../../assets/icons/CorrectionIcon.png";
import ObserveIcon from "../../assets/icons/ObserveIcon.png";
import OHSIcon from "../../assets/icons/OHSIcon.png";
import WPIcon from "../../assets/icons/WPIcon.png";
import SafeIcon from "../../assets/icons/SafeIcon.png";
import EMIcon from "../../assets/icons/EMIcon.png";
import InspectIcon from "../../assets/icons/InspectIcon.png";
import LegIcon from "../../assets/icons/legal-system.png";
import RiskIcon from "../../assets/icons/RiskIcon.png";
import Inspect from "../../assets/modules/Inspect.png";
import Risk from "../../assets/modules/RiskAsses.png";
import Legal from "../../assets/modules/LegComp.png";
import Ohs from "../../assets/modules/OHS.png";
import privacy from "../../assets/privacy.jpg";
import SSOW from "../../assets/modules/SSOW.png";
import NCR from "../../assets/modules/NCR.png";
import Commun from "../../assets/modules/Communication.png";
import Correct from "../../assets/modules/Correct.png";
import EPR from "../../assets/modules/EPR.png";
import Incident from "../../assets/modules/Incident.png";
import Investigation from "../../assets/modules/Investigation.png";
import PTW from "../../assets/modules/PTW.png";
import AC from "../../assets/modules/AC.png";
import RR from "../../assets/modules/RR.png";
import IA from "../../assets/modules/IA.png";
import TR from "../../assets/modules/TR.png";
import EM from "../../assets/modules/Employee-Management.png";

const moduleData = [
  {
    title: " OHS Documents",
    description: "Key Features",
    content: [
      "It lets you Create and communicate a Health and Safety Policy",
      "Ready to use OHS management system documents for you to tailor as per your business specific needs.",
      "Assign documents to the users based on their role requirements",
      "Includes the complete mapping document with ISO 45001 requirements",
    ],
    icon: OHSIcon,
    image: Ohs,
    bgcolor: "linear-gradient(67deg, #3BA69B 40%, #A1C661 100%)",
  },
  {
    title: "Legal Compliance",
    description: "Key Features",
    content: [
      "AI identifies legal requirements relevant to your business activities.",
      "Provides actionable interpretations of regulations.",
      "Assign compliance tasks to team members and monitor progress.",
      "Automated reminders ensure periodic reviews and updates.",
    ],
    icon: LegIcon,
    image: Legal,
    bgcolor: "linear-gradient(67deg, #3BA69B 40%, #A1C661 100%)",
  },
  {
    title: "Risk Assessments",
    description: "Key Features",
    content: [
      "Generate AI-driven risk assessments tailored to your operations.",
      "AI Identifies hazards and associated risks and proposes control measures.",
      "AI Prioritize risks with pre- and post-control ratings.",
      "AI tags the control measures from the hierarchy of controls",
      "AI will generate the list of tangible resources for proposed control measures.",
      "System maintains Risk assessment’s traceability with Relevant Legal Requirement",
    ],
    icon: RiskIcon,
    image: Risk,
    bgcolor: "linear-gradient(67deg, #3BA69B 40%, #A1C661 100%)",
  },
  {
    title: "Safe Systems of Work (SSOW)",
    description: "Key Features",
    content: [
      "AI generates SSOWs based on your risk assessment results or your prompts. Authorized users can also upload existing SSOWs.",
      "Include step-by-step task procedures and necessary safety precautions.",
      "You can assign the users on which SSOWs are applicable so only they can view it",
      "You can set a review frequency and the system will remind you when the review is due",
      "System maintains SSOWs traceability with Relevant Risk Assessment",
    ],
    icon: SafeIcon,
    image: SSOW,
    bgcolor: "linear-gradient(67deg, #3BA69B 40%, #A1C661 100%)",
  },
  {
    title: "Inspections",
    description: "Key Features",
    content: [
      "Generate inspection checklists automatically based on Safe System of Work Procedures/Plans or user prompts. Assign inspections to specific users who can conduct the inspection",
      "Assign each inspection to a specific site or more than one site.",
      "Track inspection progress and results in real-time.",
      "Unsatisfactory Inspection results allow inspection staff to initiate Observations/NCRs and send them to the process owners.",
      "System maintains each inspection’s traceability with Relevant SSOW",
    ],
    icon: InspectIcon,
    image: Inspect,
    bgcolor: "linear-gradient(67deg, #3BA69B 40%, #A1C661 100%)",
  },
  {
    title: "Observations/NCRs",
    description: "Key Features",
    content: [
      "Initiate NCRs based on inspection findings.",
      "Categorize non-conformities for effective prioritization (Observation, Minor, Major).",
      "Identify and mention the individuals involved in unsafe work practices for further intervention",
      "Each Observation/NCR is traceable with the relevant inspection number",
    ],
    icon: ObserveIcon,
    image: NCR,
    bgcolor: "linear-gradient(67deg, #3BA69B 40%, #A1C661 100%)",
  },
  {
    title: "Corrective Actions",
    description: "Key Features",
    content: [
      "Propose AI-driven corrective actions based on root cause analysis.",
      "Assign tasks for implementation and track progress.",
      "Ensure non-conformities are timely resolved and documented for audits.",
      "Each Corrective action is traceable with the relevant Observation/NCR.",
    ],
    icon: CorrectIcon,
    image: Correct,
    bgcolor: "linear-gradient(67deg, #3BA69B 40%, #A1C661 100%)",
  },
  {
    title: "Emergency Preparedness and Response",
    description: "Key Features",
    content: [
      "Develop emergency plans with AI-generated checklists.",
      "Assign responsibilities for “rehearsals and drills” and Emergency preparedness arrangement inspections.",
      "Set inspections and rehearsal frequencies",
      "Measure the effectiveness of plans using AI generated KPIs after drills.",
    ],
    icon: EMIcon,
    image: EPR,
    bgcolor: "linear-gradient(67deg, #3BA69B 40%, #A1C661 100%)",
  },
  {
    title: "Incident Reporting",
    description: "Key Features",
    content: [
      "Structured forms for reporting various incidents (unsafe acts, near misses, accidents, ill-health cases, and dangerous occurrences).",
      "Categorize incidents by their nature and severity",
      "Automatically send incident reports to the decision-makers.",
      "Decision-maker/s can assign follow-up tasks.",
    ],
    icon: IncidentIcon,
    image: Incident,
    bgcolor: "linear-gradient(67deg, #3BA69B 40%, #A1C661 100%)",
  },
  {
    title: "Incident Investigation",
    description: "Key Features",
    content: [
      "Assign investigation teams and define roles.",
      "Conduct root cause analysis and document findings, recommendations and conclusions.",
      "Prepare detailed incident investigation reports with AI assistance.",
    ],
    icon: InvestIcon,
    image: Investigation,
    bgcolor: "linear-gradient(67deg, #3BA69B 40%, #A1C661 100%)",
  },
  {
    title: "Permit to Work (PTW)",
    description: "Key Features",
    content: [
      "Create and manage permits for high-risk activities (e.g., confined spaces, hot work).",
      "Define pre-work precautions and assign approval roles.",
      "Monitor PTW status in real time.",
    ],
    icon: WPIcon,
    image: PTW,
    bgcolor: "linear-gradient(67deg, #3BA69B 40%, #A1C661 100%)",
  },
  {
    title: "Assets and Calibration",
    description: "Key Features",
    content: [
      "Maintain a database of assets and their maintenance schedules.",
      "Track calibration frequencies and send reminders for due dates.",
      "Update asset status based on maintenance or calibration outcomes.",
    ],
    icon: AssetIcon,
    image: AC,
    bgcolor: "linear-gradient(67deg, #3BA69B 40%, #A1C661 100%)",
  },
  {
    title: "Resources Request",
    description: "Key Features",
    content: [
      "Request resources linked to risk assessments, corrective actions or incident investigation recommendations.",
      "Track approval and procurement progress.",
      "Monitor costs and ensure timely availability of required resources.",
    ],
    icon: ResourceIcon,
    image: RR,
    bgcolor: "linear-gradient(67deg, #3BA69B 40%, #A1C661 100%)",
  },
  {
    title: "Internal Audits",
    description: "Key Features",
    content: [
      "Create audit checklists with AI assistance.",
      "Assign auditors and track findings.",
      "Initiate Observations/NCRs as part of internal audit.",
      "Compile comprehensive audit reports with actionable insights using AI.",
    ],
    icon: AuditIcon,
    image: IA,
    bgcolor: "linear-gradient(67deg, #3BA69B 40%, #A1C661 100%)",
  },
  {
    title: "Tasks and Reminders",
    description: "Key Features",
    content: [
      "Assign tasks with deadlines.",
      "Monitor task progress in real time.",
      "Set reminders for the recurring tasks ",
    ],
    icon: RemindIcon,
    image: TR,
    bgcolor: "linear-gradient(67deg, #3BA69B 40%, #A1C661 100%)",
  },
  {
    title: "Employees Management",
    description: "Key Features",
    content: [
      "Maintain detailed employee records, including training and certifications.",
      "Maintain competence requirements for each role based on risk exposure",
      "Track expiring certifications and automate renewal reminders.",
      "Assign training or safety responsibilities as needed.",
      "Plan, schedule, and track training sessions.",
      "Automated notifications for overdue or upcoming training.",
      "Maintain a comprehensive training log for compliance.",
    ],
    icon: EmployeeIcon,
    image: EM,
    bgcolor: "linear-gradient(67deg, #3BA69B 40%, #A1C661 100%)",
  },
  {
    title: "Communication",
    description: "Key Features",
    content: [
      "Share safety updates, policies, lessons learned, etc.",
      "Send targeted messages to specific groups or individuals.",
      "Track communication history for transparency.",
    ],
    icon: ChatIcon,
    image: Commun,
    bgcolor: "linear-gradient(67deg, #3BA69B 40%, #A1C661 100%)",
  },
];

const Modules = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ Smooth scroll to top when component mounts
  }, []);

  const refs = useRef([]); // Initialize refs array

  return (
    <Box sx={{ bgcolor: "#ffffff", pb: { xs: 5, md: 10 } }}>
      {/* Hero Section */}
      <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundImage: `url(${privacy})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          textAlign: "center",
          px: { xs: 2, sm: 4, md: 6 },
          py: 6,
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
            zIndex: 1,
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            color: "#ffffff",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)", // Subtle text shadow
          }}
        >
          <Typography
            fontSize={{ xs: 18, sm: 24, md: 34 }}
            fontWeight="bold"
            px={{ xs: 2, sm: 6, md: 12, lg: 20 }}
          >
            <Box component="span" color="#96e0cc">
              17 Comprehensive Modules
            </Box>{" "}
            to cover Every
            <Box component="span" color="#68b9ba">
              {" "}
              Aspect of Health & Safety Management
            </Box>
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16, md: 22 }}
            fontWeight="bold"
            px={{ xs: 2, sm: 6, md: 12, lg: 20 }}
            mt={2}
          >
            Step into the future with DocRide—the smart, efficient way to
            safeguard your workplace from Health and Safety Risks.
          </Typography>

          <Button
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: "#E25E3E",
              color: "#ffffff",
              fontWeight: "bold",
              textTransform: "none",
              px: { xs: 3, sm: 4 },
              py: { xs: 1, sm: 2 },
              fontSize: { xs: "14px", sm: "16px" },
              "&:hover": {
                backgroundColor: "#c94b32",
              },
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>

      {/* Modules Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        {moduleData.map((module, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: false, margin: "-100px" });

          return (
            <motion.div
              ref={ref}
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -8 }} // Moves card slightly up on hover
              whileTap={{ scale: 0.98 }} // Slight press effect when tapped
              style={{ width: "100%" }}
            >
              <Card
                sx={{
                  borderRadius: "15px",
                  background:
                    "linear-gradient(180deg, #FFFFFF 0%, rgba(155, 215, 199, 0.43) 100%)",
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  justifyContent: "space-between",
                  maxWidth: "100%",
                  minHeight: { xs: "auto", md: "550px" }, // Responsive height
                  overflow: "hidden",
                  mb: 4,
                }}
              >
                {/* Module Image (On Small Screens: Image on Top, Content Below) */}
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    minHeight: { xs: "250px", md: "550px" }, // Ensures equal height
                    order: { xs: 1, md: 2 }, // Switches order on small screens
                  }}
                >
                  <img
                    src={module.image}
                    alt={module.title}
                    style={{
                      width: "100%",
                      maxWidth: "600px", // Increased size
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "85px",
                    }}
                  />
                </Box>

                {/* Module Content */}
                <CardContent
                  sx={{
                    flex: 1,
                    textAlign: "left",
                    px: { xs: 2, sm: 4, md: 5 }, // Adjust padding for different screens
                    py: { xs: 2, sm: 3, md: 4 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100%", // Ensure same height
                    order: { xs: 2, md: 1 }, // Switch order on small screens
                  }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    gap={{ xs: 1.5, sm: 2, md: 3 }}
                    mb={{ xs: 1, sm: 2 }}
                  >
                    {/* Icon Box - Applies Background Color if Needed */}
                    <Box
                      sx={{
                        width: { xs: 60, sm: 70, md: 80 }, // Dynamic icon box size
                        height: { xs: 60, sm: 70, md: 80 },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "12px",
                        background: module.bgcolor
                          ? module.bgcolor
                          : "transparent",
                      }}
                    >
                      <img
                        src={module.icon}
                        alt="Module Icon"
                        width="60%"
                        height="60%"
                        style={{ objectFit: "contain" }} // Ensures proper image scaling
                      />
                    </Box>

                    <Box>
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{
                          color: "#1E626C",
                          fontSize: { xs: "18px", sm: "20px", md: "22px" }, // Responsive font size
                        }}
                      >
                        {module.title}
                      </Typography>
                      {/* Orange Line Below the Title */}
                      <Box
                        sx={{
                          width: { xs: "80px", sm: "100px" }, // Adjusts width for smaller screens
                          height: "4px",
                          bgcolor: "#E25E3E",
                          mt: 1,
                        }}
                      />
                    </Box>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "#333",
                      fontSize: { xs: "14px", sm: "16px", md: "18px" }, // Dynamic text size
                      ml: { xs: "8px", sm: "12px" },
                    }}
                  >
                    {module.description}
                  </Typography>

                  <Box component="ul" sx={{ mt: { xs: 1, sm: 2 } }}>
                    {module.content.map((point, i) => (
                      <Typography
                        key={i}
                        component="li"
                        sx={{
                          fontSize: { xs: "12px", sm: "14px", md: "16px" }, // Ensures text remains readable
                          color: "#444",
                          mb: { xs: 0.5, sm: 1 },
                        }}
                      >
                        {point}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </Container>
    </Box>
  );
};

export default Modules;

// import React, { useRef } from "react";
// import { Container, Typography, Box, Button } from "@mui/material";
// import { motion, useInView } from "framer-motion";
// import riskImage from "../../assets/modules/risk.png"; // Ensure correct path
// import riskIcon from "../../assets/modules/i1.png"; // Ensure correct path
// import privacy from "../../assets/privacy.jpg";

// const Modules = () => {
//   const refs = useRef([]); // Initialize refs array

//   return (
//     <Box sx={{ bgcolor: "#ffffff", pb: { xs: 5, md: 10 } }}>
//       <Box
//         sx={{
//           width: "100%",
//           height: "auto",
//           backgroundImage: `url(${privacy})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           position: "relative",
//           textAlign: "center",
//           px: { xs: 2, sm: 4, md: 6 },
//           py: 5,
//           "::before": {
//             content: '""',
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
//             zIndex: 1,
//           },
//         }}
//       >
//         <Box
//           sx={{
//             position: "relative",
//             zIndex: 2,
//             color: "#ffffff",
//             textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)", // Subtle text shadow
//           }}
//         >
//           <Typography
//             fontSize={{ xs: 20, sm: 28, md: 40 }}
//             fontWeight="bold"
//             px={{ xs: 2, sm: 6, md: 12, lg: 20 }}
//           >
//             <Box component="span" color="#96e0cc">
//               17 Comprehensive Modules
//             </Box>{" "}
//             to cover Every
//             <Box component="span" color="#68b9ba">
//               {" "}
//               Aspect of Health & Safety Management
//             </Box>
//           </Typography>

//           <Typography
//             fontSize={{ xs: 14, sm: 18, md: 24 }}
//             fontWeight="bold"
//             px={{ xs: 2, sm: 6, md: 12, lg: 20 }}
//             mt={2}
//           >
//             Step into the future with DocRide—the smart, efficient way to
//             safeguard your workplace from Health and Safety Risks.
//           </Typography>

//           <Button
//             variant="contained"
//             sx={{
//               mt: 3,
//               backgroundColor: "#E25E3E",
//               color: "#ffffff",
//               fontWeight: "bold",
//               textTransform: "none",
//               px: 4,
//               py: 2,
//               "&:hover": {
//                 backgroundColor: "#c94b32",
//               },
//             }}
//           >
//             Learn More
//           </Button>
//         </Box>
//       </Box>

//       {/* Dynamic Animated Sections */}
//       {moduleData.map((module, index) => {
//         const ref = useRef(null);
//         refs.current[index] = ref;
//         const isInView = useInView(ref, { once: false, margin: "-300px" });

//         return (
//           <Container
//             key={index}
//             maxWidth="xl"
//             sx={{
//               px: { xs: 2, sm: 4, md: 6, lg: "20px" },
//               py: { xs: 4, sm: 6, md: 8 },
//             }}
//           >
//             <motion.div
//               ref={ref}
//               initial={{ opacity: 0, x: -10 }} // Reduce movement on mobile
//               animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
//               transition={{ duration: 0.3, ease: "easeOut" }}
//               viewport={{ once: true, amount: 0.2 }} // Adjusted viewport settings
//             >
//               <Box
//                 sx={{
//                   display: "flex",
//                   backgroundColor: "transparent",
//                   backgroundImage:
//                     "linear-gradient(180deg,rgba(155, 215, 199, 0.43) 0%, #FFFFFF 100%)",
//                   borderRadius: "20px",
//                   flexDirection: { xs: "column", md: "row" },
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   gap: { xs: 3, md: 2 },
//                   p: { xs: 5, md: 5 },
//                   textAlign: "left",
//                   zIndex: 2,
//                 }}
//               >
//                 {/* Left Section */}
//                 <Box sx={{ flex: 1, maxWidth: { xs: "100%", md: "600px" } }}>
//                   <Box display="flex" alignItems="center" gap={2} mb={2}>
//                     <img
//                       src={module.icon}
//                       alt="Module Icon"
//                       width={150}
//                       height={150}
//                     />

//                     {/* Title with Orange Line Underneath */}
//                     <Box>
//                       <Typography
//                         variant="h4"
//                         fontWeight="bold"
//                         color="#1E626C"
//                         gutterBottom
//                         sx={{
//                           fontSize: { xs: 24, sm: 28, md: 36 },
//                           display: "block", // ✅ Ensures it takes full width
//                         }}
//                       >
//                         {module.title}
//                       </Typography>

//                       {/* Orange Line Directly Under the Title */}
//                       <Box
//                         sx={{
//                           width: "160px",
//                           height: "4px",
//                           bgcolor: "#E25E3E",
//                           mt: 1, // ✅ Adds space between title and line
//                         }}
//                       />
//                     </Box>
//                   </Box>

//                   <Typography
//                     variant="body1"
//                     color="#333"
//                     mb={3}
//                     sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}
//                   >
//                     {module.description}
//                   </Typography>

//                   <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
//                     {module.content.map((item, i) => (
//                       <Box
//                         component="li"
//                         key={i}
//                         sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2 }}
//                       >
//                         {item}
//                       </Box>
//                     ))}
//                   </Box>
//                 </Box>

//                 {/* Right Section - Image */}
//                 <motion.div
//                   initial={{ opacity: 0, x: 10 }} // Reduce movement on mobile
//                   animate={
//                     isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }
//                   }
//                   transition={{ duration: 0.6, ease: "easeOut" }}
//                   viewport={{ once: true, amount: 0.2 }} // Improved viewport settings
//                   style={{
//                     flex: 1,
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     width: "100%",
//                   }}
//                 >
//                   <img
//                     src={module.image}
//                     alt={module.title}
//                     style={{
//                       width: "100%",
//                       maxWidth: "750px",
//                       height: "auto",
//                       borderRadius: "20px",
//                     }}
//                   />
//                 </motion.div>
//               </Box>
//             </motion.div>
//           </Container>
//         );
//       })}
//     </Box>
//   );
// };

// export default Modules;
