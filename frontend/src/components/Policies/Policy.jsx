import React, { useEffect } from "react";
import { Typography, Box, Link, Container } from "@mui/material";
import privacy from "../../assets/priv.avif";

const Policy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ Smooth scroll to top when component mounts
  }, []);
  

  return (
    <Box sx={{ pb: 8, bgcolor: "#ffffff" }}>
      <Box
        sx={{
          bgcolor: "#032C34",
          color: "#A0D0C5",
          py: { xs: 6, sm: 8, md: 12 }, // ✅ Adjusts padding dynamically
          mb: { xs: 4, sm: 5, md: 6 }, // ✅ Adjusts margin-bottom dynamically
          position: "relative",

          // ✅ Background Image Layer
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${privacy})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: { xs: "center", md: "left" }, // ✅ Center image for mobile
            opacity: 1,
            zIndex: 0,
          },

          // ✅ Color Overlay Layer
          "::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#2E8C7B", // ✅ Overlay with transparency
            opacity: 0.5,
            zIndex: 0.5,
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            px: { xs: 2, sm: 4, md: 6 }, // ✅ Ensures text stays within safe margins
          }}
        >
          <Typography
            fontSize={{ xs: 24, sm: 32, md: 50 }}
            color="#ffffff"
            textAlign="center"
          >
            <Box component="span" color="#96e0cc">
              Privacy Policy
            </Box>{" "}
            for{" "}
            <Box component="span" color="#68b9ba">
              {" "}
              LeadQual UK Ltd.
            </Box>
          </Typography>
        </Container>
      </Box>

      {/* Header Section */}
      <Box textAlign="center" my={5}>
        <Typography fontSize={{ xs: 16, sm: 18, md: 20 }} color="#AEB4BD">
          Effective Date: 1 Mar 2025
        </Typography>
      </Box>

      <Box
        sx={{
          bgcolor: "#EDF6F5",
          px: { xs: 3, sm: 5, md: 10 },
          py: { xs: 3, sm: 5 },
          mx: { xs: 2, sm: 5, md: 25 },
          borderRadius: { xs: 10, sm: 20, md: 30 },
        }}
      >
        {/* Introduction */}
        <Box textAlign="center" mb={{ xs: 5, md: 10 }} mt={{ xs: 3, md: 5 }}>
          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            fontWeight="bold"
            color="#FF6F42"
            gutterBottom
          >
            DocRide
          </Typography>
          <Typography
            fontSize={{ xs: 28, sm: 32, md: 35 }}
            color="#1E626C"
            gutterBottom
          >
            Privacy Policy
          </Typography>
        </Box>
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
          gutterBottom
        >
          1. Introduction
        </Typography>
        <Typography
          fontSize={{ xs: 16, sm: 18, md: 20 }}
          color="#080E06"
          marginBottom="40px"
        >
          LeadQual UK Ltd. (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;),
          operating as Docride, respects the privacy of our users
          (&quot;user&quot; or &quot;you&quot;) who interact with our website at{" "}
          <Link
            href="https://www.docride.co.uk"
            target="_blank"
            color="#0000ff"
            sx={{ "&:hover": { color: "#1E626C" } }}
          >
            www.docride.co.uk
          </Link>
          , our mobile application, and our portal at{" "}
          <Link
            href="https://portal.docride.co.uk "
            target="_blank"
            color="#0000ff"
            sx={{ "&:hover": { color: "#1E626C" } }}
          >
            portal.docride.co.uk
          </Link>
          , (collectively, the &quot;Services&quot;). This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information
          when you use our Services. Please read this policy carefully. If you
          do not agree with its terms, please do not use the Services.
        </Typography>

        {/* Information We Collect */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
          gutterBottom
        >
          2. Information We Collect
        </Typography>
        <Typography fontSize={{ xs: 16, sm: 18, md: 20 }} paragraph>
          We may collect various types of information when you use our Services,
          including:
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2 }}
          >
            <strong>Personal Data:</strong> Information such as your name,
            shipping address, email address, telephone number, and demographic
            details (e.g., age, gender, hometown, interests) that you
            voluntarily provide when registering with the Services or
            participating in related activities.
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2 }}
          >
            <strong>Derivative Data:</strong> Information automatically
            collected by our servers, such as your IP address, browser type,
            operating system, access times, and pages viewed before and after
            accessing the Services.
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2 }}
          >
            <strong>Financial Data:</strong> Payment-related information (e.g.,
            credit card number, card brand, expiration date) collected when you
            make purchases, orders, returns, exchanges, or request information
            about our Services
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2 }}
          >
            <strong>Mobile Device Data:</strong> When using our mobile
            application, we may collect device information (e.g., device ID,
            model, operating system), location data (if you grant permission),
            and usage data.
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2 }}
          >
            <strong>Data from Contests, Giveaways, and Surveys:</strong>{" "}
            Information you provide when entering contests, giveaways, or
            responding to surveys.
          </Box>
        </Box>
        <Typography fontSize={{ xs: 16, sm: 18, md: 20 }} paragraph>
          The types of data collected may vary slightly depending on whether you
          use the website, mobile app, or portal, but the categories above
          encompass all data collected across our Services.
        </Typography>

        {/* Use of Your Information Collect */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
          gutterBottom
        >
          3. Use of Your Information Collect
        </Typography>
        <Typography fontSize={{ xs: 16, sm: 18, md: 20 }} paragraph>
          We use your information for the following purposes:
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            To create and manage your account.
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            To process payments and fulfil orders.
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            To send marketing communications (e.g., newsletters, promotional
            offers).
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            To improve our Services and develop new features
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            To comply with legal obligations.
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            To prevent fraud and ensure the security of our Services.
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            To provide customer support and respond to your inquiries.
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            To enable user-to-user communications (if applicable).
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            To administer contests, promotions, and surveys.
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            To generate anonymized statistical data for internal analysis.
          </Box>
        </Box>

        {/* Disclosure of Your InformationCollect */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
          gutterBottom
        >
          4. Disclosure of Your Information Collect
        </Typography>
        <Typography fontSize={{ xs: 16, sm: 18, md: 20 }} paragraph>
          We may share your information in these situations:
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            <strong>By Law or to Protect Rights:</strong> If required to respond
            to legal processes, investigate policy violations, or protect the
            rights, property, or safety of ourselves or others, as permitted by
            law.
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            <strong>Third-Party Service Providers:</strong> With third parties
            that perform services for us (e.g., payment processing, data
            analysis, email delivery, hosting, customer service, marketing), who
            are contractually bound to protect your data.
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            <strong>Business Transfers:</strong> In the event of a merger,
            acquisition, or sale of assets, your information may be transferred
            to the acquiring entity.
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            <strong>With Your Consent:</strong> With third parties when you have
            explicitly consented to such sharing.
          </Box>
        </Box>
        <Typography fontSize={{ xs: 16, sm: 18, md: 20 }} paragraph>
          We do not sell your personal data to third parties.
        </Typography>

        {/* Security of Your Information */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
          gutterBottom
        >
          5. Security of Your Information
        </Typography>
        <Typography
          fontSize={{ xs: 16, sm: 18, md: 20 }}
          paragraph
          marginBottom="40px"
        >
          We implement administrative, technical, and physical security measures
          to protect your personal information. However, no security system is
          infallible, and we cannot guarantee absolute security against
          interception or misuse. You share information online at your own risk.
        </Typography>

        {/* Cookies and Similar Technologies */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
          gutterBottom
        >
          6. Cookies and Similar Technologies
        </Typography>
        <Typography
          fontSize={{ xs: 16, sm: 18, md: 20 }}
          paragraph
          marginBottom="40px"
        >
          Our Services use cookies and similar technologies to enhance your
          experience, analyze usage, and deliver personalized content.
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            <strong>Essential Cookies:</strong> Necessary for the Services to
            function; consent is not required.
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            <strong>Non-Essential Cookies:</strong> Used for analytics or
            advertising; require your consent, obtained via our cookie banner.
          </Box>
        </Box>

        {/* Your Data Protection Rights */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
          gutterBottom
        >
          7. Your Data Protection Rights
        </Typography>
        <Typography
          fontSize={{ xs: 16, sm: 18, md: 20 }}
          paragraph
          marginBottom="40px"
        >
          Under the UK GDPR, you have the following rights:
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            <strong>Right to Access:</strong> Request a copy of your personal
            data.
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            <strong>Right to Rectification:</strong> Request correction of
            inaccurate or incomplete data
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            <strong>Right to Erasure:</strong> Request deletion of your data (in
            certain circumstances).
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            <strong>Right to Restrict Processing:</strong> Request limitation of
            data processing.
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            <strong>Right to Data Portability:</strong> Request your data in a
            structured, machine-readable format.
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            <strong>Right to Object:</strong> Object to processing based on
            legitimate interests or direct marketing.
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            <strong>Right to Withdraw Consent:</strong> Withdraw consent at any
            time where it is the basis for processing (e.g., via unsubscribe
            links in emails or cookie settings).
          </Box>
        </Box>
        <Typography fontSize={{ xs: 16, sm: 18, md: 20 }}>
          To exercise these rights, contact us at{" "}
          <Box
            component="span"
            sx={{ color: "black", "&:hover": { color: "#1E626C" } }}
          >
            <Link
              href="mailto:info@docride.co.uk"
              sx={{ color: "blue", "&:hover": { color: "#1E626C" } }}
            >
              info@docride.co.uk
            </Link>
          </Box>
          . We will respond within one month.
        </Typography>

        {/* Data Retention */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingY="10px"
          gutterBottom
        >
          8. Data Retention
        </Typography>
        <Typography
          fontSize={{ xs: 16, sm: 18, md: 20 }}
          paragraph
          marginBottom="40px"
        >
          We retain your personal data only as long as necessary for the
          purposes outlined in this policy, including legal, accounting, or
          reporting requirements. For example
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            Account data is retained while your account is active.
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            Transaction data may be kept for seven years to comply with tax
            laws.
          </Box>
        </Box>
        <Typography fontSize={{ xs: 16, sm: 18, md: 20 }}>
          For specific retention periods, contact us at{" "}
          <Box
            component="span"
            sx={{ color: "black", "&:hover": { color: "#1E626C" } }}
          >
            <Link
              href="mailto:info@docride.co.uk"
              sx={{ color: "blue", "&:hover": { color: "#1E626C" } }}
            >
              info@docride.co.uk
            </Link>
          </Box>
        </Typography>

        {/* International Data Transfers */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingY="10px"
          gutterBottom
        >
          9. International Data Transfers
        </Typography>
        <Typography
          fontSize={{ xs: 16, sm: 18, md: 20 }}
          paragraph
          marginBottom="40px"
        >
          Currently, we do not transfer your personal data outside the UK.
          Should this change, we will implement safeguards (e.g., standard
          contractual clauses) and update this policy accordingly.
        </Typography>

        {/* Automated Decision-Making and Profiling */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
          gutterBottom
        >
          10. Automated Decision-Making and Profiling
        </Typography>
        <Typography
          fontSize={{ xs: 16, sm: 18, md: 20 }}
          paragraph
          marginBottom="40px"
        >
          We may use your data to create profiles for personalizing your
          experience across our Services. However, we do not engage in automated
          decision-making that produces legal or similarly significant effects
          on you.
        </Typography>

        {/* Policy for Children */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
          gutterBottom
        >
          11. Policy for Children
        </Typography>
        <Typography
          fontSize={{ xs: 16, sm: 18, md: 20 }}
          paragraph
          marginBottom="40px"
        >
          We do not knowingly collect or market to children under 13. If we have
          inadvertently collected such data, please contact us to have it
          removed.
        </Typography>

        {/* Contact Information */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
          gutterBottom
        >
          12. Contact Us
        </Typography>
        <Typography fontSize={{ xs: 16, sm: 18, md: 20 }}>
          For questions or comments about this Privacy Policy, reach us at:{" "}
          <Box
            component="span"
            sx={{ color: "black", "&:hover": { color: "#1E626C" } }}
          >
            <Link
              href="mailto:info@docride.co.uk"
              sx={{ color: "blue", "&:hover": { color: "#1E626C" } }}
            >
              info@docride.co.uk
            </Link>
          </Box>
        </Typography>
        <Typography fontSize={{ xs: 16, sm: 18, md: 20 }}>
          We have not appointed a Data Protection Officer, as we do not engage
          in large-scale processing of sensitive data. For data protection
          inquiries, use the contact details above.
        </Typography>
      </Box>
    </Box>
  );
};

export default Policy;
