import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/headers/Navbar";
import Footer from "./components/headers/Footer";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import FAQ from "./components/pages/FAQ";
import Policy from "./components/Policies/Policy";
import Modules from "./components/pages/Modules";
import Blogs from "./components/pages/Blogs";
import FAQDetail from "./components/pages/FAQDetail";
import ISO45001 from "./components/Blogs/ISO45001";
import About from "./components/pages/About";
import PricingPlans from "./components/pages/Pricing";
import PricePolicy from "./components/Policies/PricePolicy";
import UserAgreement from "./components/Policies/UserAgreement";
import Benefits from "./components/pages/Benefits";
import PaymentInfo from "./components/pages/PaymentInfo";
import Checkout from "./components/pages/Checkout";
import OHSManage from "./components/Blogs/OHSManage";
import ISOAudit from "./components/Blogs/ISO45001";
import RIDReport from "./components/Blogs/RIDReport";
import Myths from "./components/Blogs/Myths";

// Custom Theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#032C34",
    },
    secondary: {
      main: "#2C8A7A",
    },
    background: {
      default: "#F4F7F6",
    },
  },
  typography: {
    fontFamily: `"Outfit", "sans-serif"`,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/1" element={<OHSManage />} />
          <Route path="/blog/2" element={<ISO45001 />} />
          <Route path="/blog/3" element={<RIDReport />} />
          <Route path="/blog/4" element={<Myths />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<PricingPlans />} />
          <Route path="/payment" element={<PaymentInfo />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/faq/:categoryId" element={<FAQDetail />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/pricepolicy" element={<PricePolicy />} />
          <Route path="/agreement" element={<UserAgreement />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
