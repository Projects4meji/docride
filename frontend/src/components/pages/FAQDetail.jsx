import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate, useParams } from "react-router-dom";
import bgimage from "../../assets/bgimage.avif";
import faqqm from "../../assets/faq/faqqm.avif";

const faqCategories = [
  { title: "Getting Started", id: "getting-started" },
  { title: "My Account", id: "my-account" },
  { title: "Audit", id: "audit" },
  { title: "Follow up", id: "follow-up" },
  { title: "Payment", id: "payment" },
];

const faqData = {
  "getting-started": [
    {
      question: "What if we are not sure how to use DocRide?",
      answer:
        "If you're unsure how to use DocRide, we're here to help. While we've made it user-friendly, we understand that some businesses may need extra support. We've created demos and explainer videos for all DocRide features, which can be very helpful in getting you started. These resources are available for you to watch at your convenience. Additionally, we offer a subscription package that includes health and safety consultancy services. Our professional consultants will provide personalized guidance, making it easy for you to effectively manage your health and safety operations with DocRide. With their expertise, you'll navigate DocRide with confidence, ensuring the safety of your business operations.",
    },
    {
      question:
        "What is the optimum balance between Flexibility and simplicity as you claim?",
      answer:
        "The optimum balance between flexibility and simplicity in DocRide means that our platform is designed to meet the needs of various organizations while maintaining ease of use. We've meticulously crafted the flow of health and safety processes, aligning them with ISO 45001 requirements and industry best practices. For instance, we've pre-designed forms for risk assessments, non-conformance reports, corrective actions, incident reporting, and investigations, ensuring all necessary details are included. This minimizes the risk of overlooking crucial information. DocRide is suitable for organizations with up to a single higher-level approval system, making it accessible to a wide range of businesses. With this balance of flexibility and simplicity, DocRide offers an intuitive and efficient solution for health and safety management.",
    },
    {
      question: "What is the OHS consultancy and how does it work?",
      answer:
        "The OHS consultancy provided by DocRide involves assigning a dedicated consultant to your business. This consultant will serve as your single point of contact for all health and safety matters. You can seek guidance from your assigned health and safety professional regarding any issues or questions you have. Please note that this consultancy service includes 8 hours per month of online consultancy only. If you require additional consultancy beyond this, please refer to our package details for more information. Before engaging with our consultancy services, we encourage you to review the Do's and Don'ts to understand the scope of what the H&S Consultancy covers. This will ensure clarity on the services provided and how they can benefit your business.",
    },
    {
      question:
        "Are there ready-to-use Risk Assessments and Inspection Checklists available?",
      answer:
        "While we don't offer ready-to-use risk assessments and inspection checklists, there's a good reason for it. In health and safety management, one size doesn't fit all. Every workplace is unique, with its own set of risks and operational context. Using pre-made risk assessments or inspection checklists might seem convenient, but it can lead to documentation overload and an inefficient system. Plus, it may not effectively address the specific risks your business faces. Instead, DocRide provides a flexible platform where you can tailor risk assessments and inspection checklists to your specific needs. This ensures that your health and safety management system is effective and efficient, addressing the real risks your business encounters.",
    },
  ],

  "my-account": [
    {
      question:
        "We are a business outside of the UK. Can we use DocRide for our business and get the claimed benefits of DocRide?",
      answer:
        "In most of the cases, it is Yes. However, if there are any specific legal or other requirements then you can discuss them with us and we shall let you know if this product is suitable for your business or not.",
    },
    {
      question:
        "We are a large organization where we require multi-level authorizations and approvals related to health and safety. Is DocRide suitable for us?",
      answer:
        "DocRide prioritizes a balance between flexibility and simplicity, which is why we don't offer multi-level authorizations as a standard feature. However, for large organizations like yours that require such functionality, we offer an Exclusive package. With the Exclusive package, we can customize DocRide to meet the specific needs of your business, including implementing multi-level authorizations. Contact us today to discuss how we can tailor DocRide to work exclusively for your organization's health and safety management needs.",
    },
    {
      question:
        "Can we request changes in DocRide features to suit our specific business needs?",
      answer:
        "Yes, you can request changes to DocRide features to suit your specific business needs with our Exclusive Package. Please contact us today to discuss your requirements in detail. We'll work closely with you to tailor DocRide to meet your unique needs and ensure it aligns perfectly with your business operations.",
    },
  ],

  audit: [
    {
      question:
        "What is ISO 45001 certification and how is it relevant to my business?",
      answer:
        "ISO 45001 certification provides a framework for effectively managing your business's health and safety requirements. It helps enhance workplace safety, comply with legal obligations, improve efficiency, and enhance your reputation as a responsible organization.",
    },
    {
      question:
        "How can we get ISO 45001 certification for our business if we use DocRide?",
      answer:
        "Using DocRide effectively can help your business align with many of the ISO 45001:2018 requirements. To ensure full conformity, you can conduct a Gap analysis using the provided matrix (click here to download). Alternatively, consider subscribing to our package that includes consultancy services. Our professional consultants will provide guidance and support throughout the certification process, helping you navigate the requirements with ease.",
    },
    {
      question:
        "Can our business be certified for ISO 45001:2018 if we purchase a DocRide subscription?",
      answer:
        "No. Just purchasing the DocRide subscription will not make your business’s health and safety management system ISO 45001:2018 compliant. You will have to effectively use DocRide and ensure your business is managing health and safety risks effectively and efficiently.",
    },
    {
      question:
        "What are the legal requirements related to health and safety in the UK?",
      answer:
        "In the UK, health and safety legislation is governed by various laws and regulations aimed at ensuring the safety and well-being of workers and the public. Some of the key legal requirements related to health and safety include: The Health and Safety at Work etc. Act 1974: This is the primary piece of legislation governing health and safety in the UK. It places a duty on employers to ensure the health, safety, and welfare of their employees at work. The Management of Health and Safety at Work Regulations 1999: These regulations require employers to assess and manage risks to health and safety in the workplace. This includes conducting risk assessments and implementing measures to control risks. The Workplace (Health, Safety and Welfare) Regulations 1992: These regulations cover a wide range of health and safety issues in the workplace, including the provision of a safe working environment, adequate ventilation, lighting, and welfare facilities. The Reporting of Injuries, Diseases and Dangerous Occurrences Regulations 2013 (RIDDOR): These regulations require employers to report certain workplace accidents, injuries, diseases, and dangerous occurrences to the relevant authorities. The Control of Substances Hazardous to Health (COSHH) Regulations 2002: These regulations require employers to control exposure to hazardous substances and ensure the safety of employees who work with or are exposed to such substances. The Personal Protective Equipment at Work Regulations 1992: These regulations require employers to provide suitable personal protective equipment (PPE) to employees who may be exposed to risks to their health and safety at work. These are just a few examples of the legal requirements related to health and safety in the UK. Employers must ensure compliance with all relevant legislation to protect the health and safety of their employees and others affected by their work activities.",
    },
  ],

  "follow-up": [
    {
      question: "Is our health and safety data safe and secure on DocRide?",
      answer:
        "Yes, your health and safety data is safe and secure on DocRide. We utilize AWS cloud servers, known for their high levels of security, to store users' data. With this robust infrastructure in place, you can rest assured that your data is protected from loss.",
    },
    {
      question:
        "What if we are not satisfied with the OHS Consultant assigned to our business?",
      answer:
        "If you are not satisfied with the OHS Consultant assigned to your business, we're here to address your concerns. While all our H&S Consultants are certified members of IOSH and some hold the CFIOSH designation, we understand that preferences and needs may vary. If you find that the assigned consultant is not meeting your expectations, you have the option to request a change. We'll work to assign a new consultant better suited to your needs. Alternatively, if you're still not satisfied, you can opt out of the consultancy package. In the event of opting out, refunds will be processed accordingly. Your satisfaction is important to us, and we strive to ensure that you receive the support you need for effective health and safety management.",
    },
    {
      question:
        "We do not have any Health and safety management experience. Is DocRide still suitable for us?",
      answer:
        "Absolutely! DocRide is designed to be user-friendly and accessible even for those without prior health and safety management experience. Our platform comes equipped with a simple and efficient health and safety management system, complete with predefined process flows for various H&S processes. All you need to do is assign the appropriate individuals to carry out these processes and document them using DocRide. If you lack in-house health and safety expertise, don't worry. We offer subscription packages that include access to health and safety consultancy services. Our professional consultants will guide you through the process, making health and safety management easy and effective for your business. Before making a decision, we encourage you to review the Do's and Don'ts of our consultancy services to understand how our consultants can support you. With DocRide and our consultancy services, managing health and safety has never been easier.",
    },
  ],

  payment: [
    {
      question: "Is it price competitive?",
      answer:
        "We have kept the subscription price very competitive to ensure that small and medium businesses can afford it. We do not ask for long-term or annual commitments.",
    },
    {
      question: "Can we switch between various Subscription Packages?",
      answer:
        "Yes, you can switch between the Economy and VIP Packages at any time. However, please note that subscription charges are paid in advance for the full calendar month. If you switch from a higher premium package to a lower premium package, the subscription charges for the current month will not be refunded. Conversely, if you upgrade from the Economy to the VIP package, you will need to pay the additional monthly fee in advance. If you are subscribed to the Exclusive Package, switching subscriptions may not be possible due to the long-term contract we have in place with you. This is because we may have made specific product changes to exclusively meet your business's health and safety requirements.",
    },
    {
      question: "What are “Data Calls” mentioned in the pricing and packages?",
      answer:
        "'Data Calls' encompass various interactions with the data stored in DocRide, including retrieving, storing, copying, pasting, and fetching performance data. Each instance of these actions, whether initiated by the user or system processes, is considered a data call and may incur associated costs based on AWS pricing for data transfer and computing resources usage.",
    },
    {
      question: "Do we pay additionally for the data calls?",
      answer:
        "No, you do not pay additional charges specifically for data calls. Your payment structure is based on a monthly subscription fee determined by the number of user accounts you have purchased. The data calls metric serves as a maximum limit for your usage, but you are not billed separately for each data call.",
    },
    {
      question:
        "Can we purchase additional Data Calls if we have utilized the maximum available monthly limit?",
      answer:
        "In most cases, you should not exceed the maximum limit provided, as we have allocated a generous allowance. However, if your usage of DocRide is extensive and exceeds the maximum limit, additional data calls will be charged and billed accordingly.",
    },
  ],
};

const FAQDetail = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { categoryId } = useParams();
  const navigate = useNavigate();
  const faqs = faqData[categoryId] || [];
  const categoryTitle =
    faqCategories.find((cat) => cat.id === categoryId)?.title || "FAQ";

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
      }}
    >
      {/* FAQ Header Section */}
      <Box
        sx={{
          bgcolor: "#032C34",
          color: "#A0D0C5",
          py: 10,
          position: "relative",
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100%",
            backgroundImage: `url(${bgimage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            opacity: 0.5,
            zIndex: 0,
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 1, textAlign: "center" }}
        >
          <Typography variant="h3" fontWeight="bold" color="white">
            FAQ Categories
          </Typography>
        </Container>
      </Box>

      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${faqqm})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "20%",
          zIndex: 0,
        }}
      />
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1, pt: 6 }}>
        <Grid container spacing={2}>
          {/* Sidebar - Responsive for Mobile & Large Screens */}
          <Grid item xs={12} md={2}>
            {/* Dropdown for Small Screens */}
            <Box
              sx={{
                display: { xs: "block", md: "none" }, // Show dropdown only on small screens
                mb: 2,
              }}
            >
              <Select
                fullWidth
                value={categoryId}
                onChange={(e) => navigate(`/faq/${e.target.value}`)}
                sx={{
                  bgcolor: "linear-gradient(180deg, #1B988F 0%, #0C5E5E 100%)",
                  borderRadius: "8px",
                  boxShadow: 1,
                  "& .MuiSelect-select": { py: 1, fontSize: "16px" },
                }}
              >
                {faqCategories.map((cat) => (
                  <MenuItem
                    key={cat.id}
                    value={cat.id}
                    sx={{
                      transition: "all 0.3s ease-in-out",
                      bgcolor:
                        categoryId === cat.id ? "#96E0CC" : "transparent", // ✅ Selected item background
                      "&:hover": {
                        bgcolor: "#96E0CC",
                        color: "#ffffff", // ✅ Hover effect on mobile
                      },
                    }}
                  >
                    {cat.title}
                  </MenuItem>
                ))}
              </Select>
            </Box>

            {/* Sidebar for Larger Screens */}
            <Box
              sx={{
                display: { xs: "none", md: "block" }, // Hide sidebar on small screens
                height: "70vh",
                background: "linear-gradient(180deg, #1B988F 0%, #0C5E5E 100%)",
                borderRadius: "30px",
                boxShadow: 1,
                p: 2,
                textAlign: "center",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  cursor: "pointer",
                  mb: 2,
                  fontWeight: "bold",
                  color: "#ffffff",
                }}
                onClick={() => navigate("/faq")}
              >
                ← Back
              </Typography>
              {faqCategories.map((cat) => (
                <Typography
                  key={cat.id}
                  sx={{
                    mb: 1,
                    fontSize: "16px",
                    py: "12px",
                    cursor: "pointer",
                    color: categoryId === cat.id ? "#96E0CC" : "#ffffff",
                    fontWeight: categoryId === cat.id ? "bold" : "normal",
                    textDecoration:
                      categoryId === cat.id ? "underline" : "none",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": { color: "#96E0CC" },
                  }}
                  onClick={() => navigate(`/faq/${cat.id}`)}
                >
                  {cat.title}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* FAQ Content */}
          <Grid item xs={12} md={9}>
            <Typography
              variant="h5"
              fontWeight="bold"
              fontSize="24px"
              sx={{
                mb: 2,
                color: "#007b7f",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {categoryTitle}
            </Typography>
            <Box>
              {faqs.map((faq, index) => (
                <Accordion
                  key={index}
                  sx={{
                    bgcolor: "white",
                    mb: 2,
                    border: "2px solid #C0DED8",
                    borderRadius: "8px",
                    boxShadow: 2,
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#6DB9A0" }} />}
                    sx={{
                      bgcolor: "#ffffff",
                      color: "#51A18B",
                      fontWeight: "bold",
                      borderRadius: "8px 8px 0 0",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "16px", sm: "18px" },
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      bgcolor: "#f8fbfa",
                      color: "black",
                      borderRadius: "0 0 8px 8px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", sm: "16px" },
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Contact Section */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
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
          Can&apos;t find your <span style={{ color: "#1DA196" }}>answers</span>{" "}
          here? <span style={{ color: "#68B9BA" }}>Reach</span> out to us.
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
  );
};

export default FAQDetail;
