import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";
import { ExpandMore, Search } from "@mui/icons-material";
import bgimage from "../../assets/bgimage.jpg";

const faqData = [
  {
    question: "Is it price competitive?",
    answer:
      "We have kept the subscription price very competitive to ensure that small and medium businesses can afford it. We do not ask for long-term or annual commitments.",
  },
  {
    question: "Why is it claimed to be better than similar available products?",
    answer:
      "Our product stands out because it is designed by safety professionals, ensuring your transition to a paperless system is seamless and efficient. It also meets ISO 45001 requirements.",
  },
  {
    question:
      "We do not have any Health and Safety management experience. Is DocRide still suitable for us?",
    answer:
      "Absolutely! DocRide is designed for ease of use, even for those without experience. Our platform provides predefined workflows and access to consultancy services.",
  },
  {
    question:
      "What is the optimum balance between Flexibility and Simplicity as you claim?",
    answer:
      "DocRide ensures flexibility while keeping processes simple, following ISO 45001 guidelines and best practices. Pre-designed forms reduce documentation workload.",
  },
  {
    question:
      "Are there ready-to-use Risk Assessments and Inspection Checklists available?",
    answer:
      "No, as every workplace is unique. DocRide allows you to tailor risk assessments and checklists to fit your business needs.",
  },
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
    question: "What if we are not sure how to use DocRide?",
    answer:
      "If you're unsure how to use DocRide, we're here to help. While we've made it user-friendly, we understand that some businesses may need extra support. We've created demos and explainer videos for all DocRide features, which can be very helpful in getting you started. These resources are available for you to watch at your convenience. Additionally, we offer a subscription package that includes health and safety consultancy services. Our professional consultants will provide personalized guidance, making it easy for you to effectively manage your health and safety operations with DocRide. With their expertise, you'll navigate DocRide with confidence, ensuring the safety of your business operations.",
  },
  {
    question: "Can we switch between various Subscription Packages?",
    answer:
      "Yes, you can switch between the Economy and VIP Packages at any time. However, please note that subscription charges are paid in advance for the full calendar month. If you switch from a higher premium package to a lower premium package, the subscription charges for the current month will not be refunded. Conversely, if you upgrade from the Economy to the VIP package, you will need to pay the additional monthly fee in advance. If you are subscribed to the Exclusive Package, switching subscriptions may not be possible due to the long-term contract we have in place with you. This is because we may have made specific product changes to exclusively meet your business's health and safety requirements.",
  },
  {
    question: "Is our health and safety data safe and secure on DocRide?",
    answer:
      "Yes, your health and safety data is safe and secure on DocRide. We utilize AWS cloud servers, known for their high levels of security, to store users' data. With this robust infrastructure in place, you can rest assured that your data is protected from loss.",
  },
  {
    question:
      "Can we request changes in DocRide features to suit our specific business needs?",
    answer:
      "Yes, you can request changes to DocRide features to suit your specific business needs with our Exclusive Package. Please contact us today to discuss your requirements in detail. We'll work closely with you to tailor DocRide to meet your unique needs and ensure it aligns perfectly with your business operations.",
  },
  {
    question: "What is the OHS consultancy and how does it work?",
    answer:
      "The OHS consultancy provided by DocRide involves assigning a dedicated consultant to your business. This consultant will serve as your single point of contact for all health and safety matters. You can seek guidance from your assigned health and safety professional regarding any issues or questions you have. Please note that this consultancy service includes 8 hours per month of online consultancy only. If you require additional consultancy beyond this, please refer to our package details for more information. Before engaging with our consultancy services, we encourage you to review the Do's and Don'ts to understand the scope of what the H&S Consultancy covers. This will ensure clarity on the services provided and how they can benefit your business.",
  },
  {
    question:
      "What if we are not satisfied with the OHS Consultant assigned to our business?",
    answer:
      "If you are not satisfied with the OHS Consultant assigned to your business, we're here to address your concerns. While all our H&S Consultants are certified members of IOSH and some hold the CFIOSH designation, we understand that preferences and needs may vary. If you find that the assigned consultant is not meeting your expectations, you have the option to request a change. We'll work to assign a new consultant better suited to your needs. Alternatively, if you're still not satisfied, you can opt out of the consultancy package. In the event of opting out, refunds will be processed accordingly. Your satisfaction is important to us, and we strive to ensure that you receive the support you need for effective health and safety management.",
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
];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");

  // Filtered FAQs based on search term
  const filteredFAQs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box
      sx={{
        bgcolor: "#ffffff",
        width: "100vw",
        position: "relative",
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: 0.1,
          zIndex: -1,
        },
      }}
    >
      {/* FAQ Header Section */}
      <Box
        sx={{
          bgcolor: "#032C34",
          color: "#A0D0C5",
          pt: 6,
          pb: 4,
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
            Frequently Asked Questions
          </Typography>
          <Typography variant="body1" color="#D1E7E0" sx={{ mt: 1, mb: 3 }}>
            Ask Anything
          </Typography>

          {/* Search Bar - Dynamically Filters FAQ */}
          <Box sx={{ maxWidth: "600px", mx: "auto", mb: 6 }}>
            <TextField
              fullWidth
              placeholder="What can I help you with?"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{
                bgcolor: "white",
                borderRadius: "50px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "50px",
                  paddingRight: "10px",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <Search sx={{ color: "#6DB9A0" }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* FAQ Content Section */}
      <Container
        maxWidth="xl"
        sx={{ py: 8, px: { xs: 2, sm: 4, md: 6, lg: 30 } }}
      >
        <Grid container spacing={6} alignItems="start">
          {/* FAQ Questions */}
          <Grid item xs={12}>
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
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
                    expandIcon={<ExpandMore sx={{ color: "#6DB9A0" }} />}
                    sx={{
                      bgcolor: "#ffffff",
                      color: "#51A18B",
                      fontWeight: "bold",
                      borderRadius: "8px 8px 0 0",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "16px",
                          sm: "18px",
                          md: "20px",
                          lg: "22px",
                        },
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
                        fontSize: {
                          xs: "14px",
                          sm: "16px",
                          md: "18px",
                          lg: "20px",
                        },
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))
            ) : (
              <Typography variant="h6" textAlign="center" color="gray">
                No matching FAQs found.
              </Typography>
            )}
          </Grid>
        </Grid>
      </Container>

      {/* FAQ Submission Form */}
      <Container sx={{ pb: 6, px: { xs: 2, sm: 4, md: 6 } }}>
        <Box
          sx={{
            bgcolor: "#E8F2EF",
            borderRadius: "12px",
            maxWidth: "900px",
            mx: "auto",
            pt: 6,
            p: { xs: 2, sm: 3, md: 5 }, // Adjusts padding based on screen size
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            color="#195C4B"
            sx={{ fontSize: { xs: "18px", sm: "22px", md: "24px" } }} // Responsive font size
          >
            My question is not included in the FAQ
          </Typography>

          <Box component="form" sx={{ mt: 4 }}>
            {/* Email Input */}
            <TextField
              fullWidth
              required
              type="email"
              label="Email"
              variant="outlined"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                mb: 3,
                bgcolor: "white",
                borderRadius: "6px",
                "& .MuiOutlinedInput-root": {
                  fontSize: { xs: "14px", sm: "16px" }, // Responsive font size
                },
              }}
            />

            {/* Question Input */}
            <TextField
              fullWidth
              required
              label="Add your question below"
              variant="outlined"
              placeholder="Your question..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              sx={{
                mb: 3,
                bgcolor: "white",
                borderRadius: "6px",
                "& .MuiOutlinedInput-root": {
                  fontSize: { xs: "14px", sm: "16px" },
                },
              }}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              sx={{
                width: { xs: "80%", sm: "50%", md: "30%" }, // Adjust button width responsively
                bgcolor: "#6DB9A0",
                color: "white",
                fontSize: { xs: "14px", sm: "16px" },
                py: { xs: 1, sm: 1.2 }, // Adjust padding for different screen sizes
                "&:hover": { bgcolor: "#51A18B" },
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ;
