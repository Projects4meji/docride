/* eslint-disable no-dupe-keys */
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import {
  Facebook,
  YouTube,
  Instagram,
  Twitter,
  LinkedIn,
} from "@mui/icons-material";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { blogs } from "../pages/Blogs";

const ISOAudit = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  const [blogPost, setBlogPost] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    const foundBlog = blogs.find((blog) => blog.id === 2); // hardcoded ID
    if (foundBlog) {
      setBlogPost(foundBlog);
    } else {
      setBlogPost(null);
    }
  }, []); // empty dependency array — this runs only once

  if (!blogPost) {
    return (
      <Container sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h4" color="error">
          Blog Not Found
        </Typography>
        <Button variant="contained" component={Link} to="/blog" sx={{ mt: 2 }}>
          Back to Blogs
        </Button>
      </Container>
    );
  }

  return (
    <>
      <Helmet>
        <title>
          ISO 45001 Auditor Guide | OHS Audit, Risk Assessment & Reporting
        </title>
        <meta
          name="description"
          content="Master the skills to become an effective ISO 45001 auditor. Learn how to evaluate OHS management systems, conduct audits, manage incident investigations, and ensure compliance with risk assessments and reporting protocols."
        />
        <meta
          name="keywords"
          content="ISO 45001, OHS management system, OHS audit, Risk assessment, Incident investigation, Incident reporting"
        />
      </Helmet>

      <Box sx={{ bgcolor: "#F8F8F8", minHeight: "100vh" }}>
        {/* Hero Section */}
        <Box
          sx={{
            bgcolor: "#1E626B",
            width: "100%",
            minHeight: { xs: "40vh", md: "50vh" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            px: { xs: 3, sm: 6, md: 10 },
            position: "relative",
          }}
        >
          <Container maxWidth="md">
            <Typography
              variant="h4"
              sx={{
                color: "#fff",
                fontWeight: "bold",
                mb: 1,
                fontSize: { xs: "24px", sm: "32px", md: "40px" }, // Responsive font size
                textAlign: { xs: "center", md: "left" }, // Centered on small screens
              }}
            >
              {blogPost.title}
            </Typography>

            {/* Author and Date Section */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" }, // Stacks on small screens
                alignItems: "center",
                justifyContent: { xs: "center", md: "left" }, // Centers text on small screens
                gap: 1,
                color: "#fff",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "14px", sm: "16px" }, // Responsive font size
                }}
              >
                by {blogPost.author}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "12px", sm: "14px" }, // Adjust text size
                  display: "flex",
                  alignItems: "center",
                }}
              >
                📅 {blogPost.date}
              </Typography>
            </Box>
          </Container>

          {/* Hero Image with Proper Scaling */}
          <Box
            sx={{
              width: { xs: "95%", sm: "80%", md: "50%" },
              height: { xs: "230px", sm: "300px", md: "550px" },
              borderRadius: "12px",
              boxShadow: 3,
              position: "absolute",
              bottom: { xs: "-180px", md: "-400px" },
              left: "50%",
              transform: "translateX(-50%)",
              overflow: "hidden",
              transition: "all 0.4s ease-in-out",
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
                background: "rgba(30, 98, 107, 0.3)",
                transition: "width 0.5s ease-in-out, left 0.5s ease-in-out",
              }}
            />
            <Box
              component="img"
              src={blogPost.image}
              alt={blogPost.title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
              }}
            />
          </Box>
        </Box>

        {/* Blog Content Section */}
        <Container
          maxWidth="md"
          sx={{
            mt: { xs: 8, md: 12 },
            pt: { xs: 15, md: 40 },
            pb: { xs: 5, md: 8 },
            textAlign: "left",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "24px", sm: "28px", md: "32px" },
              fontWeight: "bold",
              mb: 2,
            }}
          >
            Why should you focus on measuring the effectiveness?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              fontSize: { xs: "16px", sm: "18px" },
              color: "#484747",
              mb: 3,
            }}
          >
            As an auditor, your role is to evaluate the organization’s OH&S
            management system against ISO 45001 criteria, assessing both
            conformity (compliance with requirements) and effectiveness
            (achievement of intended outcomes). Efficiency, a critical aspect,
            involves evaluating resource use, such as human and material inputs
            for OHS controls, ensuring sustainability given business revenue
            constraints. According to recent industry reports, effective
            auditing can reduce workplace incidents by up to 30%.
          </Typography>
          {/* Quote Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row", md: "row" },
              alignItems: "flex-start",
              gap: 2,
              mt: 4,
              mb: 4,
              pl: { xs: 2, md: 8 },
            }}
          >
            {/* Divider Line */}
            <Box
              sx={{
                width: "3px",
                height: "auto",
                minHeight: "130px",
                bgcolor: "#1E626B",
                display: { xs: "none", md: "block" },
              }}
            />

            {/* Quote Text */}
            <Box sx={{ maxWidth: "90%" }}>
              <Typography
                variant="h6"
                sx={{
                  fontStyle: "italic",
                  fontSize: { xs: "18px", md: "20px" },
                  lineHeight: 1.6,
                }}
              >
                “ Vivamus aliquam quam mollis massa condimentum tempus. Maecenas
                sollicitudin felis sit amet sem mattis laoreet. Cras lacinia ac
                nisl non commodo. Fusce tincidunt laoreet elementum. In vel
                gravida arcu. ”
              </Typography>

              {/* Author Name */}
              <Typography variant="body2" sx={{ fontWeight: "bold", mt: 1 }}>
                • TONY NGUYEN, CEO OF AVITEX
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "22px", sm: "26px", md: "30px" },
              fontWeight: "bold",
              mb: 1,
            }}
          >
            Clarifying Audits vs. Inspections: A Core Distinction
          </Typography>
          {/* Blog Intro Text */}
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              fontSize: { xs: "16px", sm: "18px" },
              color: "#484747",
              mb: 4,
            }}
          >
            The distinction between audits and inspections is often muddled. The
            core difference is simple: inspections measure compliance, while
            audits measure effectiveness. For example, an inspection might use a
            checklist to verify risk controls over three months, marking “Yes”
            or “No” for conformance. If all checks pass, it shows compliance,
            but if an OHS incident occurs, like a worker injury despite
            conformance, an audit is needed. Audits dig deeper, assessing why
            processes failed, such as a risk assessment missing a major hazard,
            leading to revisions in risk assessments, safe systems of work
            (SSOW), or inspection checklists.
          </Typography>
          {/* Image & Text Layout */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Image Row (Side by Side on md and above) */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" }, // ✅ Stack on xs, side by side on md+
                gap: 3,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Left Image (Appears First on xs, Normal on md+) */}
              <Box
                sx={{
                  width: { xs: "100%", md: "48%" },
                  height: { xs: "auto", md: "300px" },
                  borderRadius: "10px",
                  boxShadow: 3,
                  overflow: "hidden",
                  position: "relative",
                  order: { xs: 1, md: 0 }, // ✅ Order 1 on xs, default on md+
                  "&:hover::after": {
                    animation: "moveOverlayLeft 1s ease-in-out",
                  },
                  "::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: "100%",
                    width: "100%",
                    height: "100%",
                    background: "rgba(30, 98, 107, 0.3)",
                    transition: "left 0.5s ease-in-out",
                  },
                  "&:hover::after": {
                    left: "0%",
                  },
                }}
              >
                <Box
                  component="img"
                  src={blogPost.contentimg1}
                  alt="AIimage"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    borderRadius: "10px",
                  }}
                />
              </Box>

              {/* Right Image (Appears Third on xs, Hidden on sm and below) */}
              <Box
                sx={{
                  width: { xs: "100%", md: "48%" },
                  height: { xs: "auto", md: "300px" },
                  borderRadius: "10px",
                  boxShadow: 3,
                  overflow: "hidden",
                  position: "relative",
                  order: { xs: 3, md: 0 }, // ✅ Order 3 on xs, default on md+
                  display: { xs: "none", sm: "none", md: "block" }, // ✅ Hide on xs and sm, show on md+
                  "&:hover::after": {
                    animation: "moveOverlayRight 1s ease-in-out",
                  },
                  "::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    right: "100%",
                    width: "100%",
                    height: "100%",
                    background: "rgba(30, 98, 107, 0.3)",
                    transition: "right 0.5s ease-in-out",
                  },
                  "&:hover::after": {
                    right: "0%",
                  },
                }}
              >
                <Box
                  component="img"
                  src={blogPost.contentimg2}
                  alt="AIimage"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    borderRadius: "10px",
                  }}
                />
              </Box>
            </Box>

            {/* Text Content (Appears Second on xs, Below Images on md+) */}
            <Box
              sx={{
                width: "100%",
                textAlign: "left",
                order: { xs: 2, md: 0 }, // ✅ Order 2 on xs, default on md+
                mt: { xs: 2, md: 4 }, // ✅ Add spacing below images
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.8,
                  fontSize: { xs: "16px", sm: "18px" },
                  color: "#484747",
                }}
              >
                To illustrate, consider a warehouse where forklifts are used. An
                inspector might check daily maintenance records, operator safety
                gear, and clear aisles, concluding compliance if all are
                satisfactory. However, if a forklift accident happens, an
                auditor would investigate why the system didn’t prevent it,
                perhaps finding that operator training was inadequate or
                maintenance checks missed critical faults. This distinction is
                crucial for auditors, as inspections are quantitative, ticking
                boxes, while audits are qualitative, evaluating system
                performance.
              </Typography>
            </Box>

            {/* Right Image (Appears Third on xs, Hidden on md+) */}
            <Box
              sx={{
                width: { xs: "100%", md: "48%" },
                height: { xs: "auto", md: "300px" },
                borderRadius: "10px",
                boxShadow: 3,
                overflow: "hidden",
                position: "relative",
                order: { xs: 3, md: 0 }, // ✅ Order 3 on xs, default on md+
                display: { xs: "block", md: "none" }, // ✅ Hide on md and above
                "&:hover::after": {
                  animation: "moveOverlayRight 1s ease-in-out",
                },
                "::after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  right: "100%",
                  width: "100%",
                  height: "100%",
                  background: "rgba(30, 98, 107, 0.3)",
                  transition: "right 0.5s ease-in-out",
                },
                "&:hover::after": {
                  right: "0%",
                },
              }}
            >
              <Box
                component="img"
                src={blogPost.contentimg2}
                alt="AIimage"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  borderRadius: "10px",
                }}
              />
            </Box>
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "22px", sm: "26px", md: "30px" },
              fontWeight: "bold",
              pt: 4,
            }}
          >
            Steps to Become an Effective and Efficient Auditor
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              fontSize: { xs: "16px", sm: "18px" },
              color: "#484747",
              mt: 1,
            }}
          >
            To excel as an ISO 45001 auditor, follow these steps, each tailored
            to enhance both effectiveness and efficiency, with practical
            examples for clarity:
          </Typography>

          {/* Effective and Efficient Auditor */}
          <Box sx={{ mt: 4 }}>
            {/* Step 1 checklist */}
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "18px", sm: "20px", md: "22px" },
                color: "#1E626C",
                mb: 1,
              }}
            >
              1. Understand the Auditee’s OHS Risk Profile
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "16px", sm: "18px" },
                color: "#484747",
                lineHeight: 1.7,
                mb: 2,
              }}
            >
              Familiarize yourself with the organization’s specific risks to
              determine procedures, record-keeping, competence requirements, and
              OHS risk controls, aiming for risks as low as reasonably
              practicable (ALARP). For instance, a chemical plant faces toxic
              substance risks, requiring detailed hazard controls, while an
              office might focus on ergonomic and psychological risks like
              repetitive strain or stress. This understanding shapes the audit’s
              depth and focus, ensuring relevance.
            </Typography>

            {/* Step 2 checklist */}
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "18px", sm: "20px", md: "22px" },
                color: "#1E626C",
                mb: 1,
              }}
            >
              2. Map the OHS Management System
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "16px", sm: "18px" },
                color: "#484747",
                lineHeight: 1.7,
                mb: 2,
              }}
            >
              Create a mental or visual map of how the organization manages
              preventive and reactive risk control strategies, ensuring a
              holistic view:
            </Typography>
            {/* Subpoints for Step 2 */}
            <Box sx={{}}>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "bold",
                  color: "#3A7B81",
                  fontSize: "18px",
                }}
              >
                ▸ Preventive Strategies
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  ml: 1.5,
                  color: "#555",
                  fontSize: "16px",
                  mb: 3,
                  pl: 1,
                }}
              >
                Assess if all activities are covered in activity-specific risk
                assessments, if identified hazards reflect actual foreseeable
                risks, if risks are correctly translated, if controls are
                adequate, if evidence shows controls are applied, if SSOW or
                method statements are available for workers and supervisors, if
                inspections ensure procedure adherence, if observations and
                non-conformities (NCRs) are identified, and if corrective
                actions address root causes effectively. For example, verify if
                a manufacturing plant’s risk assessment for machine operation
                includes all foreseeable hazards like pinch points and if
                workers follow SSOW.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "bold",
                  color: "#3A7B81",
                  fontSize: "18px",
                }}
              >
                ▸ Reactive Strategies
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  ml: 1.5,
                  color: "#555",
                  fontSize: "16px",
                  mb: 3,
                  pl: 1,
                }}
              >
                Evaluate systems for reporting and recording OHS incidents
                (e.g., near misses, unsafe acts, conditions, dangerous
                occurrences) and dealing with them (e.g., incident
                investigations, corrective actions). Review incident reports
                qualitatively, assessing findings, root causes, and
                recommendations against incident significance. For instance, if
                a near miss involved a forklift, check if the investigation
                identified operator training gaps and if corrective actions
                prevent recurrence.
              </Typography>
            </Box>

            {/* Step 3 checklist */}
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "18px", sm: "20px", md: "22px" },
                color: "#1E626C",
                mb: 1,
              }}
            >
              3. Design a Checklist for Efficiency and Effectiveness
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "16px", sm: "18px" },
                color: "#484747",
                lineHeight: 1.7,
                mb: 2,
              }}
            >
              Use a structured checklist to guide your audit, ensuring you cover
              all necessary areas efficiently. The checklist should include:
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#555",
                lineHeight: 1.7,
                mb: 3,
                pl: 3,
              }}
            >
              <strong>Criteria:</strong> Clause No., Look In (Document or
              Process), Look For, Specific Questions to Elicit Objective
              Evidence.
            </Typography>
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                  color: "#2E8C7B",
                  fontSize: "18px",
                  mb: 1,
                }}
              >
                ▸ Example for Preventive Strategies:
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#555", lineHeight: 1.7, pl: 3 }}
              >
                <strong>Criteria:</strong> Risk Assessments (Clause 6)
                <br />
                <strong>Look In:</strong> Risk assessment documents, employee
                interviews
                <br />
                <strong>Look For:</strong> Comprehensive hazard identification,
                accurate risk evaluation, appropriate controls
                <br />
                <strong>Specific Questions:</strong> How are risk assessments
                conducted? Who is involved? Can you show me a sample for a
                high-risk activity? How are controls implemented and monitored?
              </Typography>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                  color: "#2E8C7B",
                  fontSize: "18px",
                  mb: 1,
                }}
              >
                ▸ Example for Reacttive Strategies:
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#555", lineHeight: 1.7, pl: 3 }}
              >
                <strong>Criteria:</strong> Incident Reporting and Investigation
                (Clause 10)
                <br />
                <strong>Look In:</strong> Incident reports, investigation
                records
                <br />
                <strong>Look For:</strong> Timely reporting, thorough
                investigations, effective corrective actions
                <br />
                <strong>Specific Questions:</strong> What is the process for
                reporting incidents? Can I see some incident reports and
                investigations? How are corrective actions tracked?
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "16px", sm: "18px" },
                color: "#484747",
                lineHeight: 1.7,
                mb: 2,
              }}
            >
              This checklist ensures you elicit objective evidence, making
              audits efficient and thorough.
            </Typography>

            {/* Step 4 checklist */}
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "18px", sm: "20px", md: "22px" },
                color: "#1E626C",
                mb: 1,
              }}
            >
              4. Measure Conformity and Effectiveness:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "16px", sm: "18px" },
                color: "#484747",
                lineHeight: 1.7,
                mb: 2,
              }}
            >
              Conformity is about meeting ISO 45001 requirements, quantifiable
              through metrics like the number of inspections conducted or NCRs
              closed. Effectiveness, however, requires qualitative review,
              focusing on outcomes like incident reduction or system
              responsiveness. For example, a company may conform by conducting
              inspections and taking corrective actions, but effectiveness is
              gauged by reviewing CA records. If an NCR states, “Worker moved
              under suspended load violating SSOW,” and the root cause is
              “Worker unaware of SSOW,” but corrective action is just providing
              the SSOW, it misses the systemic lapse (e.g., inadequate induction
              training). Audits issue NCRs for missing or incomplete procedures
              and observations for ineffective processes, ensuring a balanced
              approach.
            </Typography>
          </Box>

          {/* Contact Section */}
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              borderRadius: "30px",
              alignItems: "center",
              justifyContent: "space-around",
              bgcolor: "#0d474d",
              color: "white",
              textAlign: { xs: "center", md: "left" },
              py: { xs: 4, md: 6 },
              px: { xs: 2 },
              mt: 4,
            }}
          >
            {/* Text Section */}
            <Typography
              sx={{
                fontSize: { xs: "24px", sm: "30px", md: "40px" },
                maxWidth: { xs: "100%", md: "60%" },
                mb: { xs: 3, md: 0 },
              }}
            >
              Develop and Deploy your{" "}
              <span style={{ color: "#1DA196" }}>ISO 45001</span> compliant{" "}
              <span style={{ color: "#68B9BA" }}>OHS Management System</span>{" "}
              with 10X speed using AI
            </Typography>

            {/* Contact Button */}
            <Button
              variant="contained"
              component={Link}
              to="/"
              sx={{
                background: "linear-gradient(to right, #66C2A5, #2C8A7A)",
                borderRadius: "30px",
                padding: { xs: "10px 24px", sm: "12px 32px" },
                fontSize: { xs: "14px", sm: "18px" },
                textTransform: "none",
                border: "2px solid #2C8A7A",
                transition: "all 0.4s ease-in-out",
                "&:hover": {
                  background: "#032C34",
                  border: "2px solid #2C8A7A",
                  color: "#ffffff",
                },
              }}
            >
              Let's Go
            </Button>
          </Box>

          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "22px", sm: "26px", md: "30px" },
              fontWeight: "bold",
              pt: 4,
              mb: 2,
            }}
          >
            Measuring Efficiency and Effectiveness: Why They Matter
          </Typography>
          <Box sx={{}}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: "#3A7B81",
                fontSize: "18px",
              }}
            >
              ▸ Efficiency:
            </Typography>
            <Typography
              variant="body2"
              sx={{
                ml: 1.5,
                color: "#555",
                fontSize: "16px",
                mb: 3,
                pl: 1,
              }}
            >
              Refers to optimal resource use for OHS, such as human resources
              (staff time) and material resources (safety equipment).
              Inefficient systems can drain resources, impacting the
              organization’s sustainability, especially given business revenue
              constraints. For example, if a company spends more on OHS training
              without improved performance, it’s less efficient. Auditors can
              review budgets, expenditures, and resource allocation, checking
              for waste or optimization, like benchmarking against industry
              standards. Efficiency ensures OHS doesn’t compromise
              profitability, aligning with business goals.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: "#3A7B81",
                fontSize: "18px",
              }}
            >
              ▸ Effectiveness:
            </Typography>
            <Typography
              variant="body2"
              sx={{
                ml: 1.5,
                color: "#555",
                fontSize: "16px",
                mb: 3,
                pl: 1,
              }}
            >
              The core reason for OHS systems is to protect workers from hazards
              and risks. Audits measure how well the system achieves this,
              focusing on qualitative outcomes like incident trends, worker
              engagement, and system responsiveness. For instance, assess if
              risk assessments prevent incidents by reviewing incident rates or
              if corrective actions stop NCR recurrence, ensuring the system
              evolves. Effectiveness is about outcomes, not just processes,
              ensuring worker safety is prioritized.
            </Typography>
          </Box>

          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "22px", sm: "26px", md: "30px" },
              fontWeight: "bold",
              pt: 4,
              mb: 2,
            }}
          >
            Common Challenges and How to Overcome Them
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "16px", sm: "18px" },
              color: "#484747",
              lineHeight: 1.7,
              mb: 2,
            }}
          >
            Auditors face pitfalls, but with specific examples, these can be
            navigated:
          </Typography>
          <Box sx={{}}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: "#3A7B81",
                fontSize: "18px",
              }}
            >
              ▸ Focusing Only on Documentation:
            </Typography>
            <Typography
              variant="body2"
              sx={{
                ml: 1.5,
                color: "#555",
                fontSize: "16px",
                mb: 3,
                pl: 1,
              }}
            >
              Don’t just review papers; observe practices. For instance, a
              documented SSOW for machine guarding is useless if workers bypass
              guards—observe to verify.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: "#3A7B81",
                fontSize: "18px",
              }}
            >
              ▸ Lack of Objectivity:
            </Typography>
            <Typography
              variant="body2"
              sx={{
                ml: 1.5,
                color: "#555",
                fontSize: "16px",
                mb: 3,
                pl: 1,
              }}
            >
              Stay impartial; don’t let auditee pressure sway you. If they claim
              all risks are controlled, verify with worker interviews.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: "#3A7B81",
                fontSize: "18px",
              }}
            >
              ▸ Insufficient Sampling:
            </Typography>
            <Typography
              variant="body2"
              sx={{
                ml: 1.5,
                color: "#555",
                fontSize: "16px",
                mb: 3,
                pl: 1,
              }}
            >
              Ensure broad coverage. If auditing a multi-site firm, sample
              high-risk sites like construction areas, not just offices.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: "#3A7B81",
                fontSize: "18px",
              }}
            >
              ▸ Not Understanding Context:
            </Typography>
            <Typography
              variant="body2"
              sx={{
                ml: 1.5,
                color: "#555",
                fontSize: "16px",
                mb: 3,
                pl: 1,
              }}
            >
              Tailor to the auditee. A chemical plant needs detailed hazard
              controls, while a retail store focuses on slip risks.F
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: "#3A7B81",
                fontSize: "18px",
              }}
            >
              ▸ Poor Communication:
            </Typography>
            <Typography
              variant="body2"
              sx={{
                ml: 1.5,
                color: "#555",
                fontSize: "16px",
                mb: 3,
                pl: 1,
              }}
            >
              Ask clear questions to gather evidence, like, “How do you ensure
              workers follow SSOW?” not vague queries like “Is safety good?”
            </Typography>
          </Box>

          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "22px", sm: "26px", md: "30px" },
              fontWeight: "bold",
              pt: 4,
              mb: 2,
            }}
          >
            Conclusion
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "16px", sm: "18px" },
              color: "#484747",
              lineHeight: 1.7,
              mb: 2,
            }}
          >
            Becoming an effective and efficient ISO 45001 auditor requires a
            deep understanding of the standard, the ability to differentiate
            between auditing and inspecting, and a systematic approach to
            evaluating both conformity and effectiveness. By following these
            steps, using checklists, and overcoming challenges with practical
            tips, you can ensure your auditing practices are robust,
            contributing positively to organizational safety and efficiency.
            This guide is your roadmap to mastering ISO 45001 auditing, ensuring
            worker protection and business sustainability.
          </Typography>
        </Container>

        {/* Divider Line */}
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              width: "200px",
              height: "3px",
              minWidth: "30px",
              bgcolor: "#FF9500",
            }}
          />
        </Container>

        {/* Author Section */}
        <Container
          maxWidth="md"
          sx={{ textAlign: "left", mt: { xs: 6, md: 8 } }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              gap: 2,
              p: 2,
              borderRadius: "10px",
              bgcolor: "#F8F8F8",
            }}
          >
            {/* Author Avatar */}
            <Box
              sx={{
                width: { xs: 50, sm: 60 },
                height: { xs: 50, sm: 60 },
                borderRadius: "50%",
                bgcolor: "#E5DFF8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: { xs: "20px", sm: "24px" },
                fontWeight: "bold",
                color: "#5A4FCF",
                textTransform: "uppercase",
              }}
            >
              A {/* Replace with dynamic author initial */}
            </Box>

            {/* Author Details */}
            <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "16px", sm: "18px" },
                }}
              >
                Name of Author
              </Typography>
              <Typography variant="body2" sx={{ color: "#777", mb: 1 }}>
                COMPANY TITLE
              </Typography>

              {/* More from Author Link */}
              <Typography
                variant="body2"
                sx={{
                  textDecoration: "underline",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", sm: "left" },
                  cursor: "pointer",
                  "&:hover": { color: "#1E626B" },
                }}
              >
                More from this Author &nbsp; ▶
              </Typography>
            </Box>
          </Box>

          {/* Blog Navigation & Social Sharing Section */}
          <Box
            sx={{
              mt: { xs: 5, md: 6 },
              pt: { xs: 2, md: 3 },
              textAlign: "center",
            }}
          >
            {/* Social Sharing */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                justifyContent: "right",
                gap: 2,
                mb: 3,
              }}
            >
              {/* Copy Link Button */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #000",
                  borderRadius: "20px",
                  height: "40px",
                  padding: "0 12px",
                  fontSize: "14px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  "&:hover": { bgcolor: "#f1f1f1" },
                }}
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copied to clipboard!");
                }}
              >
                Copy the link
              </Box>

              {/* Social Media Icons */}
              <Box sx={{ display: "flex", justifyContent: "center", gap: 1.5 }}>
                {[
                  { icon: <Facebook />, url: "https://www.facebook.com" },
                  { icon: <YouTube />, url: "https://www.youtube.com" },
                  { icon: <Instagram />, url: "https://www.instagram.com" },
                  { icon: <Twitter />, url: "https://www.twitter.com" },
                  { icon: <LinkedIn />, url: "https://www.linkedin.com" },
                ].map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      border: "1px solid #1E626B",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      cursor: "pointer",
                      transition: "0.3s",
                      "&:hover": { bgcolor: "#1E626B", color: "#fff" },
                    }}
                    onClick={() => window.open(item.url, "_blank")}
                  >
                    {item.icon}
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Gray Divider */}
            <Box
              sx={{
                width: "auto",
                height: "2px",
                bgcolor: "#E0E0E0",
              }}
            />

            {/* ✅ Next & Previous Navigation */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center", // ✅ Ensures vertical centering
                my: 3,
              }}
            >
              {blogPost.id > 1 ? (
                <Button
                  variant="text"
                  onClick={() => {
                    navigate(`/blog/${blogPost.id - 1}`);
                    window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ Scroll to top
                  }}
                  sx={{
                    fontWeight: "bold",
                    color: "#6BBBBB",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  ← Previous Blog
                </Button>
              ) : (
                <Box sx={{ opacity: 0.5, pointerEvents: "none" }}>
                  ← Previous Blog
                </Box>
              )}

              {blogPost.id < blogs.length ? (
                <Button
                  variant="text"
                  onClick={() => {
                    navigate(`/blog/${blogPost.id + 1}`);
                    window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ Scroll to top
                  }}
                  sx={{
                    fontWeight: "bold",
                    color: "#6BBBBB",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Next Blog →
                </Button>
              ) : (
                <Box sx={{ opacity: 0.5, pointerEvents: "none" }}>
                  Next Blog →
                </Box>
              )}
            </Box>

            {/* Gray Divider */}
            <Box
              sx={{
                width: "auto",
                height: "2px",
                bgcolor: "#E0E0E0",
              }}
            />
          </Box>

          {/* Comment Form Section */}
          <Container sx={{ py: 6 }}>
            <Box
              sx={{
                background: "linear-gradient(to right, #96E0CC, #68B9BA)",
                borderRadius: "12px",
                maxWidth: "900px",
                mx: "auto",
                pt: 4,
                p: { xs: 2, sm: 4 },
              }}
            >
              {/* Form Heading */}
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{
                  color: "#ffffff",
                  fontSize: { xs: "20px", sm: "24px" },
                  mb: 3,
                  textAlign: "center",
                }}
              >
                Leave a Comment
              </Typography>

              <Box component="form" sx={{ mt: 2 }}>
                {/* Name & Email Fields */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    mb: 3,
                  }}
                >
                  <TextField
                    fullWidth
                    required
                    label="Name"
                    variant="outlined"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{ bgcolor: "white", borderRadius: "6px" }}
                  />

                  <TextField
                    fullWidth
                    required
                    type="email"
                    label="Email"
                    variant="outlined"
                    placeholder="@mail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ bgcolor: "white", borderRadius: "6px" }}
                  />
                </Box>

                {/* Comment Field */}
                <TextField
                  fullWidth
                  required
                  label="Comment"
                  variant="outlined"
                  multiline
                  rows={4}
                  placeholder="Write Comment..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  sx={{ bgcolor: "white", borderRadius: "6px", mb: 3 }}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    background: "linear-gradient(to right, #73C7AD, #3A7B81)",
                    borderRadius: "30px",
                    color: "white",
                    fontSize: "16px",
                    py: 1,
                    "&:hover": {
                      background: "#2C8A7A",
                    },
                  }}
                >
                  Submit Comment
                </Button>
              </Box>
            </Box>
          </Container>
        </Container>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-around",
            bgcolor: "#0d474d",
            color: "white",
            textAlign: { xs: "center", md: "left" },
            py: { xs: 4, md: 6 },
            px: { xs: 2, sm: 4, md: 32 },
            mt: 4,
          }}
        >
          {/* Text Section */}
          <Typography
            sx={{
              fontSize: { xs: "24px", sm: "30px", md: "40px" },
              maxWidth: { xs: "100%", md: "60%" },
              mb: { xs: 3, md: 0 },
            }}
          >
            Looking for <span style={{ color: "#1DA196" }}>Safety</span> and{" "}
            <span style={{ color: "#68B9BA" }}>Health</span> Assistance?
          </Typography>

          {/* Contact Button */}
          <Button
            variant="contained"
            component={Link}
            to="/contact"
            sx={{
              background: "linear-gradient(to right, #66C2A5, #2C8A7A)",
              borderRadius: "30px",
              padding: { xs: "10px 24px", sm: "12px 32px" },
              fontSize: { xs: "14px", sm: "18px" },
              textTransform: "none",
              border: "2px solid #2C8A7A",
              transition: "all 0.4s ease-in-out",
              "&:hover": {
                background: "#032C34",
                border: "2px solid #2C8A7A",
                color: "#ffffff",
              },
            }}
          >
            Contact
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ISOAudit;
