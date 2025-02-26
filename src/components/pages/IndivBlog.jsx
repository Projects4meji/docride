/* eslint-disable no-dupe-keys */
import  { useState, useEffect } from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import {
  Facebook,
  YouTube,
  Instagram,
  Twitter,
  LinkedIn,
} from "@mui/icons-material";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Ai1 from "../../assets/blogs/Ai1.png";
import Ai2 from "../../assets/blogs/Ai2.png";
import Article1 from "../../assets/blogs/AIHealth.jpg";
import ISO1 from "../../assets/blogs/ISO1.png";
import ISO2 from "../../assets/blogs/ISO2.png";
import ISO3 from "../../assets/blogs/ISO3.png";

const blogs = [
  {
    id: 1,
    author: "David Brown",
    date: "17-4-24",
    title: "How AI is Transforming Health and Safety Compliance",
    category: "Educational Articles",
    image: Article1,
    contentimg1: Ai1,
    contentimg2: Ai2,
    description:
      "The jobs report soundly beat expectations, with job gains broadly spread across the economy and about 60% higher…",
  },
  {
    id: 2,
    author: "David Brown",
    date: "17-4-24",
    title: "A Step-by-Step Guide to Achieving ISO 45001 Certification",
    category: "Educational Articles",
    image: ISO1,
    contentimg1: ISO2,
    contentimg2: ISO3,
    description:
      "The jobs report soundly beat expectations, with job gains broadly spread across the economy and about 60% higher…",
  },
  {
    id: 3,
    author: "David Brown",
    date: "17-4-24",
    title: "Highlight businesses using DocRide to solve compliance challenges",
    category: "Case Studies",
    image: Article1,
    contentimg1: Ai1,
    contentimg2: Ai2,
    description:
      "The jobs report soundly beat expectations, with job gains broadly spread across the economy and about 60% higher…",
  },
  {
    id: 4,
    author: "David Brown",
    date: "17-4-24",
    title: "Include measurable outcomes, such as time or cost savings.",
    category: "Case Studies",
    image: Article1,
    contentimg1: Ai1,
    contentimg2: Ai2,
    description:
      "The jobs report soundly beat expectations, with job gains broadly spread across the economy and about 60% higher…",
  },
  {
    id: 5,
    author: "David Brown",
    date: "17-4-24",
    title: "Showcase user testimonials and reviews",
    category: "Success Stories",
    image: Article1,
    contentimg1: Ai1,
    contentimg2: Ai2,
    description:
      "The jobs report soundly beat expectations, with job gains broadly spread across the economy and about 60% higher…",
  },
  // Add more blog entries as needed
];

const IndivBlog = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [blogPost, setBlogPost] = useState(location.state?.blog || null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  // Update blog data when ID changes in the URL
  useEffect(() => {
    if (!blogPost) {
      const foundBlog = blogs.find((blog) => blog.id === parseInt(id, 10));
      setBlogPost(foundBlog || null);
    }
  }, [id, blogPost]);

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
    <Box sx={{ bgcolor: "#F8F8F8", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "#1E626B",
          width: "100%",
          minHeight: { xs: "40vh", md: "50vh" }, // Adjust height dynamically
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center", // Centers text for smaller screens
          px: { xs: 3, sm: 6, md: 10 }, // Responsive padding
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
          Lorum Ipsum
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
          Artificial Intelligence (AI) is revolutionizing health and safety
          compliance in the workplace. With real-time monitoring, predictive
          analytics, and automation, AI enhances safety protocols and reduces
          risks. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          ut imperdiet ipsum. Ut at ultricies nibh, ac porta ex. Nulla lacinia
          tincidunt urna elementum rutrum. Morbi condimentum iaculis diam nec
          consectetur. Maecenas at est eget leo pellentesque imperdiet.
          Suspendisse a ipsum convallis, semper lectus dignissim, laoreet ante.
          Ut dui augue, facilisis quis erat sit amet, tempus viverra magna.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Duis vitae commodo sem. Mauris suscipit eu mi
          sed fermentum.
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

        {/* Blog Title */}
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "22px", sm: "26px", md: "30px" },
            fontWeight: "bold",
            mb: 1,
          }}
        >
          Lorum Ipsum
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
          Attracting good money and achieving financial success is within your
          reach. With our innovative solutions and expert guidance, we empower
          you to unlock your creative business potential and thrive in today&apos;s
          competitive landscape.
        </Typography>

        {/* Image Row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Left Image with Right-to-Left Hover Overlay */}
          <Box
            sx={{
              width: { xs: "100%", md: "48%" },
              height: "auto",
              borderRadius: "10px",
              boxShadow: 3,
              overflow: "hidden",
              position: "relative",
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

          {/* Right Image with Left-to-Right Hover Overlay */}
          <Box
            sx={{
              width: { xs: "100%", md: "48%" },
              height: "auto",
              borderRadius: "10px",
              boxShadow: 3,
              overflow: "hidden",
              position: "relative",
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

        {/* Blog Main Content */}
        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.8,
            fontSize: { xs: "16px", sm: "18px" },
            color: "#484747",
            mt: 4,
          }}
        >
          Vivamus aliquam quam mollis massa condimentum tempus. Maecenas
          sollicitudin felis sit amet sem mattis laoreet. Cras lacinia ac nisl
          non commodo. Fusce tincidunt laoreet elementum. In vel gravida arcu.
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Mauris vestibulum arcu ut vestibulum
          porttitor.
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "22px", sm: "26px", md: "30px" },
            fontWeight: "bold",
            pt: 4,
          }}
        >
          Lorum Ipsum
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
          Artificial Intelligence (AI) is revolutionizing health and safety
          compliance in the workplace. With real-time monitoring, predictive
          analytics, and automation, AI enhances safety protocols and reduces
          risks. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          ut imperdiet ipsum. Ut at ultricies nibh, ac porta ex. Nulla lacinia
          tincidunt urna elementum rutrum. Morbi condimentum iaculis diam nec
          consectetur. Maecenas at est eget leo pellentesque imperdiet.
          Suspendisse a ipsum convallis, semper lectus dignissim, laoreet ante.
          Ut dui augue, facilisis quis erat sit amet, tempus viverra magna.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Duis vitae commodo sem. Mauris suscipit eu mi
          sed fermentum.
        </Typography>
      </Container>

      {/* Divider Line */}
      <Container
        maxWidth="md"
        sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}
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
      <Container maxWidth="md" sx={{ textAlign: "left", mt: { xs: 6, md: 8 } }}>
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
              sx={{ fontWeight: "bold", fontSize: { xs: "16px", sm: "18px" } }}
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

          {/* Navigation Links */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              gap: { xs: 2, sm: 0 },
              my: 4,
              color: "#1976D2",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {blogPost.id > 1 ? (
              <Box
                sx={{ "&:hover": { textDecoration: "underline" } }}
                onClick={() => navigate(`/blog/${blogPost.id - 1}`)}
              >
                ← Previous Blog
              </Box>
            ) : (
              <Box sx={{ opacity: 0.5, pointerEvents: "none" }}>
                ← Previous Blog
              </Box>
            )}

            {blogPost.id < blogs.length ? (
              <Box
                sx={{ "&:hover": { textDecoration: "underline" } }}
                onClick={() => navigate(`/blog/${blogPost.id + 1}`)}
              >
                Next Blog →
              </Box>
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
                sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 3 }}
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
  );
};

export default IndivBlog;
