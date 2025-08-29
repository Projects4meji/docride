import React, { useState } from "react";
import { Box, Container, Typography, Grid, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import bgimg from "../../assets/about/Im1.avif";
import { motion, AnimatePresence } from "framer-motion";

const carouselData = [
  {
    title: "The Spark Behind DocRide",
    content: [
      `I’ve never been the type to let obstacles win. Early in my career in aerospace manufacturing, I watched brilliant teams—engineers, dreamers, builders—get tangled up in a mess of endless paperwork. Production delays weren’t about a lack of talent or drive; they were about forms piling up, approvals dragging on, and processes suffocating progress. I’d hear it over and over: “It’s the paperwork holding us back.” And every time, I’d think, No way. There must be some solution. I couldn’t just sit there and let the documentation burden steal the show. So, I dove in—problem-solving is my fuel.`,

      `I started small but thought big. I digitalized what I could, slashed redundancies, merged overlapping documents, and simplified the rest. The goal? Cut the clutter without ever skimping on quality. The result was electric: we slashed data capture time by 50%, handing hours back to teams so they could focus on what they loved—creating, innovating, building. That feeling—the rush of turning frustration into freedom.`,

      `Then came the health and safety world, and with it, a challenge that hit harder and deeper. Here, paperwork wasn’t just a nuisance—it was a lifeline. Lives, well-being, and legal stakes were on the line. I discovered fast that designing forms to capture the right data, in the right amount, was a tightrope walk for safety professionals. Too much, and you drown people in busywork; too little, and you miss the mark. ISO 45001 became my guide—it doesn’t demand a mountain of documentation for every step. What it does demand is proof: records of risk assessments, safe systems of work, inspections, emergency drills, and internal audits. These aren’t just files—they’re the heartbeat of a system that keeps employees, contractors, and the public safe.`,

      `DocRide isn’t just software—it’s a revolution. Powered by AI, it weaves an intelligent process flow into every step, turning tedious paperwork into a guided, effortless system. Businesses can now roll out an ISO 45001-compliant health and safety framework in under a day. Yes, 90% SMEs can develop and deploy an ISO 4501 Compliant H&S system in less than a day. Every record, every audit, every safety measure lands exactly where it needs to—accurate, efficient, and overwhelm-free.`,

      `But DocRide is bigger than that. It’s a promise to safety professionals, to every business owner, to every worker counting on safety to come first. It’s about stripping away the chaos so you can zero in on what matters: protecting your people. It’s about proving that safety doesn’t have to be a slog. And it’s about making sure no one ever has to shrug and say, “It’s the paperwork holding us back,” again.`,

      `Today, DocRide is rewriting the rules of health and safety management, one smart solution at a time. And this is just the start. We’re here to make safety simple, sharp, and within reach for every industry—because when you clear the noise, you don’t just save time. You save lives.`,
    ],
    image: bgimg,
  },
];

const CEOStoryCarousel = () => {
  return (
    <Container maxWidth="xl" sx={{  px:0 }}>
      <Typography
        variant="h4"
        sx={{
          color: "#1E626C",
          fontWeight: "bold",
          mb: 8,
          textAlign: "center",
          fontSize: {
            xs: "28px",
            sm: "32px",
            md: "40px",
            lg: "48px",
          },
        }}
      >
        CEO’s Story
      </Typography>

      {carouselData.map(({ title, content, image }, index) => (
        <Box key={index} sx={{ }}>
          <Grid
            container
            spacing={0}
            sx={{
              bgcolor: "#C7EBEF",
              borderRadius: "30px",
              overflow: "hidden",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {/* Image - first on small screens */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                order: { xs: 1, md: 2 },
                height: "auto",
              }}
            >
              <Box
                component="img"
                src={image}
                alt={`Section ${index + 1}`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Grid>

            {/* Content */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                order: { xs: 2, md: 1 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                p: { xs: 3, sm: 4, md: 5 },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "#1E626C",
                  fontWeight: "bold",
                  mb: 4,
                  textAlign: "center",
                  fontSize: {
                    xs: "28px",
                    sm: "32px",
                    md: "40px",
                    lg: "48px",
                  },
                }}
              >
                {title}
              </Typography>

              {content.map((paragraph, pIndex) => (
                <Typography
                  key={pIndex}
                  variant="body1"
                  sx={{
                    color: "#333",
                    fontSize: {
                      xs: "16px",
                      sm: "17px",
                      md: "18px",
                    },
                    textAlign: "justify",
                    mb: 2,
                  }}
                >
                  {paragraph}
                </Typography>
              ))}
            </Grid>
          </Grid>
        </Box>
      ))}
    </Container>
  );
};

export default CEOStoryCarousel;
