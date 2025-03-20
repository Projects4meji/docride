import React, { useState } from "react";
import { Box, Container, Typography, Grid, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import bgimg from "../../assets/about/Im1.jpg";
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
  {
    title: "Our Future Plans: A Vision for Zero-Burden Safety",
    content: [
      `We’ve already lit the fuse. DocRide’s AI-assisted Occupational Health and Safety (OHS) management system is a game-changer, handing businesses an ISO 45001-compliant framework in under a day, slicing through the paperwork jungle, and putting safety pros back in the driver’s seat. Ninety percent of SMEs can build and deploy a compliant health and safety system before the sun sets. That’s not just fast, it’s a revolution. But if you think this is the peak, you’re in for a surprise. This isn’t the finish line; it’s the starting gun. We didn’t come to tweak the system; we came to blow it wide open. Our vision? Zero data capture time for OHS, whether you’re onsite hammering steel or offsite crunching plans. Zero. No scribbling, no lag, no excuses. Just safety that moves as fast as you do.`,
      `How do we pull this off? By unleashing the full force of AI and cutting-edge hardware tech. Picture this: safety data doesn’t wait for you to chase it, it hunts you down. Real-time. Sensors sniffing out risks before they rear their heads. Wearables clocking worker vitals and sounding the alarm on fatigue before it strikes. AI so sharp it doesn’t just spot patterns; it stops incidents cold by predicting what humans can’t. We’re building a world where data collection isn’t a chore, it’s invisible. Onsite, offsite, across every job, DocRide will be the silent guardian, capturing, analyzing, and acting so you don’t have to. You’ll be free to focus on the mission; growing your business, not wrestling with records.`,
      `But we’re not stopping there. Safety isn’t just about dodging disasters; it’s about knowing you’re the best at preventing them. That’s why we’re forging a future where OHS performance isn’t a vague gut check, it’s a number you can bank on. Imagine a DocRide score that sizes up your safety game, not just against some static rulebook, but against the sharpest players in your field. A live, breathing metric that updates as you move, showing you where you shine, where you climb, and how to leap ahead. It’s not just a pat on the back; it’s a challenge to level up. Comparative, concrete, and crystal-clear, this score will let you benchmark against the best, spark continuous improvement, and prove your safety culture isn’t just talk, it’s titanium-strong.`,
      `This isn’t some far-off fantasy. It’s the next page in our story, and we’re writing it now. DocRide isn’t here to manage safety, we’re here to make it unstoppable. Strip away the clutter, supercharge the process, and what’s left? A system so smart, so seamless, it doesn’t just save time, it saves lives. That’s the fire driving us. That’s the future we’re building, one fearless innovation at a time.`,
    ],
    image: bgimg,
  },
];

const transitionVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

const CEOStoryCarousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage(([prevPage]) => {
      const nextPage =
        (prevPage + newDirection + carouselData.length) % carouselData.length;
      return [nextPage, newDirection];
    });
  };

  const { title, content, image } = carouselData[page];

  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
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
        CEO’s Story & Goals
      </Typography>

      <Box sx={{ position: "relative" }}>
        {/* Left Arrow */}
        <IconButton
          onClick={() => paginate(-1)}
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            zIndex: 2,
            transform: "translateY(-50%)",
            bgcolor: "#ffffff",
            boxShadow: 2,
            "&:hover": { bgcolor: "#E0F2F1" },
          }}
        >
          <ArrowBackIos />
        </IconButton>

        {/* Carousel Section */}
        <Box sx={{ overflow: "hidden", borderRadius: "30px" }}>
          <AnimatePresence custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={transitionVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6 }}
              style={{ width: "100%" }}
            >
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
                {/* Image First on small screens */}
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    order: { xs: 1, md: 2 },
                    height: { xs: "250px", sm: "300px", md: "auto" },
                  }}
                >
                  <Box
                    component="img"
                    src={image}
                    alt="CEO"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Grid>

                {/* Content Section */}
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
                        xs: "28px", // Extra small devices
                        sm: "32px", // Small devices
                        md: "40px", // Medium devices
                        lg: "48px", // Large devices
                      },
                    }}
                  >
                    {title}
                  </Typography>

                  {/* Map over content array */}
                  {content.map((paragraph, index) => (
                    <Typography
                      key={index}
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
            </motion.div>
          </AnimatePresence>
        </Box>

        {/* Right Arrow */}
        <IconButton
          onClick={() => paginate(1)}
          sx={{
            position: "absolute",
            top: "50%",
            right: 0,
            zIndex: 2,
            transform: "translateY(-50%)",
            bgcolor: "#ffffff",
            boxShadow: 2,
            "&:hover": { bgcolor: "#E0F2F1" },
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Container>
  );
};

export default CEOStoryCarousel;
