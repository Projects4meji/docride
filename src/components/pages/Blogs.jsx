import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";

// Placeholder Images (Replace with actual images)
import BlogHeroImage from "../../assets/bgimage.jpg";
import Article1 from "../../assets/partners.jpg";
import Article2 from "../../assets/partners.jpg";
import CaseStudy1 from "../../assets/partners.jpg";
import CaseStudy2 from "../../assets/partners.jpg";
import Success1 from "../../assets/partners.jpg";
import Success2 from "../../assets/partners.jpg";

const blogs = [
  {
    category: "Educational Articles",
    title: "How AI is Transforming Health and Safety Compliance",
    image: Article1,
    description:
      "Discover how artificial intelligence is revolutionizing workplace safety and compliance.",
    link: "#",
  },
  {
    category: "Educational Articles",
    title: "A Step-by-Step Guide to Achieving ISO 45001 Certification",
    image: Article2,
    description:
      "A detailed guide to help businesses achieve ISO 45001 compliance effortlessly.",
    link: "#",
  },
  {
    category: "Case Studies",
    title: "How Businesses Are Using DocRide to Solve Compliance Challenges",
    image: CaseStudy1,
    description:
      "Real-world case studies showcasing businesses that have successfully implemented DocRide.",
    link: "#",
  },
  {
    category: "Case Studies",
    title: "Measurable Outcomes: Saving Time and Costs with DocRide",
    image: CaseStudy2,
    description:
      "See how DocRide has helped businesses save resources and improve efficiency.",
    link: "#",
  },
  {
    category: "Success Stories",
    title: "Transforming Workplace Safety: User Testimonials",
    image: Success1,
    description:
      "Hear directly from businesses on how DocRide has improved their safety operations.",
    link: "#",
  },
  {
    category: "Success Stories",
    title: "Seamless Integration: How DocRide Simplifies Compliance",
    image: Success2,
    description:
      "Success stories from industries that have streamlined their compliance with DocRide.",
    link: "#",
  },
];

const Blogs = () => {
  return (
    <Box sx={{ width: "100vw", overflow: "hidden", bgcolor: "#F8F8F8" }}>
      {/* Hero Section */}
      <Box
        sx={{
          width: "100%",
          height: "50vh",
          backgroundImage: `url(${BlogHeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            textShadow: "2px 2px 10px rgba(0, 0, 0, 0.6)",
          }}
        >
          Insights, Success Stories, and More
        </Typography>
      </Box>

      {/* Blog Content */}
      <Container sx={{ py: 10 }}>
        <Grid container spacing={4}>
          {blogs.map((blog, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Card
                  sx={{
                    borderRadius: "15px",
                    boxShadow: 3,
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={blog.image}
                    alt={blog.title}
                  />
                  <CardContent>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "#72B7A4", fontWeight: "bold" }}
                    >
                      {blog.category}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1 }}>
                      {blog.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1, color: "#555" }}>
                      {blog.description}
                    </Typography>
                    <Button
                      variant="text"
                      href={blog.link}
                      sx={{ mt: 2, color: "#E25E3E", fontWeight: "bold" }}
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Blogs;
