import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import yourImage from "../../assets/about/Future.avif";
import Logo from "../../assets/logo/Logo3.png";

const FutureGoals = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        bgcolor: "#C7EBEF",
        borderRadius: "30px 30px 0px 0px",
        py: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 4, md: 10 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "100%",
          height: "100%",
          borderRadius: "30px 30px 0px 0px",
          
          backgroundImage: `url(${yourImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: {
            xs: "center ", // Better focus on small screens
            md: "center center",
          },
          opacity: {
            xs: 0.4, // Fully visible with overlay
            md: 0.3,
          },
          zIndex: 0,
        }}
      />

      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{ pt: 0, zIndex: 3 }}
      >
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            zIndex: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              pb: 0,
              mb: 2,
              zIndex: 2,
            }}
          >
            {/* Small DocRide Logo */}
            <Box
              component="img"
              src={Logo}
              alt="DocRide Logo"
              sx={{
                py: "20px",
                width: 80,
                maxWidth: "100%",
                position: "relative",
                zIndex: 3,
              }}
            />
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#1E626C",
                fontSize: {
                  xs: "28px",
                  sm: "32px",
                  md: "40px",
                },
                textAlign: { xs: "center", md: "inherit" },
                mb: 1,
                zIndex: 3,
              }}
            >
              A Vision for Zero-Burden Safety
            </Typography>
          </Box>
        </Grid>
        {/* Left Vertical Heading */}
        <Grid
          item
          xs={12}
          md={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60%",
            zIndex: 3,
            writingMode: { xs: "horizontal-tb", md: "vertical-rl" },
            transform: { xs: "none", md: "rotate(180deg)" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#1E626C",
              fontSize: {
                xs: "28px",
                sm: "32px",
                md: "40px",
              },
              textAlign: { xs: "center", md: "inherit" },
            }}
          >
            Future Plans
          </Typography>
        </Grid>

        {/* Middle Content */}
        <Grid item xs={12} md={10} sx={{ zIndex: 3 }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: {
                xs: "16px",
                sm: "17px",
                md: "20px",
              },
              color: "#333",
              textAlign: "justify",
              lineHeight: 1.8,
              mb: 2,
            }}
          >
            We’ve already lit the fuse. DocRide’s AI-assisted Occupational
            Health and Safety (OHS) management system is a game-changer, handing
            businesses an ISO 45001-compliant framework in under a day, slicing
            through the paperwork jungle, and putting safety pros back in the
            driver’s seat. Ninety percent of SMEs can build and deploy a
            compliant health and safety system before the sun sets. That’s not
            just fast, it’s a revolution. But if you think this is the peak,
            you’re in for a surprise. This isn’t the finish line; it’s the
            starting gun. We didn’t come to tweak the system; we came to blow it
            wide open. Our vision? Zero data capture time for OHS, whether
            you’re onsite hammering steel or offsite crunching plans. Zero. No
            scribbling, no lag, no excuses. Just safety that moves as fast as
            you do.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: {
                xs: "16px",
                sm: "17px",
                md: "20px",
              },
              color: "#333",
              textAlign: "justify",
              lineHeight: 1.8,
              mb: 2,
            }}
          >
            How do we pull this off? By unleashing the full force of AI and
            cutting-edge hardware tech. Picture this: safety data doesn’t wait
            for you to chase it, it hunts you down. Real-time. Sensors sniffing
            out risks before they rear their heads. Wearables clocking worker
            vitals and sounding the alarm on fatigue before it strikes. AI so
            sharp it doesn’t just spot patterns; it stops incidents cold by
            predicting what humans can’t. We’re building a world where data
            collection isn’t a chore, it’s invisible. Onsite, offsite, across
            every job, DocRide will be the silent guardian, capturing,
            analyzing, and acting so you don’t have to. You’ll be free to focus
            on the mission; growing your business, not wrestling with records.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: {
                xs: "16px",
                sm: "17px",
                md: "20px",
              },
              color: "#333",
              textAlign: "justify",
              lineHeight: 1.8,
              mb: 2,
            }}
          >
            But we’re not stopping there. Safety isn’t just about dodging
            disasters; it’s about knowing you’re the best at preventing them.
            That’s why we’re forging a future where OHS performance isn’t a
            vague gut check, it’s a number you can bank on. Imagine a DocRide
            score that sizes up your safety game, not just against some static
            rulebook, but against the sharpest players in your field. A live,
            breathing metric that updates as you move, showing you where you
            shine, where you climb, and how to leap ahead. It’s not just a pat
            on the back; it’s a challenge to level up. Comparative, concrete,
            and crystal-clear, this score will let you benchmark against the
            best, spark continuous improvement, and prove your safety culture
            isn’t just talk, it’s titanium-strong.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: {
                xs: "16px",
                sm: "17px",
                md: "20px",
              },
              color: "#333",
              textAlign: "justify",
              lineHeight: 1.8,
            }}
          >
            This isn’t some far-off fantasy. It’s the next page in our story,
            and we’re writing it now. DocRide isn’t here to manage safety, we’re
            here to make it unstoppable. Strip away the clutter, supercharge the
            process, and what’s left? A system so smart, so seamless, it doesn’t
            just save time, it saves lives. That’s the fire driving us. That’s
            the future we’re building, one fearless innovation at a time.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FutureGoals;
