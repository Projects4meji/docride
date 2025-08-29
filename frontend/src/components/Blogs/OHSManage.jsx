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

const OHSManage = () => {
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
    const foundBlog = blogs.find((blog) => blog.id === 1); // hardcoded ID
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
        <title>OHS Management System & ISO 45001 Record-Keeping Guide</title>
        <meta
          name="description"
          content="Learn why record-keeping is essential in an OHS management system. Explore how ISO 45001 helps improve safety through audits, compliance, and data-driven decisions."
        />
        <meta
          name="keywords"
          content="ISO 45001, OHS management system, Online ohs management, AI based ohs management, Incident reporting, Risk assessment, Ohs audit, Ohs legal requirements, Paperless ohs management"
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
            Health and Safety Records: Burden or Lifeline?
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
            This simple idea is key to workplace safety. For health and safety,
            it means tracking things like accident rates or safety training to
            make work safer. But how do you do that? You need an OHS management
            system.
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
                minHeight: "60px",
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
                  fontSize: { xs: "18px", md: "34px" },
                  lineHeight: 1.6,
                }}
              >
                “ If you can measure it, you can improve it. ”
              </Typography>
            </Box>
          </Box>

          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              fontSize: { xs: "16px", sm: "18px" },
              color: "#484747",
              mb: 3,
            }}
          >
            An OHS management system is a plan that says who does what, when,
            where, and how to keep workers safe. It’s like a roadmap for safety,
            covering:
          </Typography>
          <Box sx={{ pl: 3, color: "#555" }}>
            <ul style={{ marginTop: 0, paddingLeft: "1.5rem" }}>
              <li>
                <strong>Who:</strong> Top managers set safety goals, safety
                officers handle daily tasks, and workers follow rules.
              </li>
              <li>
                <strong>What:</strong> Identify hazards, assess risks, put
                controls in place, and keep improving.
              </li>
              <li>
                <strong>When:</strong> Regular safety checks happen weekly, risk
                assessments yearly, and training as needed.
              </li>
              <li>
                <strong>Where:</strong> Safety applies everywhere, from factory
                floors to office desks.
              </li>
              <li>
                <strong>How:</strong> Use inspections, training sessions, and
                incident reports to manage safety.
              </li>
            </ul>
          </Box>

          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              fontSize: { xs: "16px", sm: "18px" },
              color: "#484747",
              mb: 3,
            }}
          >
            Without this system, safety efforts can be messy and inconsistent,
            leading to more accidents. For example, a construction site without
            a system might have random safety talks, resulting in frequent
            falls. With a system, they’d have clear rules, regular checks, and
            fewer incidents.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "22px", sm: "26px", md: "30px" },
              fontWeight: "bold",
              mb: 1,
            }}
          >
            The Importance of Record-Keeping
          </Typography>
          {/* Blog Intro Text */}
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              fontSize: { xs: "16px", sm: "18px" },
              color: "#484747",
              mb: 2,
            }}
          >
            Records are the backbone of this system. They help in two ways:
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
              ▸ Improving Safety:
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
              By keeping records of incidents, inspections, and training,
              businesses can spot patterns. Say a warehouse notices many slips
              on wet floors from records; they can fix it with better mats,
              cutting accidents by 50%.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: "#3A7B81",
                fontSize: "18px",
              }}
            >
              ▸ Proving Compliance:
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
              Records like risk assessments and training logs show regulators
              the business follows laws. During an audit, a manufacturing
              plant’s records proved they trained workers on machine safety,
              avoiding fines.
            </Typography>
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
                For instance, a plant kept detailed machine maintenance logs
                and, when a rare failure caused an injury, records showed recent
                checks, helping identify the issue quickly. Another time, during
                a legal claim, a construction firm’s incident reports showed
                proactive safety steps, reducing liability.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.8,
                  fontSize: { xs: "16px", sm: "18px" },
                  color: "#484747",
                  mt: 2,
                }}
              >
                In short, an OHS management system is vital to measure and
                improve safety, and records ensure you can prove it and keep
                getting better.
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
            }}
          >
            Comprehensive Guide: The Rationale Behind OHS Management Systems and
            Record-Keeping
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
            ISO 45001, developed by the International Organization for
            Standardization (ISO), is a voluntary standard for occupational
            health and safety (OH&S) management systems, replacing OHSAS 18001.
            It aims to reduce workplace injuries and diseases, promoting a safer
            work environment through a systematic approach. This section
            provides a detailed exploration of why OHS management systems are
            necessary, what they entail, and why businesses must retain records,
            tailored for health and safety professionals, with enhanced clarity,
            appeal, and engagement, structured logically for ease of use.
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

export default OHSManage;
