import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/headers/Navbar";
import Footer from "./components/headers/Footer";
import Home from "./components/pages/Home";
import Features from "./components/pages/Features";
import Contact from "./components/pages/Contact";
import FAQ from "./components/pages/FAQ";
import Policy from "./components/pages/Policy";
import Modules from "./components/pages/Modules";
import Blogs from "./components/pages/Blogs";
import FAQDetail from "./components/pages/FAQDetail";
import IndivBlog from "./components/pages/IndivBlog";

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
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:id" element={<IndivBlog />} />
          <Route path="/features" element={<Features />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/faq/:categoryId" element={<FAQDetail />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
