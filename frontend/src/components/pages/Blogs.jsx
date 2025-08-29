import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  Pagination,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BlogHeroImage from "../../assets/bgimage.avif";
import Ai1 from "../../assets/blogs/Ai1.avif";
import Ai2 from "../../assets/blogs/Ai2.avif";
import Article1 from "../../assets/blogs/AIHealth.jpg";
import ISO1 from "../../assets/blogs/ISO1.avif";
import ISO2 from "../../assets/blogs/ISO2.avif";
import ISO3 from "../../assets/blogs/ISO3.avif";
import Compliance from "../../assets/blogs/Comchallenge.avif";
import Com1 from "../../assets/blogs/Comp1.avif";
import Com2 from "../../assets/blogs/Comp2.avif";
import Time from "../../assets/blogs/Time.avif";
import T1 from "../../assets/blogs/Time1.avif";
import T2 from "../../assets/blogs/Time2.avif";
import Testimonial from "../../assets/blogs/Testimonial.avif";
import Tes1 from "../../assets/blogs/Tes1.avif";
import Tes2 from "../../assets/blogs/Tes2.avif";

const categories = [
  "All",
  "Educational Articles",
  "Case Studies",
  "Success Stories",
];

export const blogs = [
  // {
  //   id: 1,
  //   author: "David Brown",
  //   date: "17-4-24",
  //   title: "How AI is Transforming Health and Safety Compliance",
  //   category: "Educational Articles",
  //   image: Article1,
  //   contentimg1: Ai1,
  //   contentimg2: Ai2,
  //   description:
  //     "The jobs report soundly beat expectations, with job gains broadly spread across the economy and about 60% higher…",
  // },
  {
    id: 1,
    author: "David Brown",
    date: "17-4-24",
    title: "Why do we need an OHS management system at all?",
    category: "Educational Articles",
    image: Article1,
    contentimg1: Ai1,
    contentimg2: Ai2,
    description:
      "This simple idea is key to workplace safety. For health and safety, it means tracking things like accident…",
    path: "/blog/1",
  },
  {
    id: 2,
    author: "David Brown",
    date: "17-4-24",
    title:
      "Comprehensive Guide to Becoming an Effective and Efficient ISO 45001 Auditor",
    category: "Educational Articles",
    image: ISO1,
    contentimg1: ISO2,
    contentimg2: ISO3,
    description:
      "As an auditor, your role is to evaluate the organization’s OH&S management system against ISO 45001…",
    path: "/blog/2",
  },
  {
    id: 3,
    author: "David Brown",
    date: "17-4-24",
    title:
      "RIDDOR Reporting: Your Guide to Keeping Workplaces Safe (and Avoiding Fines!)",
    category: "Case Studies",
    image: Compliance,
    contentimg1: Com1,
    contentimg2: Com2,
    description:
      "Hey, ever heard of RIDDOR? It might sound like something from a sci-fi flick, but it’s actually a key part of…",
    path: "/blog/3",
  },
  // {
  //   id: 2,
  //   author: "David Brown",
  //   date: "17-4-24",
  //   title: "A Step-by-Step Guide to Achieving ISO 45001 Certification",
  //   category: "Educational Articles",
  //   image: ISO1,
  //   contentimg1: ISO2,
  //   contentimg2: ISO3,
  //   description:
  //     "The jobs report soundly beat expectations, with job gains broadly spread across the economy and about 60% higher…",
  // },
  // {
  //   id: 3,
  //   author: "David Brown",
  //   date: "17-4-24",
  //   title: "Highlight businesses using DocRide to solve compliance challenges",
  //   category: "Case Studies",
  //   image: Compliance,
  //   contentimg1: Com1,
  //   contentimg2: Com2,
  //   description:
  //     "The jobs report soundly beat expectations, with job gains broadly spread across the economy and about 60% higher…",
  //   path: "/blog/3",
  // },
  {
    id: 4,
    author: "David Brown",
    date: "17-4-24",
    title: "ISO Standards: Busting the Myths",
    category: "Educational Articles",
    image: Time,
    contentimg1: T1,
    contentimg2: T2,
    description:
      "ISO 45001, the international standard for occupational health and safety, often gets a bad rap thanks to swirling myths…",
    path: "/blog/4",
  },
  // {
  //   id: 4,
  //   author: "David Brown",
  //   date: "17-4-24",
  //   title: "Include measurable outcomes, such as time or cost savings.",
  //   category: "Case Studies",
  //   image: Time,
  //   contentimg1: T1,
  //   contentimg2: T2,
  //   description:
  //     "The jobs report soundly beat expectations, with job gains broadly spread across the economy and about 60% higher…",
  //   path: "/blog/4",
  // },
  {
    id: 5,
    author: "David Brown",
    date: "17-4-24",
    title: "Showcase user testimonials and reviews",
    category: "Success Stories",
    image: Testimonial,
    contentimg1: Tes1,
    contentimg2: Tes2,
    description:
      "The jobs report soundly beat expectations, with job gains broadly spread across the economy and about 60% higher…",
    path: "/blog/5",
  },
  // Add more blog entries as needed
];

const recentPosts = blogs;

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ Smooth scroll to top when component mounts
  }, []);

  const [page, setPage] = useState(1);
  const blogsPerPage = 3;
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setPage(1); // ✅ Reset pagination when category changes
  };

  // Filter blogs based on selected category
  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  // Pagination logic
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // Paginate filtered results
  const paginatedBlogs = filteredBlogs.slice(
    (page - 1) * blogsPerPage,
    page * blogsPerPage
  );

  return (
    <>
      <Helmet>
        <title>DocRide Blog – ISO 45001 & OHS Management Insights</title>
        <meta
          name="description"
          content="Explore expert-written articles and case studies on ISO 45001, OHS management systems, incident reporting, and workplace safety."
        />
        <meta
          name="keywords"
          content="ISO 45001, OHS management system, Incident reporting, Incident investigation"
        />
      </Helmet>

      <Box sx={{ bgcolor: "#F8F8F8", pb: 5 }}>
        {/* Hero Section */}
        <Box
          sx={{
            bgcolor: "#ffffff",
            width: "100%",
            height: { xs: "40vh", sm: "35vh", md: "40vh" },
            backgroundImage: `url(${BlogHeroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            px: { xs: 3, sm: 6, md: 16, lg: 20 },
            py: { xs: 2, sm: 4 },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: { xs: "28px", sm: "32px", md: "40px" }, // Adjust font size dynamically
              textShadow: "2px 2px 6px rgba(0,0,0,0.3)", // Add a subtle text shadow for better readability
            }}
          >
            Blogs
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
            Explore expert insights, real success stories, and industry trends
            that empower you to stay ahead and make informed decisions.
          </Typography>
        </Box>

        <Container sx={{ py: 10 }}>
          {/* Main Blog Section */}
          <Grid container spacing={4} justifyContent="space-between">
            <Grid item xs={12} md={8}>
              <Grid container spacing={4}>
                {paginatedBlogs.map((blog, index) => (
                  <Grid item xs={12} sm={12} key={index}>
                    <Card
                      component={Link}
                      to={blog.path}
                      sx={{
                        background:
                          "linear-gradient(180deg, #FFFFFF 0%, rgba(155, 215, 199, 0.43) 100%)",
                        borderRadius: "10px",
                        boxShadow: 3,
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" }, // Stack vertically on small screens
                        alignItems: "center",
                        textDecoration: "none",
                        px: { xs: 2, md: 2 },
                        cursor: "pointer",
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                          boxShadow: 6,
                          color: "#1E626B",
                        },
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        style={{
                          flex: { xs: "none", md: 0.4 }, // Full width on small screens, left column on larger screens
                          width: "100%",
                        }}
                      >
                        <CardMedia
                          component="img"
                          sx={{
                            width: "100%",
                            height: { xs: "220px", sm: "250px", md: "240px" }, // Adjust height for screens
                            borderRadius: "10px",
                            objectFit: "cover",
                          }}
                          image={blog.image}
                          alt={blog.title}
                        />
                      </motion.div>

                      <CardContent
                        sx={{
                          flex: { xs: "none", md: "auto" }, // Full width on small screens
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          textAlign: { xs: "center", md: "left" }, // Center text on small screens
                          px: { xs: 1, md: 3 }, // Adjust padding for better spacing
                          pt: 4,
                        }}
                      >
                        <Button
                          variant="body2"
                          sx={{
                            backgroundColor: "#1E626B",
                            color: "#fff",
                            borderRadius: "30px",
                            padding: "5px 10px",
                            fontSize: "12px",
                            fontWeight: "bold",
                            alignSelf: { xs: "center", md: "start" }, // Center button on small screens
                            mb: 0.5,
                          }}
                        >
                          {blog.category}
                        </Button>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          sx={{
                            mb: 0.5,
                            fontSize: { xs: "14px", sm: "16px" },
                          }}
                        >
                          {blog.author} / {blog.date}
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: "bold",
                            mb: 0.5,
                            fontSize: { xs: "18px", sm: "20px" },
                          }}
                        >
                          {blog.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: { xs: "14px", sm: "16px" },
                            mb: 0.5,
                          }}
                        >
                          {blog.description}
                        </Typography>
                        <Button
                          variant="text"
                          sx={{
                            color: "#E25E3E",
                            fontWeight: "bold",
                            alignSelf: { xs: "center", md: "start" }, // Center button on small screens
                            "&:hover": {
                              color: "#1E626B",
                            },
                          }}
                        >
                          READ MORE
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              {/* Pagination Section */}
              <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                <Pagination
                  count={Math.ceil(blogs.length / blogsPerPage)}
                  page={page}
                  onChange={handlePageChange}
                  shape="rounded"
                  color="primary"
                  sx={{
                    "& .MuiPaginationItem-root": {
                      borderRadius: "50%",
                      fontWeight: "bold",
                      color: "#1E626B",
                      "&.Mui-selected": {
                        backgroundColor: "#FEC108",
                        color: "#fff",
                      },
                      "&:hover": {
                        backgroundColor: "#FEC108",
                        color: "#fff",
                      },
                    },
                  }}
                />
              </Box>
            </Grid>

            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search..."
                sx={{ mb: 4, backgroundColor: "#fff", borderRadius: "8px" }}
              />

              <Typography variant="h5" fontWeight="bold">
                Category
              </Typography>
              <List sx={{ ml: 2, py: 2 }}>
                {categories.map((category, index) => (
                  <ListItem
                    key={index}
                    disablePadding
                    sx={{
                      cursor: "pointer",
                      fontWeight:
                        selectedCategory === category ? "bold" : "normal",
                      color:
                        selectedCategory === category ? "#1E626B" : "inherit",
                      "&:hover": { color: "#1E626B" },
                    }}
                    onClick={() => handleCategoryClick(category)}
                  >
                    <ListItemText primary={category} />
                  </ListItem>
                ))}
              </List>

              <Typography variant="h5" sx={{ fontWeight: "bold", my: 2 }}>
                Recent Posts
              </Typography>
              <List>
                {recentPosts.map((post, index) => (
                  <ListItem
                    key={index}
                    component={Link}
                    to={`/blog/${post.id}`} // ✅ Navigates to the blog page
                    state={{ blog: post }} // ✅ Passes the entire blog object as state
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      textDecoration: "none",
                      color: "inherit",
                      cursor: "pointer",
                      "&:hover": { color: "#1E626B" },
                    }}
                  >
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <CardMedia
                        component="img"
                        sx={{ width: 100, height: 80, borderRadius: "10px" }}
                        image={post.image}
                        alt={post.title}
                      />
                    </motion.div>
                    <ListItemText
                      primary={post.title}
                      secondary={`${post.date}`}
                      sx={{ fontSize: "14px", fontWeight: "bold" }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default BlogPage;
