import React from "react";
import { Typography, Box, Link } from "@mui/material";
import privacy from "../../assets/privacy.jpg";

const Policy = () => {
  return (
    <Box sx={{ pb: 8, bgcolor: "#ffffff" }}>
      <Box
        sx={{
          width: "100%",
          height: { xs: "120px", sm: "150px", md: "200px" }, // Responsive height
          backgroundImage: `url(${privacy})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <Typography  fontSize={{ xs: 24, sm: 32, md: 50 }} color="#ffffff" textAlign="center">
          <Box component="span" color="#96e0cc">Privacy Policy</Box> for <Box component="span" color="#68b9ba"> LeadQual UK Ltd.</Box> 
        </Typography>
      </Box>

      {/* Header Section */}
      <Box textAlign="center" my={5}>
        <Typography fontSize={{ xs: 16, sm: 18, md: 20 }} color="#AEB4BD">
          Effective Date: 15 Apr 2024
        </Typography>
      </Box>

      <Box sx={{
          bgcolor: "#EDF6F5",
          px: { xs: 3, sm: 5, md: 10 },
          py: { xs: 3, sm: 5 },
          mx: { xs: 2, sm: 5, md: 25 },
          borderRadius: { xs: 10, sm: 20, md: 30 },
        }}>
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
          <Typography fontSize={{ xs: 28, sm: 32, md: 35 }} color="#1E626C" gutterBottom>
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
          LeadQual UK Ltd. respects the privacy of our users (“user” or “you”)
          who use our website located at{" "}
          <Link
            href="https://www.docride.co.uk"
            target="_blank"
            color="#0000ff"
            sx={{ "&:hover": { color: "#1E626C" } }}
          >
            www.docride.co.uk
          </Link>
          , including other media forms, media channels, mobile website, or
          mobile application related and connected thereto (collectively, the
          “Website”). This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you visit our website.
          Please read this privacy policy carefully. If you do not agree with
          the terms of this privacy policy, please do not access the site.
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
          We may collect the following types of information when you use our
          website:
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
          <Box component="li" sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2 }}>
            <strong>Personal Data:</strong> Personally identifiable information,
            such as your name, shipping address, email address, and telephone
            number, and demographic information, such as your age, gender,
            hometown, and interests, that you voluntarily give to us when you
            register with the Website or our mobile application, or when you
            choose to participate in various activities related to the Website
            and mobile application.
          </Box>
          <Box component="li" sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2 }}>
            <strong>Derivative Data:</strong> Information our servers
            automatically collect when you access the Website, such as your IP
            address, your browser type, your operating system, your access
            times, and the pages you have viewed directly before and after
            accessing the Website.
          </Box>
          <Box component="li" sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2 }}>
            <strong>Financial Data:</strong> Financial information, such as data
            related to your payment method (e.g. valid credit card number, card
            brand, expiration date) that we may collect when you purchase,
            order, return, exchange, or request information about our services
            from the Website.
          </Box>
          <Box component="li" sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2 }}>
            <strong>Data from Contests & Surveys:</strong> Personal and other
            information you may provide when entering contests or giveaways
            and/or responding to surveys.
          </Box>
        </Box>

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
          Having accurate information about you permits us to provide you with a
          smooth, efficient, and customized experience. Specifically, we may use
          information collected about you via the Website to:
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
          <Box component="li" sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}>
            Administer sweepstakes, promotions, and contests.
          </Box>
          <Box component="li" sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}>
            Assist law enforcement and respond to subpoenas.
          </Box>
          <Box component="li" sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}>
            Compile anonymous statistical data and analysis for use internally
            or with third parties.
          </Box>
          <Box component="li" sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}>
            Deliver targeted advertising, coupons, newsletters, and other
            information regarding promotions and the Website to you.
          </Box>
          <Box component="li" sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}>
            Email you regarding your account or order.
          </Box>
          <Box component="li" sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}>
            Enable user-to-user communications.
          </Box>
          <Box component="li" sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}>
            Fulfill and manage purchases, orders, payments, and other
            transactions related to the Website.
          </Box>
          <Box component="li" sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}>
            Generate a personal profile about you to make future visits to the
            Website more personalized.
          </Box>
          <Box component="li" sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}>
            Increase the efficiency and operation of the Website.
          </Box>
          <Box component="li" sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}>
            Monitor and analyze usage and trends to improve your experience with
            the Website.
          </Box>
          <Box component="li" sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}>
            Notify you of updates to the Website.
          </Box>
          <Box component="li" sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}>
            Offer new products, services, mobile applications, and/or
            recommendations to you.
          </Box>
          <Box component="li" sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}>
            Perform other business activities as needed.
          </Box>
          <Box component="li" sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}>
            Prevent fraudulent transactions, monitor against theft, and protect
            against criminal activity.
          </Box>
          <Box component="li" sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}>
            Process payments and refunds.
          </Box>
          <Box component="li" sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}>
            Request feedback and contact you about your use of the Website.
          </Box>
          <Box component="li" sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}>
            Resolve disputes and troubleshoot problems.
          </Box>
          <Box component="li" sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}>
            Respond to product and customer service requests.
          </Box>
          <Box component="li" sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}>
            Send you a newsletter.
          </Box>
          <Box component="li" sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}>
            Solicit support for the Website.
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
          4. Disclosure of Your InformationCollect
        </Typography>
        <Typography fontSize={{ xs: 16, sm: 18, md: 20 }} paragraph>
          We may share information we have collected about you in certain
          situations. Your information may be disclosed as follows:
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
          <Box component="li" sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}>
            <strong>By Law or to Protect Rights:</strong> If we believe the
            release of information about you is necessary to respond to legal
            process, to investigate or remedy potential violations of our
            policies, or to protect the rights, property, and safety of others,
            we may share your information as permitted or required by any
            applicable law, rule, or regulation.
          </Box>
          <Box component="li" sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}>
            <strong>Third-Party Service Providers:</strong> We may share your
            information with third parties that perform services for us or on
            our behalf, including payment processing, data analysis, email
            delivery, hosting services, customer service, and marketing
            assistance.
          </Box>
        </Box>

        {/* Security of Your InformationInformationCollect */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
          gutterBottom
        >
          5. Security of Your InformationInformationCollect
        </Typography>
        <Typography fontSize={{ xs: 16, sm: 18, md: 20 }} paragraph marginBottom="40px">
          We use administrative, technical, and physical security measures to
          help protect your personal information. While we have taken reasonable
          steps to secure the personal information you provide to us, please be
          aware that despite our efforts, no security measures are perfect or
          impenetrable, and no method of data transmission can be guaranteed
          against any interception or other type of misuse. Any information
          disclosed online is vulnerable to interception and misuse by
          unauthorized parties. Therefore, we cannot guarantee complete security
          if you provide personal information.
        </Typography>

        {/* Policy for Children */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
          gutterBottom
        >
          6. Policy for Children
        </Typography>
        <Typography fontSize={{ xs: 16, sm: 18, md: 20 }} paragraph marginBottom="40px">
          We do not knowingly solicit information from or market to children
          under the age of 13. If you become aware of any data we have collected
          from children under age 13, please contact us using the contact
          information provided below.
        </Typography>

        {/* Contact Information */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
          gutterBottom
        >
          7. Contact Us
        </Typography>
        <Typography fontSize={{ xs: 16, sm: 18, md: 20 }}>
          If you have questions or comments about this Privacy Policy, please
          contact us at:{" "}
          <Box
            component="span"
            sx={{ color: "black", "&:hover": { color: "#1E626C" } }}
          >
            <Link
              href="mailto:info@docride.co.uk"
              sx={{ color: "black", "&:hover": { color: "#1E626C" } }}
            >
              info@docride.co.uk
            </Link>
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default Policy;
