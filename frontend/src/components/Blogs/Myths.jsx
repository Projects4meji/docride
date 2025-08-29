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

const Myths = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    const foundBlog = blogs.find((blog) => blog.id === 4); // hardcoded ID
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
          ISO 45001 Myths Debunked | Truth About OHS Management Systems
        </title>
        <meta
          name="description"
          content="Explore and debunk common myths about ISO 45001. Understand what the OHS management system really requires and how it applies to businesses of all sizes."
        />
        <meta name="keywords" content="ISO 45001, OHS management system" />
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
            Separating Fact from Fiction
            <br /> Common Misconceptions About ISO 45001
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
            ISO 45001, the international standard for occupational health and
            safety, often gets a bad rap thanks to swirling myths and
            misconceptions. Whether you’re a small business owner or manage a
            sprawling corporation, these misunderstandings can make you hesitant
            to pursue certification. In this article, I’m diving deep into the
            myths surrounding ISO 45001, using specific examples to set the
            record straight. We’re not here to sell you on the benefits; those
            will come in another piece, but to clear the fog around what this
            standard really means. Let’s bust some myths and reveal the truth
            about ISO 45001 certification.
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "24px", sm: "28px", md: "32px" },
              fontWeight: "bold",
              mb: 2,
            }}
          >
            Clearing Up Common Misconceptions
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
            Misconceptions about ISO 45001 can stop businesses in their tracks
            before they even start. From assumptions about cost to confusion
            over its scope, these myths often exaggerate the challenges of
            implementation. Below, we tackle the most common ones head-on with
            real-world examples tailored to ISO 45001, the go-to standard for
            occupational health and safety.
          </Typography>
          <Box sx={{}}>
            {/* Myth 1 */}
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: "#3A7B81",
                fontSize: "18px",
              }}
            >
              ▸ Myth 1: ISO 45001 Certification Guarantees Product Safety
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
              A common misunderstanding is that ISO 45001 certification ensures
              that the products a company produces are safe for customers. This
              is not true. ISO 45001 is specifically focused on occupational
              health and safety, meaning it protects the workers involved in
              production, not the quality or safety of the products themselves.
            </Typography>
            <Box sx={{ pl: 1, color: "#555" }}>
              <ul style={{ marginTop: 0, paddingLeft: "1.5rem" }}>
                <li>
                  <strong>Why it’s false:</strong> ISO 45001 aims to create a
                  safe working environment by addressing workplace hazards such
                  as unsafe machinery, poor ergonomics, or risky procedures. It
                  does not cover product design, manufacturing quality, or
                  consumer safety, which are managed by other standards like ISO
                  9001 for quality management. The confusion often stems from
                  the word "safety" in the standard’s title, but its scope is
                  limited to the well-being of employees, not the reliability or
                  safety of what they produce.
                </li>
              </ul>
            </Box>

            {/* Myth 2 */}
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: "#3A7B81",
                fontSize: "18px",
              }}
            >
              ▸ Myth 2: ISO 45001 Will Just Add Documentation Burden with No
              Real Impact
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
              Many skeptics claim that ISO 45001 is nothing more than a tedious
              paperwork exercise with little practical benefit. This is
              incorrect. The standard does not require excessive
              documentation—only evidence of conformance, which businesses often
              already maintain for legal or operational purposes. It provides a
              structured framework to enhance occupational health and safety
              management.
            </Typography>
            <Box sx={{ pl: 1, color: "#555" }}>
              <ul style={{ marginTop: 0, paddingLeft: "1.5rem" }}>
                <li>
                  <strong>Why it’s false:</strong> ISO 45001 focuses on
                  documenting what is necessary to demonstrate that safety
                  processes are in place and effective, such as risk assessments
                  or incident logs. It does not mandate recording every minor
                  detail. Far from being a pointless burden, the standard
                  organizes existing safety efforts into a systematic approach
                  that helps identify weaknesses, prevent incidents, and improve
                  overall workplace safety. The myth overlooks how this
                  structure adds value by making safety management more
                  efficient and proactive.
                </li>
              </ul>
            </Box>

            {/* Myth 3 */}
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: "#3A7B81",
                fontSize: "18px",
              }}
            >
              ▸ Myth 3: If We Are Certified, We Can Put the ISO Logo on Our
              Product or Website
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
              Many organizations believe that once they achieve ISO
              certification, they can freely display the ISO logo on their
              products, website, or marketing materials to showcase their
              accomplishment. However, this is a common misunderstanding.
            </Typography>
            <Box sx={{ pl: 1, color: "#555" }}>
              <ul style={{ marginTop: 0, paddingLeft: "1.5rem" }}>
                <li>
                  <strong>Why it’s false:</strong> ISO certification
                  demonstrates that an organization meets the requirements of a
                  specific standard, such as ISO 9001 for quality management or
                  ISO 45001 for occupational health and safety. However, the ISO
                  logo is a registered trademark, and its use is tightly
                  regulated by ISO itself. Certified organizations are not
                  permitted to use the ISO logo for promotional purposes.
                  Instead, they should use the logo of the certification body
                  that audited and certified them. This ensures transparency
                  about who verified their compliance and protects the
                  credibility of the ISO brand. Unauthorized use of the ISO logo
                  can lead to legal consequences and confusion about the
                  certification process. To correctly communicate their
                  certified status, organizations should consult their
                  certification body for guidance on appropriate branding.
                </li>
              </ul>
            </Box>

            {/* Myth 4 */}
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: "#3A7B81",
                fontSize: "18px",
              }}
            >
              ▸ Myth 4: ISO 45001 Is Only for Large Organizations
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
              Some believe that ISO 45001 is exclusively for large corporations
              with extensive resources and personnel. This is a misconception.
              The standard is intentionally scalable, making it suitable for
              organizations of any size, from small businesses to global
              enterprises.
            </Typography>
            <Box sx={{ pl: 1, color: "#555" }}>
              <ul style={{ marginTop: 0, paddingLeft: "1.5rem" }}>
                <li>
                  <strong>Why it’s false:</strong> ISO 45001 is designed with
                  flexibility in mind, allowing companies to adapt its
                  requirements to their specific scale and risks. It does not
                  demand complex systems or large budgets; instead, it can be
                  implemented with simple, practical measures tailored to an
                  organization’s needs. For instance, a small business might
                  focus on basic safety checks, while a larger firm might
                  integrate more detailed processes. The myth arises from the
                  assumption that international standards are inherently
                  complex, but ISO 45001’s adaptability disproves this.
                </li>
              </ul>
            </Box>
          </Box>

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
                mt: { xs: 2 }, // ✅ Add spacing below images
              }}
            >
              {/* Myth 5 */}
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "bold",
                  color: "#3A7B81",
                  fontSize: "18px",
                }}
              >
                ▸ Myth 5: Implementing ISO 45001 Is Too Expensive and
                Time-Consuming
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
                The perception that implementing ISO 45001 requires prohibitive
                costs and time often deters organizations. While there is an
                initial investment, this myth exaggerates the effort needed.
                With strategic planning, implementation can be both affordable
                and efficient.
              </Typography>
              <Box sx={{ pl: 1, color: "#555" }}>
                <ul style={{ marginTop: 0, paddingLeft: "1.5rem" }}>
                  <li>
                    <strong>Why it’s false:</strong> The costs of ISO 45001—such
                    as training, audits, or system setup—are manageable when
                    businesses build on existing safety practices rather than
                    starting from scratch. The standard encourages using
                    resources already in place, minimizing additional expenses.
                    Moreover, the long-term benefits, like reduced
                    accident-related costs, lower insurance premiums, and
                    improved productivity, often offset the upfront investment.
                    The myth fails to account for these practical efficiencies
                    and the value of a safer workplace over time.
                  </li>
                </ul>
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
                  my: 4,
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
                  <span style={{ color: "#68B9BA" }}>
                    OHS Management System
                  </span>{" "}
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

              {/* Myth 6 */}
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "bold",
                  color: "#3A7B81",
                  fontSize: "18px",
                }}
              >
                ▸ Myth 6: Certification Means Perfect Safety Records
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
                Many assume that ISO 45001 certification guarantees a workplace
                with no accidents or safety incidents. This is not the case. The
                standard is about establishing a system for managing and
                improving safety, not achieving an unattainable perfect record.
              </Typography>
              <Box sx={{ pl: 1, color: "#555" }}>
                <ul style={{ marginTop: 0, paddingLeft: "1.5rem" }}>
                  <li>
                    <strong>Why it’s false:</strong> ISO 45001 provides a
                    framework for identifying hazards, reducing risks, and
                    responding to incidents effectively, but it does not
                    eliminate all possibility of accidents. No workplace can be
                    entirely risk-free due to human error, equipment failure, or
                    unforeseen events. The standard’s goal is continuous
                    improvement—ensuring that safety processes evolve and
                    strengthen over time. This myth misrepresents certification
                    as a promise of perfection, when it’s really about ongoing
                    risk management and progress.
                  </li>
                </ul>
              </Box>

              {/* Myth 7 */}
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "bold",
                  color: "#3A7B81",
                  fontSize: "18px",
                }}
              >
                ▸ Myth 7: You Need to Document Everything to Get Certified
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
                Fear of overwhelming paperwork fuels the idea that ISO 45001
                requires documenting every single action or process. In reality,
                the standard only calls for specific, relevant records, not an
                exhaustive paper trail.
              </Typography>
              <Box sx={{ pl: 1, color: "#555" }}>
                <ul style={{ marginTop: 0, paddingLeft: "1.5rem" }}>
                  <li>
                    <strong>Why it’s false:</strong> ISO 45001 specifies
                    documentation that proves the safety management system is
                    functioning—like training records, audit findings, or risk
                    evaluations—but leaves flexibility for organizations to
                    determine what’s essential based on their operations. The
                    focus is on quality, not quantity, ensuring that records
                    support effective safety management without unnecessary
                    excess. The myth exaggerates the requirements, assuming a
                    bureaucratic overload that the standard deliberately avoids.
                  </li>
                </ul>
              </Box>
            </Box>

            {/* Right Image (Appears Third on xs, Hidden on md+) */}
            <Box
              sx={{
                width: { xs: "100%", md: "48%" },
                height: { xs: "auto", md: "300px" },
                borderRadius: "10px",
                mb: 4,
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
          {/* Myth 8 */}
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              color: "#3A7B81",
              fontSize: "18px",
            }}
          >
            ▸ Myth 8: ISO 45001 Is Only for High-Risk Industries
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
            This myth suggests that ISO 45001 is relevant only to industries
            with obvious dangers, like construction or manufacturing. However,
            the standard applies to any organization, regardless of its risk
            profile, because workplace hazards exist everywhere.
          </Typography>
          <Box sx={{ pl: 1, color: "#555" }}>
            <ul style={{ marginTop: 0, paddingLeft: "1.5rem" }}>
              <li>
                <strong>Why it’s false:</strong> ISO 45001 addresses
                occupational health and safety risks, which are present in all
                work environments, not just high-risk ones. In addition to
                physical hazards like heavy machinery, it covers subtler risks
                such as repetitive strain injuries, workplace stress, or slips
                and falls, which can occur in offices, retail spaces, or other
                "low-risk" settings. The standard’s broad applicability ensures
                that every organization can benefit from a systematic approach
                to safety, debunking the idea that it’s limited to certain
                sectors.
              </li>
            </ul>
          </Box>

          {/* Myth 9 */}
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              color: "#3A7B81",
              fontSize: "18px",
            }}
          >
            ▸ Myth 9: Certification Is a One-Time Event with No Ongoing
            Requirements
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
            Some think that once ISO 45001 certification is achieved, the work
            is done. This is a fantasy. Maintaining certification requires
            continuous effort, including regular audits and improvements.
          </Typography>
          <Box sx={{ pl: 1, color: "#555" }}>
            <ul style={{ marginTop: 0, paddingLeft: "1.5rem" }}>
              <li>
                <strong>Why it’s false:</strong> ISO 45001 is built on the
                principle of continual improvement, meaning that certification
                is not a static achievement but an ongoing commitment.
                Organizations must conduct internal audits, undergo external
                surveillance audits, and update their safety systems to address
                new risks or regulatory changes. This ensures that safety
                remains effective and relevant over time. The myth of a one-time
                effort ignores the dynamic, living nature of the standard, which
                drives sustained safety performance.
              </li>
            </ul>
          </Box>
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

export default Myths;
