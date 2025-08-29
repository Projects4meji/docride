/* eslint-disable no-dupe-keys */
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
} from "@mui/material";
import {
  Facebook,
  YouTube,
  Instagram,
  Twitter,
  LinkedIn,
} from "@mui/icons-material";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { blogs } from "../pages/Blogs";

const RIDReport = () => {
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
    const foundBlog = blogs.find((blog) => blog.id === 3); // hardcoded ID
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
          Understanding RIDDOR: A Guide to Incident Reporting & Legal Compliance
        </title>
        <meta
          name="description"
          content="Learn how RIDDOR helps organizations meet OHS legal requirements. A guide to incident reporting, emergency preparedness, and preventing future workplace accidents."
        />
        <meta
          name="keywords"
          content="Incident investigation, Incident reporting, Emergency preparedness response, Ohs legal requirements, ISO 45001, Risk assessment"
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
            variant="body1"
            sx={{
              lineHeight: 1.8,
              fontSize: { xs: "16px", sm: "18px" },
              color: "#484747",
              mb: 4,
              mt: 3,
            }}
          >
            Hey, ever heard of RIDDOR? It might sound like something from a
            sci-fi flick, but it’s actually a key part of keeping workplaces
            safe in the UK. RIDDOR stands for the{" "}
            <Box component="span" sx={{ color: "#3A7B81", fontWeight: "bold" }}>
              Reporting of Incidents
            </Box>
            ,{" "}
            <Box component="span" sx={{ color: "#3A7B81", fontWeight: "bold" }}>
              Diseases
            </Box>{" "}
            and{" "}
            <Box component="span" sx={{ color: "#3A7B81", fontWeight: "bold" }}>
              Dangerous Occurrences Regulations
            </Box>
            . It’s a set of rules that says, “If something serious happens at
            work, you’ve got to tell the Health and Safety Executive (HSE).”
            Why? Because reporting these incidents helps spot problems, fix
            them, and make sure fewer people get hurt. Let’s dive in and break
            it down—because trust me, you don’t want to skip this and end up in
            hot water!
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "22px", sm: "26px", md: "30px" },
              fontWeight: "bold",
              mb: 1,
            }}
          >
            What Is RIDDOR, Anyway?
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
            Picture this: a worker slips off a ladder, or a gas leak nearly
            turns a quiet day into a disaster. RIDDOR is the system that makes
            sure these incidents don’t just get swept under the rug. Enforced by
            the HSE (the UK’s workplace safety pros), it’s been around since the
            Health and Safety at Work Act 1974. The goal? To track serious
            incidents, learn from them, and stop them from happening again. It’s
            like a safety detective, piecing together clues to make work better
            for everyone.
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "22px", sm: "26px", md: "30px" },
              fontWeight: "bold",
              mb: 1,
            }}
          >
            What Needs to Be Reported? (Not Every Little Scratch)
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              fontSize: { xs: "16px", sm: "18px" },
              color: "#484747",
              mb: 2,
            }}
          >
            So, what’s worth reporting? RIDDOR doesn’t care about paper cuts or
            stubbed toes—it’s focused on the big stuff that can really mess
            things up. Here’s the rundown:
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
              ▸ Deaths:
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
              If someone dies because of a work-related accident—like getting
              caught in machinery—it’s got to be reported.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: "#3A7B81",
                fontSize: "18px",
              }}
            >
              ▸ Specified Injuries:
            </Typography>
            <Typography
              variant="body2"
              sx={{
                ml: 1.5,
                color: "#555",
                fontSize: "16px",
                mb: 2,
                pl: 1,
              }}
            >
              These are the nasty ones that scream “emergency!” Think:
            </Typography>
            <Box component="ul" sx={{ mb: 4 }}>
              <Box component="li">
                Fractures (but not to fingers, thumbs, or toes—those digits are
                tough!).
              </Box>
              <Box component="li">Amputations.</Box>
              <Box component="li">
                Serious burns covering more than 10% of the body.
              </Box>
              <Box component="li">Loss of sight or a jab to the eye.</Box>
              <Box component="li">
                Dislocations of big joints like shoulders or knees.
              </Box>
              <Box component="li">Passing out or needing resuscitation.</Box>
              <Box component="li">
                Acute illnesses from nasty stuff like chemicals.
              </Box>
            </Box>

            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: "#3A7B81",
                fontSize: "18px",
              }}
            >
              ▸ Over-Seven-Day Injuries:
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
              If an injury sidelines someone from work for more than seven days
              (not counting the day it happened), it’s reportable. Imagine a bad
              sprain that keeps a worker home for weeks.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: "#3A7B81",
                fontSize: "18px",
              }}
            >
              ▸ Dangerous Occurrences:
            </Typography>
            <Typography
              variant="body2"
              sx={{
                ml: 1.5,
                color: "#555",
                fontSize: "16px",
                mb: 2,
                pl: 1,
              }}
            >
              Okay, what’s this? These are the “phew, that was close”
              moments—near-misses that could’ve been disasters but didn’t (this
              time). Examples include:
            </Typography>
            <Box component="ul" sx={{ mb: 3 }}>
              <Box component="li">
                A scaffold collapsing, even if no one’s around.
              </Box>
              <Box component="li">A lift’s load-bearing part snapping.</Box>
              <Box component="li">A gas leak that could’ve gone boom.</Box>
              <Box component="li">
                A biological agent escaping that might cause a serious
                infection. They’re reportable because they’re red flags—fix it
                now, or someone might not be so lucky next time.
              </Box>
            </Box>

            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: "#3A7B81",
                fontSize: "18px",
              }}
            >
              ▸ Work-Related Diseases:
            </Typography>
            <Typography
              variant="body2"
              sx={{
                ml: 1.5,
                color: "#555",
                fontSize: "16px",
                mb: 2,
                pl: 1,
              }}
            >
              These are illnesses tied to your job, like:
            </Typography>
            <Box component="ul" sx={{ mb: 3 }}>
              <Box component="li">
                Occupational asthma from breathing in dust or fumes.
              </Box>
              <Box component="li">
                Hand-arm vibration syndrome from too much power tool use.
              </Box>
              <Box component="li">Mesothelioma from asbestos exposure.</Box>
            </Box>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8,
                fontSize: { xs: "16px", sm: "18px" },
                color: "#484747",
                mb: 4,
              }}
            >
              Reporting these keeps the HSE in the loop, helping them spot
              trends and crack down on safety risks.
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
                mt: { xs: 2, md: 2 }, // ✅ Add spacing below images
              }}
            ></Box>

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
            }}
          >
            How to Report: It’s Not Rocket Science
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              fontSize: { xs: "16px", sm: "18px" },
              color: "#484747",
              mt: 1,
              mb: 2,
            }}
          >
            Good news—reporting isn’t some daunting chore. You’ve got options:
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              color: "#3A7B81",
              fontSize: "18px",
            }}
          >
            ▸ Online:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              ml: 1.5,
              color: "#555",
              fontSize: "16px",
              mb: 2,
              pl: 1,
            }}
          >
            The go-to method is the HSE’s RIDDOR online system at{" "}
            <Link
              href="https://www.hse.gov.uk/riddor/"
              target="_blank"
              color="#0000ff"
              sx={{ "&:hover": { color: "#1E626C" } }}
            >
              https://www.hse.gov.uk/riddor/
            </Link>{" "}
            . It’s as easy as filling out a form online—quick and painless.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              color: "#3A7B81",
              fontSize: "18px",
            }}
          >
            ▸ Phone:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              ml: 1.5,
              color: "#555",
              fontSize: "16px",
              mb: 2,
              pl: 1,
            }}
          >
            For emergencies like deaths or specified injuries, call the HSE
            Incident Contact Centre at{" "}
            <Box component="span" sx={{ color: "#3A7B81", fontWeight: "bold" }}>
              0345 300 9923
            </Box>
            . It’s like dialing 999 for workplace crises.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              color: "#3A7B81",
              fontSize: "18px",
            }}
          >
            ▸ Fax or Post:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              ml: 1.5,
              color: "#555",
              fontSize: "16px",
              mb: 2,
              pl: 1,
            }}
          >
            If online is not your thing, grab an HSE form and send it by fax or
            post. But honestly, online’s the way to go.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              fontSize: { xs: "16px", sm: "18px" },
              color: "#484747",
            }}
          >
            You’ll need to share what happened, where, and who was involved.
            Simple, right?
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "22px", sm: "26px", md: "30px" },
              fontWeight: "bold",
              pt: 4,
            }}
          >
            When to Report (and to Whom): Don’t Dawdle!
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              fontSize: { xs: "16px", sm: "18px" },
              color: "#484747",
              mt: 1,
              mb: 2,
            }}
          >
            Timing’s key with RIDDOR, and it depends on what went down. All
            reports go to the HSE, the big boss of UK workplace safety (unless
            you’re in a rare sector like a local authority gig). Here’s the
            schedule:
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              color: "#3A7B81",
              fontSize: "18px",
            }}
          >
            ▸ Deaths and Specified Injuries:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              ml: 1.5,
              color: "#555",
              fontSize: "16px",
              mb: 2,
              pl: 1,
            }}
          >
            Call the HSE ASAP, then follow up with a written report within{" "}
            <Box
              component="span"
              sx={{ color: "#555", fontSize: "16px", fontWeight: "bold" }}
            >
              10 days.
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              color: "#3A7B81",
              fontSize: "18px",
            }}
          >
            ▸ Over-Seven-Day Injuries:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              ml: 1.5,
              color: "#555",
              fontSize: "16px",
              mb: 2,
              pl: 1,
            }}
          >
            You’ve got{" "}
            <Box
              component="span"
              sx={{ color: "#555", fontSize: "16px", fontWeight: "bold" }}
            >
              15 days
            </Box>{" "}
            to report online.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              color: "#3A7B81",
              fontSize: "18px",
            }}
          >
            ▸ Dangerous Occurrences:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              ml: 1.5,
              color: "#555",
              fontSize: "16px",
              mb: 2,
              pl: 1,
            }}
          >
            Phone immediately, then write it up within{" "}
            <Box
              component="span"
              sx={{ color: "#555", fontSize: "16px", fontWeight: "bold" }}
            >
              10 days.
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              color: "#3A7B81",
              fontSize: "18px",
            }}
          >
            ▸ Work-Related Diseases:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              ml: 1.5,
              color: "#555",
              fontSize: "16px",
              mb: 2,
              pl: 1,
            }}
          >
            Report within{" "}
            <Box
              component="span"
              sx={{ color: "#555", fontSize: "16px", fontWeight: "bold" }}
            >
              15 days
            </Box>{" "}
            of a doctor’s diagnosis.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              fontSize: { xs: "16px", sm: "18px" },
              color: "#484747",
              mt: 1,
              mb: 4,
            }}
          >
            Miss the deadline, and you’re rolling the dice on some serious
            trouble.
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "22px", sm: "26px", md: "30px" },
              fontWeight: "bold",
            }}
          >
            What If You Don’t Report? (Spoiler: It’s Not Pretty)
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              fontSize: { xs: "16px", sm: "18px" },
              color: "#484747",
              mt: 1,
              mb: 2,
            }}
          >
            Skipping a report isn’t like forgetting to water your plants—it’s a
            criminal offense. Here’s what you’re risking:
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              color: "#3A7B81",
              fontSize: "18px",
            }}
          >
            ▸ Fines:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              ml: 1.5,
              color: "#555",
              fontSize: "16px",
              mb: 2,
              pl: 1,
            }}
          >
            Up to{" "}
            <Box
              component="span"
              sx={{ color: "#555", fontSize: "16px", fontWeight: "bold" }}
            >
              £20,000
            </Box>{" "}
            for smaller cases, or unlimited fines if it’s a big deal.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              color: "#3A7B81",
              fontSize: "18px",
            }}
          >
            ▸ Jail Time:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              ml: 1.5,
              color: "#555",
              fontSize: "16px",
              mb: 2,
              pl: 1,
            }}
          >
            Up to{" "}
            <Box
              component="span"
              sx={{ color: "#555", fontSize: "16px", fontWeight: "bold" }}
            >
              six months
            </Box>{" "}
            for minor convictions, or{" "}
            <Box
              component="span"
              sx={{ color: "#555", fontSize: "16px", fontWeight: "bold" }}
            >
              two years
            </Box>{" "}
            for the heavy stuff.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              color: "#3A7B81",
              fontSize: "18px",
            }}
          >
            ▸ HSE Crackdown:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              ml: 1.5,
              color: "#555",
              fontSize: "16px",
              mb: 2,
              pl: 1,
            }}
          >
            They could slap you with notices to shape up or shut you down until
            you fix things.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              fontSize: { xs: "16px", sm: "18px" },
              color: "#484747",
              mt: 1,
              mb: 4,
            }}
          >
            There’s a slim chance you could argue, “I didn’t know it was
            reportable!”—but that’s a tough sell. When in doubt, just report it.
            Better safe than sorry (and broke).
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "22px", sm: "26px", md: "30px" },
              fontWeight: "bold",
            }}
          >
            RIDDOR Reporting at a Glance
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              fontSize: { xs: "16px", sm: "18px" },
              color: "#484747",
              mt: 1,
              mb: 2,
            }}
          >
            Need a cheat sheet? Here’s a handy table:
          </Typography>

          <Box
            sx={{
              overflowX: "auto",
              borderRadius: "12px",
              boxShadow: 3,
              bgcolor: "#fff",
              mt: 2,
              mb: 2,
            }}
          >
            <Table>
              <TableHead sx={{ bgcolor: "#1E626B" }}>
                <TableRow>
                  {[
                    "Incident Type",
                    "Examples",
                    "How to Report",
                    "When to Report",
                    "To Whom",
                  ].map((header, index) => (
                    <TableCell
                      key={index}
                      sx={{
                        color: "#fff",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {[
                  {
                    type: "Deaths",
                    example: "Worker killed by machinery",
                    how: "Phone ASAP, then online/fax/post",
                    when: "Immediately, written within 10 days",
                    whom: "HSE",
                  },
                  {
                    type: "Specified Injuries",
                    example: "Broken leg, serious burn",
                    how: "Phone ASAP, then online/fax/post",
                    when: "Immediately, written within 10 days",
                    whom: "HSE",
                  },
                  {
                    type: "Over-Seven-Day Injuries",
                    example: "Sprain keeping someone off 8 days",
                    how: "Online, fax, or post",
                    when: "Within 15 days",
                    whom: "HSE",
                  },
                  {
                    type: "Dangerous Occurrences",
                    example: "Scaffold collapse, gas leak",
                    how: "Phone ASAP, then online/fax/post",
                    when: "Immediately, written within 10 days",
                    whom: "HSE",
                  },
                  {
                    type: "Work-Related Diseases",
                    example: "Asthma from dust, mesothelioma",
                    how: "Online, fax, or post",
                    when: "Within 15 days of diagnosis",
                    whom: "HSE",
                  },
                ].map((row, idx) => (
                  <TableRow key={idx} hover>
                    <TableCell
                      sx={{
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "#3A7B81",
                      }}
                    >
                      {row.type}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {row.example}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {row.how}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {row.when}
                    </TableCell>
                    <TableCell
                      sx={{
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "#1E626B",
                      }}
                    >
                      {row.whom}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>

          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "22px", sm: "26px", md: "30px" },
              fontWeight: "bold",
              mt: 4,
            }}
          >
            Why It Matters (Beyond Avoiding Trouble)
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              fontSize: { xs: "16px", sm: "18px" },
              color: "#484747",
              mt: 1,
              mb: 2,
            }}
          >
            Sure, dodging fines is nice, but RIDDOR’s bigger than that. Every
            report you send helps the HSE figure out what’s going wrong—like if
            scaffolds keep collapsing or asthma’s spiking in factories. That
            info leads to better rules and safer workplaces. So, when you
            report, you’re not just saving your own skin—you’re looking out for
            everyone.
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "22px", sm: "26px", md: "30px" },
              fontWeight: "bold",
              mt: 4,
            }}
          >
            Wrap-Up: Report It, Stay Safe
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              fontSize: { xs: "16px", sm: "18px" },
              color: "#484747",
              mt: 1,
              mb: 2,
            }}
          >
            There you have it—RIDDOR in a nutshell. It’s all about catching the
            serious stuff, from injuries to those heart-stopping near-misses
            (yep, those dangerous occurrences!), and making sure the HSE knows
            about it. Reporting’s easy, the deadlines are clear, and the stakes
            are high if you skip it. So, next time something goes sideways at
            work, don’t hesitate—report it. It’s a small step that makes a big
            difference.
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

export default RIDReport;
