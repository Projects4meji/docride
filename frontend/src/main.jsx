import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme"; // Import your theme
import App from "./App.jsx";
import "@fontsource/outfit";
import "@fontsource/outfit/700.css"; 
import "@fontsource/outfit/900.css";

export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <HelmetProvider> {/* ✅ Wrap the whole app */}
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </HelmetProvider>
</StrictMode>
);
