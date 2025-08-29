import React, { useEffect } from "react";
import { Typography, Box, Link, Container } from "@mui/material";
import pricingp from "../../assets/pricestat.avif";

const PricePolicy = () => {
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
            backgroundImage: `url(${pricingp})`,
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
              DocRide
            </Box>{" "}
            Pricing Policy
          </Typography>
        </Container>
      </Box>

      {/* Header Section */}
      <Box textAlign="center" my={5}>
        <Typography fontSize={{ xs: 16, sm: 18, md: 20 }} color="#AEB4BD">
          Effective Date: 3 Mar 2025
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
            Pricing Policy
          </Typography>
        </Box>
        <Typography
          fontSize={{ xs: 16, sm: 18, md: 20 }}
          color="#080E06"
          marginBottom="40px"
        >
          At DocRide, we aim to provide a fair, transparent, and flexible
          pricing model to suit your business needs. Our subscription fees grant
          access to the DocRide software and may include complimentary services
          such as cloud storage, AI tokens, API calls, and data upload/download
          limits. Below are the key terms governing our pricing and payment
          structure.
        </Typography>

        {/* Subscription Fees and Complimentary Services */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
          gutterBottom
        >
          1. Subscription Fees and Complimentary Services
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2 }}
          >
            <strong>Base Fees:</strong> Monthly subscription fees vary by
            package (Test Drive, Budget, Economy, Standard) and are detailed in
            our package documentation, available on our website [insert link] or
            upon request. All prices are in British Pounds (GBP, £) and exclude
            VAT where applicable.
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2 }}
          >
            <strong>Complimentary Services:</strong> Each package includes
            complimentary allowances (e.g., cloud storage, API calls, AI tokens,
            data upload/download), subject to a fair usage policy. These
            allowances may be adjusted (increased, decreased, or eliminated) at
            DocRide’s discretion with 30 days’ prior notice via email to the
            admin account.
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2 }}
          >
            <strong>Overages:</strong> Usage exceeding complimentary limits will
            incur additional charges, with rates specified in the package
            details. If these additional usage charges are less than your
            monthly base subscription fee, they will be billed in arrears
            alongside the next month’s subscription fee, charged on the 1st of
            each month. However, if the additional usage charges exceed (or are
            forecasted to exceed) your monthly base subscription fee, you will
            be invoiced immediately for the excess amount, and your payment
            method on file will be charged automatically within 3 business days
            of the invoice issuance.
          </Box>
        </Box>

        {/* Billing and Payment Terms */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
          gutterBottom
        >
          2. Billing and Payment Terms
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2 }}
          >
            <strong>Billing Cycle:</strong> Subscription fees are charged
            automatically on the 1st of each month via the payment method on
            file, in British Pounds (GBP, £).
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2 }}
          >
            <strong>Initial Payment: </strong> Upon subscribing to any paid
            package, the full subscription fee for the selected package will be
            deducted immediately, granting instant access to DocRide services.
            On the next billing date (1st of the following month), you will be
            charged the full monthly fee for the upcoming month, reduced by a
            prorated amount reflecting the unused days from your initial
            subscription month.
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2 }}
          >
            <strong>Monthly Subscription Billing: </strong> The base
            subscription fee for your chosen package is billed monthly,
            regardless of whether any user accounts (including admin or
            additional users) log in or utilize the service during the billing
            period. Additional charges may apply for usage exceeding
            complimentary limits or extra user accounts, as outlined in the
            package details and Section 4.
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2 }}
          >
            <strong>Payment Attempts: </strong> If a payment fails, a second
            attempt will be made between 3–7 days later. If still unsuccessful,
            further attempts may occur, and a late payment fee of £10 may be
            applied after 10 days. Persistent non-payment may restrict or
            terminate access to user and admin accounts until payment is
            received.
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2 }}
          >
            <strong>Advance Payment: </strong> All fees are payable in advance
            before accessing DocRide services. Non-payment may result in account
            suspension and, at DocRide’s discretion, deletion of data stored on
            our cloud servers.
          </Box>
        </Box>

        {/* Cancellation and Refunds */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
          gutterBottom
        >
          3. Cancellation and Refunds
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            <strong>Un-subscription:</strong> The admin account holder may
            cancel the subscription at any time via the account portal. Upon
            cancellation, billing will reflect a prorated charge for the days of
            service used in the current month.
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            <strong>Refunds:</strong> Overpaid subscription fees (e.g., for
            unused days) will be refunded to the original payment method within
            14 business days of cancellation, provided no outstanding balances
            remain.
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            <strong>Data Deletion:</strong> Upon un-subscription, all stored
            data may be deleted immediately at DocRide’s discretion, in
            compliance with UK GDPR. Re-subscription will not restore previously
            deleted data.
          </Box>
        </Box>

        {/* Additional User Accounts */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
          gutterBottom
        >
          4. Additional User Accounts
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            <strong>Charges:</strong> Adding user accounts beyond the
            complimentary limits incurs an additional per-user fee, based on the
            package tier (e.g., £4, £3, or £2 per user/month). These fees are
            billed monthly alongside the base subscription.
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            <strong>Prorated Billing for Additional Users:</strong> Fees for
            additional user accounts are calculated on a prorated basis. If a
            user account is created beyond the assigned limit and remains active
            for only a portion of the month, the charge will be determined as
            follows: (Additional User Fee × Number of Days the Account Was
            Active) ÷ Total Days in the Month. For example, if an additional
            user account (£4/month) is active for 3 days in a 30-day month, the
            fee would be (£4 × 3) ÷ 30 = £0.40, added to that month’s invoice.
          </Box>
        </Box>

        {/* Account Termination */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
          gutterBottom
        >
          5. Account Termination
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            <strong>Default:</strong> In case of payment default or violation of
            our terms of service, DocRide reserves the right to suspend or
            terminate accounts and delete associated data without prior notice,
            beyond the payment retry period outlined in Section 2. For
            non-payment terminations, notice will be attempted via email.
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            <strong>Appeals:</strong> If your account is terminated for a terms
            violation, you may appeal within 14 days by contacting support at{" "}
            <Box
              component="span"
              sx={{ color: "black", "&:hover": { color: "#1E626C" } }}
            >
              <Link
                href="mailto:support@docride.co.uk"
                sx={{ color: "blue", "&:hover": { color: "#1E626C" } }}
              >
                support@docride.co.uk
              </Link>
            </Box>
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            <strong>Reinstatement:</strong> Reactivating a terminated account
            may require settling outstanding balances and, if applicable, a
            reinstatement fee determined by DocRide.
          </Box>
        </Box>

        {/* Modifications to Pricing */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
          gutterBottom
        >
          6. Modifications to Pricing
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            <strong>Changes:</strong> DocRide may adjust subscription fees,
            additional usage rates, or package structures at any time, with
            consideration of customer feedback and statutory rights. Customers
            will receive 30 days’ notice via email before changes take effect.
            Continued use of the service after the notice period implies
            acceptance of the updated pricing.
          </Box>
        </Box>

        {/* VAT and Taxes */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingY="10px"
          gutterBottom
        >
          7. VAT and Taxes
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            <strong>Exclusion:</strong> All listed fees exclude VAT and other
            applicable taxes, which will be added to your invoice based on your
            location and prevailing UK tax regulations.
          </Box>
        </Box>

        {/* Support and Contact */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingY="10px"
          gutterBottom
        >
          8. Support and Contact
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            <strong>Assistance:</strong> Support is available via email, chat,
            or phone (depending on your package) during standard business hours
            (9 AM–5 PM GMT). For billing inquiries or disputes, contact our
            support team at{" "}
            <Box
              component="span"
              sx={{ color: "black", "&:hover": { color: "#1E626C" } }}
            >
              <Link
                href="mailto:support@docride.co.uk"
                sx={{ color: "blue", "&:hover": { color: "#1E626C" } }}
              >
                support@docride.co.uk
              </Link>
            </Box>
            . Disputes will be addressed within 14 business days.
          </Box>
        </Box>

        {/* Governing Law */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
          gutterBottom
        >
          9. Governing Law
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, color: "#333" }}
          >
            <strong>Governing Law:</strong> This pricing policy and your use of
            DocRide services are governed by the laws of England and Wales. Any
            disputes will be subject to the exclusive jurisdiction of the courts
            of England and Wales.
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PricePolicy;
