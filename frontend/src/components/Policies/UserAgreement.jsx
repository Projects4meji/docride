import React, { useEffect } from "react";
import { Typography, Box, Link } from "@mui/material";
import privacy from "../../assets/privacy.jpg";

const UserAgreement = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ Smooth scroll to top when component mounts
  }, []);

  return (
    <Box sx={{ pb: 8, bgcolor: "#ffffff" }}>
      <Box
        sx={{
          width: "100%",
          height: { xs: "120px", sm: "150px", md: "300px" }, // Responsive height
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
        <Typography
          fontSize={{ xs: 24, sm: 32, md: 50 }}
          color="#ffffff"
          textAlign="center"
        >
          <Box component="span" color="#96e0cc">
            DocRide
          </Box>{" "}
          User Agreement
        </Typography>
      </Box>

      {/* Header Section */}
      <Box
        sx={{
          bgcolor: "#EDF6F5",
          px: { xs: 3, sm: 5, md: 10 },
          py: { xs: 3, sm: 5 },
          my: { xs: 3, sm: 5 },
          mx: { xs: 2, sm: 5, md: 25 },
          borderRadius: { xs: 10, sm: 20, md: 30 },
        }}
      >
        {/* Acceptance of Terms */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
          gutterBottom
        >
          1. Acceptance of Terms
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
          <Typography
            fontSize={{ xs: 16, sm: 18, md: 20 }}
            color="#080E06"
            marginBottom="40px"
          >
            This User Agreement (the "Agreement") is a binding legal contract
            between you, either a business entity, government department, NGO,
            health and safety consultant, or auditor ("You" or "User"), and
            LeadQual UK Ltd. ("Company", "We", "Us", or "Our"). By registering
            for, accessing, browsing, or using the website located at{" "}
            <Link
              href="https://www.docride.co.uk"
              target="_blank"
              color="#0000ff"
              sx={{ "&:hover": { color: "#1E626C" } }}
            >
              www.docride.co.uk
            </Link>
            , or any applications, platforms, services, or networks related to
            the health and safety management system known as DocRide
            (collectively, the "Service"), you acknowledge that you have read,
            understood, and agree to be bound by the following terms and
            conditions, including any additional guidelines and future
            modifications (collectively, the "Terms").
          </Typography>
        </Box>

        {/* Eligibility */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
          gutterBottom
        >
          2. Eligibility
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
          <Typography
            fontSize={{ xs: 16, sm: 18, md: 20 }}
            color="#080E06"
            marginBottom="40px"
          >
            The Service is available exclusively to business entities,
            government departments, NGOs, health and safety consultants, and
            auditors. By using the Service, you affirm that you are legally
            capable of entering into binding contracts and that your entity has
            not been previously suspended or removed from the Service. The users
            of DocRide must be 18 years or older.
          </Typography>
        </Box>

        {/* Account Registration and Security */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
          gutterBottom
        >
          3. Account Registration and Security
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
          <Box
            component="li"
            sx={{
              fontSize: { xs: 16, sm: 18, md: 20 },
              mb: 2,
              ml: 2,
              color: "#333",
            }}
          >
            You agree to provide accurate, current, and complete information
            about your business, department, NGO, or consultancy when
            registering for and using the Service. You are responsible for
            updating your account information to keep it accurate, current, and
            complete.
          </Box>
          <Box
            component="li"
            sx={{
              fontSize: { xs: 16, sm: 18, md: 20 },
              mb: 2,
              ml: 2,
              color: "#333",
            }}
          >
            The account must be created and managed by an authorized
            representative of the business, preferably the CEO, Managing
            Director (MD), or a person explicitly authorized by them. This
            representative will have the highest level of access to the Service.
          </Box>
          <Box
            component="li"
            sx={{
              fontSize: { xs: 16, sm: 18, md: 20 },
              mb: 2,
              ml: 2,
              color: "#333",
            }}
          >
            The account belongs to the business entity, not the individual who
            created it. In the event of any dispute regarding account ownership,
            the account will be transferred to the rightful owner(s) of the
            business or company, as determined by applicable legal
            documentation, and not to the employee who created the account.
          </Box>
          <Box
            component="li"
            sx={{
              fontSize: { xs: 16, sm: 18, md: 20 },
              mb: 2,
              ml: 2,
              color: "#333",
            }}
          >
            You may create additional user accounts for employees or authorized
            personnel, granting them access and authorizations to use various
            modules of the Service in different capacities. You are responsible
            for managing these user accounts, including adding, editing, or
            deleting users as needed.
          </Box>
          <Box
            component="li"
            sx={{
              fontSize: { xs: 16, sm: 18, md: 20 },
              mb: 2,
              ml: 2,
              color: "#333",
            }}
          >
            We may store and use the information you provide for maintaining
            your account and billing fees.
          </Box>
        </Box>

        {/* Privacy Policy */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
          gutterBottom
        >
          4. Privacy Policy
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
          <Typography
            fontSize={{ xs: 16, sm: 18, md: 20 }}
            color="#080E06"
            marginBottom="40px"
          >
            Your privacy is important to us. Our Privacy Policy explains how We
            collect, use, and disclose information that pertains to your
            privacy. By accessing or using the Service, you signify your
            agreement to the Privacy Policy as well as this Agreement.
          </Typography>
        </Box>

        {/* Fees and Payments */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
          gutterBottom
        >
          5. Fees and Payments
        </Typography>
        <Box
          component="ol"
          sx={{
            pl: { xs: 2, sm: 3 },
            mb: 4,
            listStyleType: "lower-alpha",
            listStylePosition: "inside",
          }}
        >
          <Box
            component="li"
            sx={{ fontSize: { xs: 16, sm: 18, md: 20 }, mb: 2, color: "#333" }}
          >
            <strong>Subscription Fees: </strong> You agree to pay (as and when
            its due) the monthly subscription fees (Or any other additional
            usage fee) specified upon registration for the Service. All fees are
            non-refundable, except as required by law or as explicitly stated in
            this Agreement.
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 16, sm: 18, md: 20 }, mb: 2, color: "#333" }}
          >
            <strong>Automatic Renewal:</strong> Your subscription will
            automatically renew each month unless cancelled by you at least 24
            hours before the renewal date to avoid billing for the next month.
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 16, sm: 18, md: 20 }, mb: 2, color: "#333" }}
          >
            <strong>Changes in Fees:</strong> We may adjust the subscription
            fees at any time, with reasonable notice provided to you before the
            changes take effect.
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 16, sm: 18, md: 20 }, mb: 2, color: "#333" }}
          >
            <strong>Non-Payment Consequences:</strong> n case of non-payment of
            the required fee as and when it becomes payable, the admin account
            and all associated user accounts may be deactivated immediately. We
            also reserve the right to delete all Occupational Health and Safety
            (OHS) performance data and/or other data created by such business
            users.
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 16, sm: 18, md: 20 }, mb: 2, color: "#333" }}
          >
            <strong>Pricing Policy Compliance:</strong> sers must follow the
            instructions given in the Pricing Policy as a mandatory requirement
            of using the Service. The Pricing Policy is incorporated by
            reference into this Agreement and may be updated from time to time.
          </Box>
        </Box>

        {/* Use of the Service */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
          gutterBottom
        >
          6. Use of the Service
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
          <Box
            component="li"
            sx={{
              fontSize: { xs: 16, sm: 18, md: 20 },
              mb: 2,
              ml: 2,
              color: "#333",
            }}
          >
            You agree to use the Service only for lawful purposes and in
            accordance with this Agreement, any applicable law, regulation, or
            generally accepted practices or guidelines in the relevant
            jurisdictions. You are solely responsible for ensuring that your use
            of the Service, including any OHS management systems developed or
            implemented through it, complies with all legal and regulatory
            requirements. LeadQual UK Ltd. is not liable for any misuse of the
            Service or failure to verify its outputs, including AI-generated
            content, that results in harm, non-compliance, or loss.
          </Box>
        </Box>

        {/* Intellectual Property Rights */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingY="10px"
          gutterBottom
        >
          7. Intellectual Property Rights
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
          <Typography
            fontSize={{ xs: 16, sm: 18, md: 20 }}
            color="#080E06"
            marginBottom="40px"
          >
            The technology and software underlying the Service or distributed in
            connection therewith are the property of LeadQual UK Ltd., our
            affiliates, and our partners (the "Software"). You agree not to
            copy, modify, create derivative works of, reverse engineer, reverse
            assemble, or otherwise attempt to discover any source code, sell,
            assign, sublicense, or otherwise transfer any right in the Software.
          </Typography>
        </Box>

        {/* Term and Termination */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingY="10px"
          gutterBottom
        >
          8. Term and Termination
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
          <Typography
            fontSize={{ xs: 16, sm: 18, md: 20 }}
            color="#080E06"
            marginBottom="40px"
          >
            This Agreement will remain in full force and effect while you use
            the Service. You may terminate your use or participation at any
            time, for any reason, by following the instructions on the "Admin
            Account" page of the Service. Upon termination, all user accounts
            associated with your business will be deactivated, and data may be
            retained or deleted in accordance with our Privacy Policy and
            applicable laws.
          </Typography>
        </Box>

        {/* Modifications to the Agreement */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
          gutterBottom
        >
          9. Modifications to the Agreement
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
          <Typography
            fontSize={{ xs: 16, sm: 18, md: 20 }}
            color="#080E06"
            marginBottom="40px"
          >
            We may modify this Agreement from time to time. Any and all changes
            to this Agreement will be posted on the Service, and revisions will
            be indicated by date. You agree to be bound by any changes to this
            Agreement when you use the Service after any such modification
            becomes effective.
          </Typography>
        </Box>

        {/* Legal Disputes and Jurisdiction */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
        >
          10. Legal Disputes and Jurisdiction
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
          <Typography
            fontSize={{ xs: 16, sm: 18, md: 20 }}
            color="#080E06"
            marginBottom="40px"
          >
            Any disputes arising out of or related to these Terms or the Service
            will be governed by the laws of the United Kingdom, without regard
            to its conflict of law rules. At LeadQual UK Ltd.’s discretion,
            disputes may first be submitted to binding arbitration in the United
            Kingdom under the rules of the London Court of International
            Arbitration before resorting to courts. Any legal action must be
            resolved exclusively in the courts of the United Kingdom. You agree
            to waive any right to participate in a class action or consolidated
            proceeding against LeadQual UK Ltd. or its affiliates related to the
            Service.
          </Typography>
        </Box>

        {/* General Provisions */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
          gutterBottom
        >
          11. General Provisions
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
          <Typography
            fontSize={{ xs: 16, sm: 18, md: 20 }}
            color="#080E06"
            marginBottom="40px"
          >
            If any part of this Agreement is held invalid or unenforceable, that
            portion shall be construed in a manner consistent with applicable
            law to reflect, as nearly as possible, the original intentions of
            the parties, and the remaining portions shall remain in full force
            and effect. By using the Service, you agree to receive all
            communications, including notices, agreements, legally required
            disclosures, or other information in connection with the Service
            (collectively, "Contract Notices") electronically.
          </Typography>
        </Box>

        {/* Limitation of Liability */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
          gutterBottom
        >
          12. Limitation of Liability
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
          <Typography
            fontSize={{ xs: 16, sm: 18, md: 20 }}
            color="#080E06"
            marginBottom="40px"
          >
            To the fullest extent permitted by law, LeadQual UK Ltd., its
            affiliates, officers, directors, employees, agents, suppliers, or
            licensors (collectively, the "Protected Parties") shall not be
            liable for any indirect, incidental, special, consequential, or
            exemplary damages, including but not limited to damages for loss of
            profits, goodwill, use, data, or other intangible losses (even if
            advised of the possibility of such damages), resulting from or
            arising out of the use or inability to use the Service or any other
            matter relating to the Service. The Protected Parties shall not be
            liable for any incidents, accidents, loss, or damage of property,
            assets, or persons as a result of using the DocRide product, whether
            due to software defects, AI errors, or user implementation. This
            limitation applies whether damages arise from use or misuse of the
            Service, inability to use the Service, or its interruption,
            suspension, or termination.
          </Typography>
        </Box>

        {/* Consultancy Services */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
          gutterBottom
        >
          13. Consultancy Services
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
          <Typography
            fontSize={{ xs: 16, sm: 18, md: 20 }}
            color="#080E06"
            marginBottom="20px"
          >
            We may offer free or paid online Occupational Health and Safety
            (OHS) consultancy services to subscribed users. These services
            include:
          </Typography>
          <Box
            component="li"
            sx={{
              fontSize: { xs: 14, sm: 18, md: 20 },
              mb: 2,
              ml: 4,
              color: "#333",
            }}
          >
            Assisted on-boarding
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, ml: 4 }}
          >
            Lean OHS management system development
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, ml: 4 }}
          >
            Best practices for OHS risk control
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, ml: 4 }}
          >
            Internal audits and recommendations
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, ml: 4 }}
          >
            Legal compliance consultancy
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, ml: 4 }}
          >
            Employee training consultancy
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, ml: 4 }}
          >
            Review of corrective actions/incident investigation reports
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, ml: 4 }}
          >
            Post-certification audit consultancy
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, ml: 4 }}
          >
            Customized consultation
          </Box>

          <Typography
            fontSize={{ xs: 16, sm: 18, md: 20 }}
            color="#080E06"
            marginBottom="20px"
          >
            What Consultancy Service Doesn’t Include:
          </Typography>
          <Box
            component="li"
            sx={{
              fontSize: { xs: 14, sm: 18, md: 20 },
              mb: 2,
              ml: 4,
              color: "#333",
            }}
          >
            Document development (users must create their own documents)
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, ml: 4 }}
          >
            Onsite consultancy support
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, ml: 4 }}
          >
            Representation during audits
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, ml: 4 }}
          >
            Communication on your behalf
          </Box>
          <Box
            component="li"
            sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mb: 2, ml: 4 }}
          >
            Identification of legal and regulatory requirements (users must
            identify these themselves)
          </Box>
          <Typography
            fontSize={{ xs: 16, sm: 18, md: 20 }}
            color="#080E06"
            marginBottom="40px"
          >
            <strong>Disclaimer:</strong> Consultants and DocRide are not liable
            for any health and safety issues, financial implications, or
            regulatory matters arising from the consultancy services.
            Recommendations are for consideration only and are not binding.
          </Typography>
        </Box>

        {/* Data Collection and Processing */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
          gutterBottom
        >
          14. Data Collection and Processing
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
          <Typography
            fontSize={{ xs: 16, sm: 18, md: 20 }}
            color="#080E06"
            marginBottom="20px"
          >
            LeadQual UK Ltd. is committed to enhancing the functionality and
            user experience of the DocRide platform while adhering to the
            General Data Protection Regulation (GDPR) and relevant UK data
            protection laws. We collect and process the following types of data:
          </Typography>
          <Box
            component="li"
            sx={{
              fontSize: { xs: 16, sm: 18, md: 20 },
              mb: 2,
              ml: 2,
              color: "#333",
            }}
          >
            <strong>Metadata Collection: </strong> We collect metadata, which
            includes technical data describing how, when, and by whom the
            platform is accessed and used. Metadata does not contain personal
            data and is utilized to improve system performance, enhance user
            experience, and ensure the security of our services.
          </Box>
          <Box
            component="li"
            sx={{
              fontSize: { xs: 16, sm: 18, md: 20 },
              mb: 2,
              ml: 2,
              color: "#333",
            }}
          >
            <strong>Aggregated Data Collection:</strong> We gather data provided
            by users through dropdown lists and other inputs within the DocRide
            platform, such as the categorization of incident root causes. This
            data is processed in an aggregated and anonymized manner, ensuring
            that it does not reveal the identity of any individual user or
            specific business.
          </Box>
          <Box
            component="li"
            sx={{
              fontSize: { xs: 16, sm: 18, md: 20 },
              mb: 2,
              ml: 2,
              color: "#333",
            }}
          >
            <strong>Performance Data Usage:</strong> We may use your OHS
            performance data—without revealing your business or personal
            identity—to rate your company’s health and safety performance score
            compared to other businesses. This analysis is conducted on an
            ongoing basis to provide insights and improve the Service for all
            users.
          </Box>
          <Box
            component="li"
            sx={{
              fontSize: { xs: 16, sm: 18, md: 20 },
              mb: 2,
              ml: 2,
              color: "#333",
            }}
          >
            <strong>Non-Payment Consequences:</strong> n case of non-payment of
            the required fee as and when it becomes payable, the admin account
            and all associated user accounts may be deactivated immediately. We
            also reserve the right to delete all Occupational Health and Safety
            (OHS) performance data and/or other data created by such business
            users.
          </Box>

          <Typography
            fontSize={{ xs: 16, sm: 18, md: 24 }}
            fontWeight="bold"
            color="#1E626C"
            marginBottom="20px"
          >
            Data Usage and Protection:
          </Typography>
          <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
            <Typography
              fontSize={{ xs: 16, sm: 18, md: 20 }}
              color="#080E06"
              marginBottom="20px"
            >
              Metadata, aggregated data, and performance data are used solely
              for internal analysis to enhance the DocRide platform, develop new
              features, and provide statistical insights to improve occupational
              health and safety standards.
            </Typography>
            <Box
              component="li"
              sx={{
                fontSize: { xs: 16, sm: 18, md: 20 },
                mb: 2,
                ml: 2,
                color: "#333",
              }}
            >
              Data is processed in a manner that ensures privacy,
              confidentiality, and compliance with all applicable laws.
            </Box>

            <Box
              component="li"
              sx={{
                fontSize: { xs: 16, sm: 18, md: 20 },
                mb: 2,
                ml: 2,
                color: "#333",
              }}
            >
              We implement stringent security measures and organizational
              controls to protect data from unauthorized access, alteration, or
              destruction.
            </Box>
            <Box
              component="li"
              sx={{
                fontSize: { xs: 16, sm: 18, md: 20 },
                mb: 2,
                ml: 2,
                color: "#333",
              }}
            >
              We implement stringent security measures and organizational
              controls to protect data from unauthorized access, alteration, or
              destruction.
            </Box>
          </Box>

          <Typography
            fontSize={{ xs: 16, sm: 18, md: 24 }}
            fontWeight="bold"
            color="#1E626C"
            marginBottom="20px"
          >
            Consent and Rights:
          </Typography>
          <Box
            component="li"
            sx={{
              fontSize: { xs: 16, sm: 18, md: 20 },
              mb: 2,
              ml: 2,
              color: "#333",
            }}
          >
            Users consent to the collection and processing of metadata,
            aggregated data, and performance data as part of their agreement to
            use the DocRide platform.
          </Box>
          <Box
            component="li"
            sx={{
              fontSize: { xs: 16, sm: 18, md: 20 },
              mb: 2,
              ml: 2,
              color: "#333",
            }}
          >
            Users have the right to access their personal data, request
            correction of inaccuracies, and, where applicable, request deletion
            in accordance with data protection regulations. For OHS performance
            data, users can access this information but cannot edit previous
            records to ensure data integrity and trustworthiness for clients,
            insurers, and regulators. Deletion of OHS performance data is
            permitted only if it does not conflict with legal or compliance
            obligations.
          </Box>
          <Box
            component="li"
            sx={{
              fontSize: { xs: 16, sm: 18, md: 20 },
              mb: 2,
              ml: 2,
              color: "#333",
            }}
          >
            Users may withdraw their consent at any time, impacting further use
            of their data but not the lawfulness of processing based on consent
            before its withdrawal.
          </Box>

          <Typography
            fontSize={{ xs: 16, sm: 18, md: 24 }}
            fontWeight="bold"
            color="#1E626C"
            marginBottom="20px"
          >
            Data Sharing and Disclosure:
          </Typography>
          <Box
            component="li"
            sx={{
              fontSize: { xs: 16, sm: 18, md: 20 },
              mb: 2,
              ml: 2,
              color: "#333",
            }}
          >
            We do not disclose any individualized or identifiable data to third
            parties without explicit consent unless required by law or necessary
            for legal protection. By using the DocRide service, users
            acknowledge and consent to the collection, processing, and use of
            metadata, aggregated data, and performance data as described above.
          </Box>
        </Box>

        {/* Disclaimer of Warranties */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
          gutterBottom
        >
          15. Disclaimer of Warranties
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
          <Box
            component="li"
            sx={{
              fontSize: { xs: 14, sm: 18, md: 20 },
              mb: 2,
              ml: 2,
              color: "#333",
            }}
          >
            The Service, including the DocRide software and all related
            applications, platforms, and networks, is provided on an "as-is" and
            "as-available" basis. To the fullest extent permitted by law,
            LeadQual UK Ltd. expressly disclaims all warranties, whether
            express, implied, statutory, or otherwise, including but not limited
            to warranties of merchantability, fitness for a particular purpose,
            non-infringement, or that the Service will be uninterrupted,
            error-free, or free of bugs, defects, or harmful components. You
            acknowledge that you use the Service at your own risk, and LeadQual
            UK Ltd. does not guarantee that the Service will meet your
            requirements or operate without interruptions or errors. Any
            reliance on the Service, including its accuracy, reliability, or
            performance, is at your sole discretion and risk.
          </Box>
          <Box
            component="li"
            sx={{
              fontSize: { xs: 14, sm: 18, md: 20 },
              mb: 2,
              ml: 2,
              color: "#333",
            }}
          >
            <strong>AI Chatbot Integration:</strong> DocRide incorporates
            advanced chatbot integrations from reputable providers to enable
            users to develop Occupational Health and Safety (OHS) management
            systems efficiently and effectively. However, artificial
            intelligence (AI) tools, including these chatbots, may produce
            errors, omissions, or incomplete outputs. It is the sole
            responsibility of the user to thoroughly review and verify all AI-
            generated content, including documents, recommendations, or data,
            prior to submission for approval or implementation. LeadQual UK Ltd.
            is not liable for any consequences arising from reliance on
            unverified AI-produced work.
          </Box>
        </Box>

        {/* Indemnification */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
          gutterBottom
        >
          16. Indemnification
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
          <Box
            component="li"
            sx={{
              fontSize: { xs: 14, sm: 18, md: 20 },
              mb: 2,
              ml: 2,
              color: "#333",
            }}
          >
            You agree to indemnify, defend, and hold harmless LeadQual UK Ltd.,
            its affiliates, officers, directors, employees, agents, suppliers,
            and licensors from and against any claims, liabilities, damages,
            losses, or expenses (including reasonable legal fees) arising out of
            or related to your use of the Service, violation of this Agreement,
            or any negligent or unlawful acts or omissions by you or your
            authorized users. This includes, but is not limited to, claims
            resulting from your implementation of OHS systems developed through
            the Service.
          </Box>
        </Box>

        {/* Force Majeure */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
          gutterBottom
        >
          17. Force Majeure
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
          <Box
            component="li"
            sx={{
              fontSize: { xs: 14, sm: 18, md: 20 },
              mb: 2,
              ml: 2,
              color: "#333",
            }}
          >
            LeadQual UK Ltd. shall not be liable for any failure or delay in
            performing its obligations under this Agreement due to circumstances
            beyond its reasonable control, including but not limited to acts of
            God, natural disasters, war, terrorism, government actions, power
            failures, internet outages, or third-party service disruptions.
          </Box>
        </Box>

        {/* Contact Information */}
        <Typography
          fontSize={{ xs: 24, sm: 28, md: 30 }}
          fontWeight="bold"
          color="#1E626C"
          paddingBottom="10px"
          gutterBottom
        >
          18. Contact Information
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 4 }}>
          <Typography fontSize={{ xs: 16, sm: 18, md: 20 }}>
            If you have any questions about this Agreement or the Service,
            please contact us at{" "}
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
        </Box>
      </Box>
    </Box>
  );
};

export default UserAgreement;
